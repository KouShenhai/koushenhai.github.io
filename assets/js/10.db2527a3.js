(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("小伙伴们，你们好呀，跟我一起安装Docker")]),a._v(" "),s("h2",{attrs:{id:"安装必读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装必读"}},[a._v("#")]),a._v(" 安装必读")]),a._v(" "),s("h6",{attrs:{id:"官方建议内核3-10以上-如果安装失败-请更换-centos7镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方建议内核3-10以上-如果安装失败-请更换-centos7镜像"}},[a._v("#")]),a._v(" 官方建议内核3.10以上，如果安装失败，请更换 "),s("a",{attrs:{href:"http://mirrors.163.com/centos/7.9.2009/isos/x86_64",target:"_blank",rel:"noopener noreferrer"}},[a._v("Centos7镜像"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("\n")])])]),s("img",{attrs:{src:"/img/7/1.png"}}),a._v(" "),s("h2",{attrs:{id:"升级工具包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级工具包"}},[a._v("#")]),a._v(" 升级工具包")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" update\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" yum-utils\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yum -y update 升级所有包同时也升级软件和系统内核 如somelinux8 升级至 somelinux9")]),a._v("\n")])])]),s("h2",{attrs:{id:"卸载老版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载老版本"}},[a._v("#")]),a._v(" 卸载老版本")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum remove "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("  docker-common docker-selinux docker-engine\n")])])]),s("h2",{attrs:{id:"安装软件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装软件包"}},[a._v("#")]),a._v(" 安装软件包")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils device-mapper-persistent-data lvm2\n")])])]),s("h2",{attrs:{id:"设置yum源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置yum源"}},[a._v("#")]),a._v(" 设置yum源")]),a._v(" "),s("p",[a._v("推荐使用阿里云源")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),s("h2",{attrs:{id:"安装docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[a._v("#")]),a._v(" 安装docker")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-23.0.6\n")])])]),s("h2",{attrs:{id:"命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\nsystemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 状态")]),a._v("\nsystemctl status "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开机自启")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1701451",target:"_blank",rel:"noopener noreferrer"}},[a._v("centos7安装Docker详细步骤（无坑版教程）"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);