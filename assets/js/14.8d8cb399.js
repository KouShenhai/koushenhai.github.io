(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{339:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("你好呀，我的老朋友！我是老寇，欢迎来到老寇云平台！"),s("br"),t._v("\n几个月前，写了一个小项目，不断优化，嗯，现在有点样子啦~"),s("br"),t._v("\n话不多说，跟我一起启动项目吧！")]),t._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pages/a2f161/"}},[t._v("Centos7安装Mysql 8.0.33")]),s("br"),t._v(" "),s("RouterLink",{attrs:{to:"/pages/90401a/"}},[t._v("Centos7安装Redis 7.0.11")]),s("br"),t._v(" "),s("RouterLink",{attrs:{to:"/pages/0fb88c/"}},[t._v("Centos7安装RocketMQ 5.1.1")]),s("br"),t._v(" "),s("RouterLink",{attrs:{to:"/pages/65acfd/"}},[t._v("Centos7安装Jdk 17.0.7")])],1),t._v(" "),s("h2",{attrs:{id:"视频地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频地址"}},[t._v("#")]),t._v(" 视频地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV16M411C7v7/?spm_id_from=333.999.0.0&vd_source=ab1fb14d6d69950653360d4467efe4a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("老寇云平台-项目演示视频"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1Se41197Fp/?spm_id_from=333.999.0.0&vd_source=ab1fb14d6d69950653360d4467efe4a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("老寇云平台-项目运行视频"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"项目运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目运行"}},[t._v("#")]),t._v(" 项目运行")]),t._v(" "),s("p",[t._v("🚀 启动Mysql、Redis和RocketMQ、Kafka（如果使用高亮搜索，需要启动Elasticsearch）")]),t._v(" "),s("p",[t._v("🚀 创建数据库和初始化数据，因为数据库比较多，使用flyway来管理数据库版本，话不多说，直接运行即可（如果需要写flyway相关文章，直接提issue）\n"),s("img",{attrs:{src:"/img/5/img_21.png"}})]),t._v(" "),s("p",[t._v("🚀 切换开发环境为dev，测试环境为test（dev环境是http，test环境是https，keytool生成的证书，推荐测试使用test环境，记得改pom和nacos配置）"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_22.png"}})]),t._v(" "),s("p",[t._v("🚀 修改pom.xml配置，修改数据库连接信息，其他信息默认即可"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_23.png"}})]),t._v(" "),s("p",[t._v("🚀 运行laokou-register，启动单机Nacos（需要配置VM Option）"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_5.png"}}),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_6.png"}})]),t._v(" "),s("p",[t._v("🚀 打开Nacos控制台，创建命名空间"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_7.png"}})]),t._v(" "),s("p",[t._v("🚀 修改nacos配置的Mysql、Redis、Seata（本地可使用默认配置）和RocketMQ，确保相关连接信息是否正确\n"),s("img",{attrs:{src:"/img/5/img.png"}}),t._v(" "),s("img",{attrs:{src:"/img/5/img_1.png"}})]),t._v(" "),s("p",[t._v("🚀 修改seata配置（不用改就不改）\n"),s("img",{attrs:{src:"/img/5/img_10.png"}})]),t._v(" "),s("p",[t._v("🚀 启动seata"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_11.png"}})]),t._v(" "),s("p",[t._v("🚀 依次启动laokou-gateway、laokou-auth、laokou-admin、laokou-im\n"),s("img",{attrs:{src:"/img/5/img_12.png"}}),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_14.png"}}),t._v(" "),s("img",{attrs:{src:"/img/5/img_13.png"}}),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_14.png"}}),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_15.png"}})]),t._v(" "),s("p",[t._v("🚀 启动laokou-flowable（不使用工作流可以不启动）\n"),s("img",{attrs:{src:"/img/5/img_18.png"}})]),t._v(" "),s("p",[t._v("🚀 启动laokou-monitor（不使用服务监控可以不启动），还有就是别用老夫的邮箱，求求你改一改吧"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_25.png"}})]),t._v(" "),s("p",[t._v("🚀 启动laokou-sentinel（不使用流量监控可以不启动）"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_26.png"}})]),t._v(" "),s("p",[t._v("🚀 启动laokou-xxl-job（不使用任务调度可以不启动）（springboot版本升级成了spring 3.x.x）"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/5/img_27.png"}})]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h3",{attrs:{id:"_1-vue开启websocket-wss协议无法建立连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue开启websocket-wss协议无法建立连接"}},[t._v("#")]),t._v(" 1.vue开启websocket，wss协议无法建立连接")]),t._v(" "),s("p",[t._v("解决方案见 "),s("RouterLink",{attrs:{to:"/pages/10bfa8/#创建证书-带域名"}},[t._v("自签名证书安装浏览器")])],1),t._v(" "),s("h3",{attrs:{id:"_2-阿里仓库无法下载最新jar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-阿里仓库无法下载最新jar"}},[t._v("#")]),t._v(" 2.阿里仓库无法下载最新jar")]),t._v(" "),s("p",[t._v("修改 maven/conf/setting.xml 配置")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 增加腾讯仓库 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("tencent-cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://mirrors.cloud.tencent.com/nexus/repository/maven-public/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alimaven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aliyun maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/repositories/central/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("我是老寇，我们下次再见啦！")])])}),[],!1,null,null,null);s.default=r.exports}}]);