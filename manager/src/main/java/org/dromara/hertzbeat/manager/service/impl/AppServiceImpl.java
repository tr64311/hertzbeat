/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.dromara.hertzbeat.manager.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.dromara.hertzbeat.common.entity.job.Job;
import org.dromara.hertzbeat.common.entity.job.Metrics;
import org.dromara.hertzbeat.common.entity.manager.ParamDefine;
import org.dromara.hertzbeat.common.support.SpringContextHolder;
import org.dromara.hertzbeat.common.util.CommonUtil;
import org.dromara.hertzbeat.manager.dao.MonitorDao;
import org.dromara.hertzbeat.manager.pojo.dto.Hierarchy;
import org.dromara.hertzbeat.manager.pojo.dto.ObjectStoreConfigChangeEvent;
import org.dromara.hertzbeat.manager.pojo.dto.ObjectStoreDTO;
import org.dromara.hertzbeat.manager.service.AppService;
import org.dromara.hertzbeat.manager.service.MonitorService;
import org.dromara.hertzbeat.manager.service.ObjectStoreService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.event.EventListener;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.StreamUtils;
import org.springframework.util.StringUtils;
import org.yaml.snakeyaml.Yaml;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import static java.util.Objects.isNull;

/**
 * Monitoring Type Management Implementation
 * 监控类型管理实现
 * temporarily stores the monitoring configuration and parameter configuration in memory and then stores it in the
 * 暂时将监控配置和参数配置存放内存 之后存入数据库
 *
 * @author tomsun28
 */
@Service
@Order(value = Ordered.HIGHEST_PRECEDENCE)
@Slf4j
public class AppServiceImpl implements AppService, CommandLineRunner {

    private static final Yaml YAML = new Yaml();

    @Resource
    private MonitorDao monitorDao;

    @Resource
    private ObjectStoreConfigServiceImpl objectStoreConfigService;

    private final Map<String, Job> appDefines = new ConcurrentHashMap<>();

    private AppDefineStore appDefineStore;
    private final AppDefineStore jarAppDefineStore = new JarAppDefineStoreImpl();

    @Override
    public List<ParamDefine> getAppParamDefines(String app) {
        if (!StringUtils.hasText(app)) {
            return Collections.emptyList();
        }
        var appDefine = appDefines.get(app.toLowerCase());
        if (appDefine != null && appDefine.getParams() != null) {
            return appDefine.getParams();
        } else {
            return Collections.emptyList();
        }
    }

    @Override
    public Job getAppDefine(String app) throws IllegalArgumentException {
        if (!StringUtils.hasText(app)) {
            throw new IllegalArgumentException("The app can not null.");
        }
        var appDefine = appDefines.get(app.toLowerCase());
        if (appDefine == null) {
            throw new IllegalArgumentException("The app " + app + " not support.");
        }
        return appDefine.clone();
    }

    @Override
    public List<String> getAppDefineMetricNames(String app) {
        List<String> metricNames = new ArrayList<>(16);
        if (StringUtils.hasLength(app)) {
            var appDefine = appDefines.get(app.toLowerCase());
            if (appDefine == null) {
                throw new IllegalArgumentException("The app " + app + " not support.");
            }
            metricNames.addAll(appDefine.getMetrics().stream().map(Metrics::getName).collect(Collectors.toList()));
        } else {
            appDefines.forEach((k, v) ->
                    metricNames.addAll(v.getMetrics().stream().map(Metrics::getName).collect(Collectors.toList())));
        }
        return metricNames;
    }


    @Override
    public Map<String, String> getI18nResources(String lang) {
        Map<String, String> i18nMap = new HashMap<>(128);
        for (var job : appDefines.values()) {
            var name = job.getName();
            var i18nName = CommonUtil.getLangMappingValueFromI18nMap(lang, name);
            if (i18nName != null) {
                i18nMap.put("monitor.app." + job.getApp(), i18nName);
            }
            var help = job.getHelp();
            var i18nHelp = CommonUtil.getLangMappingValueFromI18nMap(lang, help);
            if (i18nHelp != null) {
                i18nMap.put("monitor.app." + job.getApp() + ".help", i18nHelp);
            }

            var helpLink = job.getHelpLink();
            var i18nHelpLink = CommonUtil.getLangMappingValueFromI18nMap(lang, helpLink);
            if (i18nHelpLink != null) {
                i18nMap.put("monitor.app." + job.getApp() + ".helpLink", i18nHelpLink);
            }

            for (var paramDefine : job.getParams()) {
                var paramDefineName = paramDefine.getName();
                var i18nParamName = CommonUtil.getLangMappingValueFromI18nMap(lang, paramDefineName);
                if (i18nParamName != null) {
                    i18nMap.put("monitor.app." + job.getApp() + ".param." + paramDefine.getField(), i18nParamName);
                }
            }
            for (var metrics : job.getMetrics()) {
                var metricsI18nName = metrics.getI18n();
                var i18nMetricsName = CommonUtil.getLangMappingValueFromI18nMap(lang, metricsI18nName);
                if (i18nMetricsName != null) {
                    i18nMap.put("monitor.app." + job.getApp() + ".metrics." + metrics.getName(), i18nMetricsName);
                }
                for (var field : metrics.getFields()) {
                    var fieldI18nName = field.getI18n();
                    var i18nMetricName = CommonUtil.getLangMappingValueFromI18nMap(lang, fieldI18nName);
                    if (i18nMetricName != null) {
                        i18nMap.put("monitor.app." + job.getApp() + ".metrics." + metrics.getName() + ".metric." + field.getField(), i18nMetricName);
                    }
                }
            }
        }
        return i18nMap;
    }

    @Override
    public List<Hierarchy> getAllAppHierarchy(String lang) {
        List<Hierarchy> hierarchies = new LinkedList<>();
        for (var job : appDefines.values()) {
            var hierarchyApp = new Hierarchy();
            hierarchyApp.setCategory(job.getCategory());
            hierarchyApp.setValue(job.getApp());
            var nameMap = job.getName();
            if (nameMap != null && !nameMap.isEmpty()) {
                var i18nName = CommonUtil.getLangMappingValueFromI18nMap(lang, nameMap);
                if (i18nName != null) {
                    hierarchyApp.setLabel(i18nName);
                }
            }
            List<Hierarchy> hierarchyMetricList = new LinkedList<>();
            if (job.getMetrics() != null) {
                for (var metrics : job.getMetrics()) {
                    var hierarchyMetric = new Hierarchy();
                    hierarchyMetric.setValue(metrics.getName());
                    var metricsI18nName = CommonUtil.getLangMappingValueFromI18nMap(lang, metrics.getI18n());
                    hierarchyMetric.setLabel(metricsI18nName != null ? metricsI18nName : metrics.getName());
                    List<Hierarchy> hierarchyFieldList = new LinkedList<>();
                    if (metrics.getFields() != null) {
                        for (var field : metrics.getFields()) {
                            var hierarchyField = new Hierarchy();
                            hierarchyField.setValue(field.getField());
                            var metricI18nName = CommonUtil.getLangMappingValueFromI18nMap(lang, field.getI18n());
                            hierarchyField.setLabel(metricI18nName != null ? metricI18nName : field.getField());
                            hierarchyField.setIsLeaf(true);
                            // for metric
                            hierarchyField.setType(field.getType());
                            hierarchyField.setUnit(field.getUnit());
                            hierarchyFieldList.add(hierarchyField);
                        }
                        hierarchyMetric.setChildren(hierarchyFieldList);
                    }
                    hierarchyMetricList.add(hierarchyMetric);
                }
            }
            hierarchyApp.setChildren(hierarchyMetricList);
            hierarchies.add(hierarchyApp);
        }
        return hierarchies;
    }

    @Override
    public Map<String, Job> getAllAppDefines() {
        return appDefines;
    }


    @Override
    public String getMonitorDefineFileContent(String app) {
        var appDefine = appDefineStore.loadAppDefine(app);
        if (isNull(appDefine)) {
            appDefine = jarAppDefineStore.loadAppDefine(app);
        }
        if (isNull(appDefine)) {
            throw new IllegalArgumentException("can not find " + app + " define yml");
        }
        return appDefine;
    }

    @Override
    public void applyMonitorDefineYml(String ymlContent, boolean isModify) {
        var yaml = new Yaml();
        Job app;
        try {
            app = yaml.loadAs(ymlContent, Job.class);
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new IllegalArgumentException("parse yml error: " + e.getMessage());
        }
        // app params verify
        verifyDefineAppContent(app, isModify);
        appDefineStore.save(app.getApp(), ymlContent);
        appDefines.put(app.getApp().toLowerCase(), app);
        // bug  当模板 app-redis.yml被修改，比如 增加指标组，删除指标，当前的job中，持有的缓存 metrics实例，
        // 解决 ：模板修改后，同类型模板的所有监控实例 ，在监控状态中，需要重新下发任务
        SpringContextHolder.getBean(MonitorService.class).updateAppCollectJob(app);
    }

    private void verifyDefineAppContent(Job app, boolean isModify) {
        Assert.notNull(app, "monitoring template can not null");
        Assert.notNull(app.getApp(), "monitoring template require attributes app");
        Assert.notNull(app.getCategory(), "monitoring template require attributes category");
        Assert.notEmpty(app.getName(), "monitoring template require attributes name");
        Assert.notEmpty(app.getParams(), "monitoring template require attributes params");
        var hasParamHost = app.getParams().stream().anyMatch(item -> "host".equals(item.getField()));
        Assert.isTrue(hasParamHost, "monitoring template attributes params must have param host");
        Assert.notEmpty(app.getMetrics(), "monitoring template require attributes metrics");
        var hasAvailableMetrics = app.getMetrics().stream().anyMatch(item -> item.getPriority() == 0);
        Assert.isTrue(hasAvailableMetrics, "monitoring template metrics list must have one priority 0 metrics");
        if (!isModify) {
            Assert.isNull(appDefines.get(app.getApp().toLowerCase()),
                    "monitoring template name " + app.getApp() + " already exists.");
        }
    }

    @Override
    public void deleteMonitorDefine(String app) {
        // if app has monitors now, delete failed
        var monitors = monitorDao.findMonitorsByAppEquals(app);
        if (monitors != null && !monitors.isEmpty()) {
            throw new IllegalArgumentException("Can not delete define which has monitoring instances.");
        }
        var classpath = Objects.requireNonNull(this.getClass().getClassLoader().getResource("")).getPath();
        var defineAppPath = classpath + "define" + File.separator + "app-" + app + ".yml";
        var defineAppFile = new File(defineAppPath);
        if (defineAppFile.exists() && defineAppFile.isFile()) {
            defineAppFile.delete();
        }
        appDefines.remove(app.toLowerCase());
    }

    @Override
    public void run(String... args) throws Exception {
        var objectStoreConfig = objectStoreConfigService.getConfig();
        refreshStore(objectStoreConfig);
    }

    @EventListener
    void onObjectStoreConfigChange(ObjectStoreConfigChangeEvent event) {
        refreshStore(event.getConfig());
    }

    /**
     * 刷新配置存储
     *
     * @param objectStoreConfig 文件服务配置
     */
    private void refreshStore(ObjectStoreDTO<?> objectStoreConfig) {
        if (objectStoreConfig == null) {
            appDefineStore = new LocalFileAppDefineStoreImpl();
        } else {
            switch (objectStoreConfig.getType()) {
                case OBS:
                    appDefineStore = new ObjectStoreAppDefineStoreImpl();
                    break;
                case FILE:
                default:
                    appDefineStore = new LocalFileAppDefineStoreImpl();
            }
        }
        var success = appDefineStore.loadAppDefines();
        if (!success) {
            new JarAppDefineStoreImpl().loadAppDefines();
        }
    }

    private interface AppDefineStore {

        /**
         * 加载所有采集任务配置
         */
        boolean loadAppDefines();

        /**
         * 加载某个采集任务配置
         *
         * @param app 应用名称
         * @return 采集任务配置文本
         */
        String loadAppDefine(String app);

        void save(String app, String ymlContent);

    }

    private class JarAppDefineStoreImpl implements AppDefineStore {

        @Override
        public boolean loadAppDefines() {
            try {
                log.info("load define app yml in internal jar");
                var resolver = new PathMatchingResourcePatternResolver();
                var resources = resolver.getResources("classpath:define/*.yml");
                for (var resource : resources) {
                    try (var inputStream = resource.getInputStream()) {
                        var app = YAML.loadAs(inputStream, Job.class);
                        appDefines.put(app.getApp().toLowerCase(), app);
                    } catch (IOException e) {
                        log.error(e.getMessage(), e);
                        log.error("Ignore this template file: {}.", resource.getFilename());
                    }
                }
                return true;
            } catch (IOException e) {
                log.error("define app yml not exist");
                return false;
            }
        }

        @Override
        public String loadAppDefine(String app) {
            // load define app yml in jar
            log.info("load define app yml in internal jar");
            var resolver = new PathMatchingResourcePatternResolver();
            var resource = resolver.getResource("classpath:define/app-" + app + ".yml");
            try (var inputStream = resource.getInputStream()) {
                return StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8);
            } catch (IOException e) {
                log.error(e.getMessage());
                return null;
            }
        }

        @Override
        public void save(String app, String ymlContent) {
            throw new UnsupportedOperationException();
        }

    }

    private class LocalFileAppDefineStoreImpl implements AppDefineStore {

        @Override
        public boolean loadAppDefines() {
            var rootUrl = this.getClass().getClassLoader().getResource("");
            if (rootUrl == null) {
                return false;
            }
            var classpath = rootUrl.getPath();
            var defineAppPath = classpath + "define";
            var directory = new File(defineAppPath);
            if (!directory.exists() || directory.listFiles() == null) {
                rootUrl = this.getClass().getResource(File.separator);
                if (rootUrl == null) {
                    return false;
                }
                classpath = rootUrl.getPath();
                defineAppPath = classpath + "define";
                directory = new File(defineAppPath);
                if (!directory.exists() || directory.listFiles() == null) {
                    return false;
                }
            }
            log.info("load define path {}", defineAppPath);
            for (var appFile : Objects.requireNonNull(directory.listFiles())) {
                if (appFile.exists() && appFile.isFile()) {
                    if (appFile.isHidden()
                            || (!appFile.getName().endsWith("yml") && !appFile.getName().endsWith("yaml"))) {
                        log.error("Ignore this template file: {}.", appFile.getName());
                        continue;
                    }
                    try (var fileInputStream = new FileInputStream(appFile)) {
                        var app = YAML.loadAs(fileInputStream, Job.class);
                        if (app != null) {
                            appDefines.put(app.getApp().toLowerCase(), app);
                        }
                    } catch (IOException e) {
                        log.error(e.getMessage(), e);
                        log.error("Ignore this template file: {}.", appFile.getName());
                    }
                }
            }
            return true;
        }

        @Override
        public String loadAppDefine(String app) {
            var classpath = Objects.requireNonNull(this.getClass().getClassLoader().getResource("")).getPath();
            var defineAppPath = classpath + "define" + File.separator + "app-" + app + ".yml";
            var defineAppFile = new File(defineAppPath);
            if (defineAppFile.exists() && defineAppFile.isFile()) {
                log.info("load {} define app yml in file: {}", app, defineAppPath);
                try {
                    return FileUtils.readFileToString(defineAppFile, StandardCharsets.UTF_8);
                } catch (Exception e) {
                    log.error(e.getMessage());
                }
            }
            return null;
        }

        @Override
        public void save(String app, String ymlContent) {
            var classpath = Objects.requireNonNull(this.getClass().getClassLoader().getResource("")).getPath();
            var defineAppPath = classpath + "define" + File.separator + "app-" + app + ".yml";
            var defineAppFile = new File(defineAppPath);
            try {
                FileUtils.writeStringToFile(defineAppFile, ymlContent, StandardCharsets.UTF_8, false);
            } catch (Exception e) {
                log.error(e.getMessage());
                throw new RuntimeException("flush file " + defineAppPath + " error: " + e.getMessage());
            }
        }
    }

    private class ObjectStoreAppDefineStoreImpl implements AppDefineStore {

        @Override
        public boolean loadAppDefines() {
            var objectStoreService = getObjectStoreService();
            objectStoreService.list("define")
                    .forEach(it -> {
                        if (it.getInputStream() != null) {
                            var app = YAML.loadAs(it.getInputStream(), Job.class);
                            if (app != null) {
                                appDefines.put(app.getApp().toLowerCase(), app);
                            }
                        }
                    });
            return false;
        }

        @Override
        public String loadAppDefine(String app) {
            var objectStoreService = getObjectStoreService();
            var file = objectStoreService.download(getDefineAppPath(app));
            if (isNull(file)) {
                return null;
            }
            try {
                return IOUtils.toString(file.getInputStream(), StandardCharsets.UTF_8);
            } catch (IOException e) {
                log.error("load app define from object store service error", e);
                return null;
            }
        }

        @Override
        public void save(String app, String ymlContent) {
            var objectStoreService = getObjectStoreService();
            objectStoreService.upload(getDefineAppPath(app), IOUtils.toInputStream(ymlContent, StandardCharsets.UTF_8));
        }

        private ObjectStoreService getObjectStoreService() {
            return SpringContextHolder.getBean(ObsObjectStoreServiceImpl.class);
        }

        private String getDefineAppPath(String app) {
            return "define/app-" + app + ".yml";
        }

    }

}
