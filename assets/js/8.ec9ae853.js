(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(a,s,t){"use strict";t.r(s);var r=t(7),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("你好呀，我的老朋友！我是老寇，欢迎来到老寇云平台！")]),a._v(" "),s("p",[a._v("话不多说，跟我一起安装RocketMQ。")]),a._v(" "),s("h2",{attrs:{id:"下载rocketmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载rocketmq"}},[a._v("#")]),a._v(" 下载RocketMQ")]),a._v(" "),s("p",[s("a",{attrs:{target:"_blank",href:"https://rocketmq.apache.org/zh/download"}},[a._v("RocketMQ官网地址")]),a._v(" "),s("img",{attrs:{src:"/img/3/img.png"}})]),a._v(" "),s("h2",{attrs:{id:"安装前提"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装前提"}},[a._v("#")]),a._v(" 安装前提")]),a._v(" "),s("p",[s("a",{attrs:{href:"/pages/65acfd/"}},[a._v("Centos7安装Jdk 17.0.7")])]),a._v(" "),s("h2",{attrs:{id:"开始安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[a._v("#")]),a._v(" 开始安装")]),a._v(" "),s("h6",{attrs:{id:"上传压缩包-略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传压缩包-略"}},[a._v("#")]),a._v(" 上传压缩包（略）")]),a._v(" "),s("h6",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[a._v("#")]),a._v(" 解压")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装unzip")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解压")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" rocketmq-all-5.1.1-bin-release.zip\n")])])]),s("img",{attrs:{src:"/img/3/img_1.png"}}),a._v(" "),s("h6",{attrs:{id:"重命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重命名"}},[a._v("#")]),a._v(" 重命名")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" rocketmq-all-5.1.1-bin-release /usr/local/rocketmq5\n")])])]),s("img",{attrs:{src:"/img/3/img_2.png"}}),a._v(" "),s("h6",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/rocketmq5\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" conf/broker.conf\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 增加两项配置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("namesrvAddr")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.100:9876\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("brokerIP1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.100\n")])])]),s("h6",{attrs:{id:"修改参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改参数"}},[a._v("#")]),a._v(" 修改参数")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" runborker.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" runserver.sh\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("--add-opens"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("java.base/jdk.internal.ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ALL-UNNAMED\n--add-opens"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("java.base/sun.nio.ch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ALL-UNNAMED\n")])])]),s("img",{attrs:{src:"/img/3/img_7.png"}}),a._v(" "),s("img",{attrs:{src:"/img/3/img_6.png"}}),a._v(" "),s("img",{attrs:{src:"/img/3/img_5.png"}}),a._v(" "),s("h6",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/rocketmq5\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" bin/mqnamesrv "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" bin/mqbroker "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".30.128:9876 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" conf/broker.conf "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("autoCreateTopicEnable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("h6",{attrs:{id:"安装完毕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装完毕"}},[a._v("#")]),a._v(" 安装完毕！！！")]),a._v(" "),s("p",[a._v("我是老寇，我们下次再见啦！")]),a._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://kcloud.blog.csdn.net/article/details/128347059",target:"_blank",rel:"noopener noreferrer"}},[a._v("centos7 安装单机RocketMQ5.0.0"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);