(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{422:function(_,v,a){"use strict";a.r(v);var p=a(7),t=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("你好呀，我的老朋友！我是老寇，欢迎来到老寇云平台！")]),_._v(" "),v("h4",{attrs:{id:"_3-5-4更新日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-4更新日志"}},[_._v("#")]),_._v(" 3.5.4更新日志")]),_._v(" "),v("p",[_._v("🚀 升级Spring Boot版本到3.5.4")]),_._v(" "),v("p",[_._v("🚀 升级Spring OAuth2 Authorization Server版本到1.5.2")]),_._v(" "),v("p",[_._v("🚀 升级Spring Cloud Alibaba版本到2023.0.3.3")]),_._v(" "),v("h6",{attrs:{id:"功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[_._v("#")]),_._v(" 功能")]),_._v(" "),v("p",[_._v("🚀 移除优雅停机")]),_._v(" "),v("p",[_._v("🚀 网关加密去掉，由auth服务解密【用户名密码登录】")]),_._v(" "),v("p",[_._v("🚀 去掉@Autowired注解，改为构造器注入")]),_._v(" "),v("p",[_._v("🚀 重构oss上传文件【本地/亚马逊S3】，独立服务，基于Dubbo调用")]),_._v(" "),v("h4",{attrs:{id:"_3-5-1更新日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1更新日志"}},[_._v("#")]),_._v(" 3.5.1更新日志")]),_._v(" "),v("h6",{attrs:{id:"版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[_._v("#")]),_._v(" 版本")]),_._v(" "),v("p",[_._v("🚀 升级Spring Boot版本到3.5.3")]),_._v(" "),v("p",[_._v("🚀 Fory升级到0.12.0-SNAPSHOT")]),_._v(" "),v("p",[_._v("🚀 升级Spring OAuth2 Authorization Server版本到1.5.1")]),_._v(" "),v("h6",{attrs:{id:"功能-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能-2"}},[_._v("#")]),_._v(" 功能")]),_._v(" "),v("p",[_._v("🚀 为了减少不必要的修改，分别将laokou_前缀改为iot和LAOKOU_改为IOT，避免自定义项目结构修改过多的代码【主要修改NACOS命名空间和MQ主题】")]),_._v(" "),v("p",[_._v("🚀 Redis序列化将Jackson改为Fory【Jackson序列化已移除】")]),_._v(" "),v("p",[_._v("🚀 构建物联网技术栈，摈弃互联网那一套技术栈，项目移除RocketMQ【Kafka替代RocketMQ】/ShardingSphere/Seata/Dubbo以及其他用不到的模块和依赖，简化项目结构，专注于业务，业务驱动技术！！！【主要还是我玩腻了，东西多了懒得维护，现在本项目的技术栈只为IoT服务】")]),_._v(" "),v("p",[_._v("🚀 项目强制依赖Kafka，Pulsar，Zookeeper")]),_._v(" "),v("p",[_._v("🚀 数据库名称去掉boot_前缀")]),_._v(" "),v("p",[_._v("🚀 项目移除领域溯源的概念，只保留领域事件，统一由MQ处理")]),_._v(" "),v("p",[_._v("🚀 多租户架构变更，用户权限只做字段隔离，IoT数据独立数据源，这样就可以容纳很多的数据【针对物联网业务，合理调整】")]),_._v(" "),v("p",[_._v("🚀 去掉COLA的规则/扩展点/流程，简化项目结构")]),_._v(" "),v("p",[_._v("🚀 修改二级缓存【Caffine+Redis】，去掉本地缓存，只保留Redis")]),_._v(" "),v("p",[_._v("🚀 移除Sentinel，替代方案Resilience4j【Spring Cloud Gateway已完成改造】")]),_._v(" "),v("p",[_._v("🚀 增量数据库Liquebase")]),_._v(" "),v("p",[_._v("🚀 租户只支持精准匹配数据库表，不支持模糊匹配")]),_._v(" "),v("p",[_._v("🚀 增加Dubbo替换掉OpenFeign【基于nacos负载均衡】")]),_._v(" "),v("p",[_._v("🚀 Kafka使用Fory序列化与反序列化【移除原来字符串序列化】")]),_._v(" "),v("p",[_._v("🚀 项目移除snail job模块【自己维护，自己集成】")]),_._v(" "),v("p",[_._v("🚀 Pulsar使用Fory序列化与反序列化")]),_._v(" "),v("p",[_._v("🚀 Dubbo使用Fury序列化与反序列化")]),_._v(" "),v("p",[_._v("🚀 全局共用一个ForyFactory，强制注册类型")]),_._v(" "),v("p",[_._v("🚀 Spring Cloud Gateway支持Redis分布式限流")]),_._v(" "),v("h4",{attrs:{id:"_3-5-0更新日志【包含之前版本】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-0更新日志【包含之前版本】"}},[_._v("#")]),_._v(" 3.5.0更新日志【包含之前版本】")]),_._v(" "),v("h6",{attrs:{id:"版本-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本-2"}},[_._v("#")]),_._v(" 版本")]),_._v(" "),v("p",[_._v("🚀 升级Spring Boot版本到3.5.0")]),_._v(" "),v("p",[_._v("🚀 升级Spring Cloud版本到2025.0.0")]),_._v(" "),v("p",[_._v("🚀 升级Spring Cloud Alibaba版本到2023.0.3.2")]),_._v(" "),v("p",[_._v("🚀 升级Spring Security版本到6.5.0")]),_._v(" "),v("p",[_._v("🚀 升级Spring OAuth2 Authorization Server版本到1.5.0")]),_._v(" "),v("p",[_._v("🚀 升级Nacos至3.0.0")]),_._v(" "),v("h6",{attrs:{id:"功能-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能-3"}},[_._v("#")]),_._v(" 功能")]),_._v(" "),v("p",[_._v("🚀 重构三层架构【MVC】，改造为分层架构【DDD领域驱动设计】，使用阿里COLA应用框架开发【花费时间特别长，项目的灵魂】")]),_._v(" "),v("p",[_._v("🚀 领域对象交给Spring管理解耦业务，对象延迟加载，避免内存泄漏")]),_._v(" "),v("p",[_._v("🚀 支持COLA的规则/扩展点/流程【已搬COLA代码到本项目】")]),_._v(" "),v("p",[_._v("🚀 严格遵循COLA代码规范")]),_._v(" "),v("p",[_._v("🚀 增加Pulsar（IoT的灵魂）")]),_._v(" "),v("p",[_._v("🚀 增加多租户【IoT数据隔离，多数据源存储IoT数据，还在实现中】")]),_._v(" "),v("p",[_._v("🚀 OAuth2支持用户名密码模式、客户端模式、授权码模式【PKCE】、刷新令牌模式、设备码模式、手机号+验证码模式、邮箱+验证码模式【遵循DDD领域驱动设计，学习DDD可以看看auth服务】")]),_._v(" "),v("p",[_._v("🚀 支持虚拟线程，已完成虚拟线程改造")]),_._v(" "),v("p",[_._v("🚀 新增菜单/角色/部门/用户管理，前端对接完毕，可以满足基本的开发【RABC权限模型】")]),_._v(" "),v("p",[_._v("🚀 新增物模型/产品类别，前端对接完毕")]),_._v(" "),v("p",[_._v("🚀 支持MQTT【服务端+客户端】/TCP【服务端】/HTTP【服务端】/WebSocket【服务端】/UDP【服务端】来实现数据采集，通过Kafka转发数据到IoT平台【本人提出IoT=采集+存储+分析】")]),_._v(" "),v("p",[_._v("🚀 支持Modbus TCP/UDP/RTU/ASCII")]),_._v(" "),v("p",[_._v("🚀 支持CoAP")]),_._v(" "),v("p",[_._v("🚀 支持WebSocket【已整合，支持Nacos负载均衡】")]),_._v(" "),v("p",[_._v("🚀 支持Spring Cloud Gateway从Nacos拉取动态路由【可自定义配置router.json】")]),_._v(" "),v("p",[_._v("🚀 支持基于Nacos/Consul/Apollo的ShardingSphere分库分表【本人倾向于Mybatis-Plus写SQL的分库分表】")]),_._v(" "),v("p",[_._v("🚀 支持分布式用户认证授权")]),_._v(" "),v("p",[_._v("🚀 支持多租户【还没开发完】")]),_._v(" "),v("p",[_._v("🚀 支持API鉴权")]),_._v(" "),v("p",[_._v("🚀 支持接口幂等")]),_._v(" "),v("p",[_._v("🚀 支持分布式锁")]),_._v(" "),v("p",[_._v("🚀 支持分布式ID【zookeeper】")]),_._v(" "),v("p",[_._v("🚀 支持国际化")]),_._v(" "),v("p",[_._v("🚀 支持MD5/AES/RSA/Base64加密")]),_._v(" "),v("p",[_._v("🚀 支持Elasticsearch")]),_._v(" "),v("p",[_._v("🚀 支持FTP")]),_._v(" "),v("p",[_._v("🚀 支持CSV")]),_._v(" "),v("p",[_._v("🚀 支持Sentinel的网关限流和服务限流")]),_._v(" "),v("p",[_._v("🚀 支持限流【基于Redis】")]),_._v(" "),v("p",[_._v("🚀 支持一键格式化代码")]),_._v(" "),v("p",[_._v("🚀 支持邮箱和手机验证码")]),_._v(" "),v("p",[_._v("🚀 支持Knife4j【API接口文档】")]),_._v(" "),v("p",[_._v("🚀 支持Seata和RocketMQ分布式事务")]),_._v(" "),v("p",[_._v("🚀 支持登录/操作/通知/领域事件日志")]),_._v(" "),v("p",[_._v("🚀 支持Redis【阻塞式和响应式】")]),_._v(" "),v("p",[_._v("🚀 支持响应式API【reactor和vertx】")]),_._v(" "),v("p",[_._v("🚀 支持Amazon S3对象存储")]),_._v(" "),v("p",[_._v("🚀 支持Mybatis-Plus多数据源，支持SQL缓存")]),_._v(" "),v("p",[_._v("🚀 支持Log4j2")]),_._v(" "),v("p",[_._v("🚀 支持二级缓存【Caffine+Redis】，通过RocketMQ实现缓存失效")]),_._v(" "),v("p",[_._v("🚀 支持XSS【SQL和字符串】")]),_._v(" "),v("p",[_._v("🚀 支持JSoup爬虫")]),_._v(" "),v("p",[_._v("🚀 支持一键改包名")]),_._v(" "),v("p",[_._v("🚀 支持敏感词【手机号和邮箱】")]),_._v(" "),v("p",[_._v("🚀 支持代码检查")]),_._v(" "),v("p",[_._v("🚀 支持生成项目骨架")]),_._v(" "),v("p",[_._v("🚀 支持Excel大数据量导入与导出")]),_._v(" "),v("p",[_._v("🚀 支持Mybatis Plus批量插入【虚拟线程】")]),_._v(" "),v("p",[_._v("🚀 支持代码生成器【还没写完】")]),_._v(" "),v("p",[_._v("🚀 支持Snail Job分布式任务调度【目前没有用到，不保证稳定性】")]),_._v(" "),v("p",[_._v("🚀 支持JSON日志还原为文本【仅错误日志】")]),_._v(" "),v("p",[_._v("🚀 支持远程调用OpenFeign【熔断/降级】和Dubbo")]),_._v(" "),v("p",[_._v("🚀 支持分布式链路【Micrometer】，通过Kafka转发到本项目的LogStash，由Logstash写入对应的数据源，支持Loki和（EFK+Jeager）")]),_._v(" "),v("p",[_._v("🚀 支持RocketMQ/Kakfa/RabbitMQ/Pulsar【新增部分Go的例子】")]),_._v(" "),v("p",[_._v("🚀 新增GRPC例子【Java+Go】")])])}),[],!1,null,null,null);v.default=t.exports}}]);