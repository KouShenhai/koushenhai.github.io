(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("你好呀，我的老朋友！我是老寇，欢迎来到老寇云平台！"),a("br"),s._v("\n话不多说，跟我一起安装Redis。")]),s._v(" "),a("h2",{attrs:{id:"下载redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载redis"}},[s._v("#")]),s._v(" 下载Redis")]),s._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://redis.io/download"}},[s._v("redis官网地址")]),s._v(" "),a("img",{attrs:{src:"/img/2/img.png"}})]),s._v(" "),a("h2",{attrs:{id:"开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[s._v("#")]),s._v(" 开始安装")]),s._v(" "),a("h6",{attrs:{id:"上传压缩包-略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传压缩包-略"}},[s._v("#")]),s._v(" 上传压缩包（略）")]),s._v(" "),a("h6",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" redis-7.0.11.tar.gz\n")])])]),a("h6",{attrs:{id:"重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名"}},[s._v("#")]),s._v(" 重命名")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis-7.0.11 /usr/local/redis\n")])])]),a("h6",{attrs:{id:"升级gcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级gcc"}},[s._v("#")]),s._v(" 升级gcc")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" centos-release-scl\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils\nscl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" devtoolset-9 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /opt/rh/devtoolset-9/enable"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n")])])]),a("h6",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定分配器为libc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MALLOC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("libc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /usr/local/redis/etc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis.conf /usr/local/redis/etc/redis.conf\n")])])]),a("img",{attrs:{src:"/img/2/img_3.png"}}),s._v(" "),a("img",{attrs:{src:"/img/2/img_4.png"}}),s._v(" "),a("h6",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/local/redis/etc/redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码")]),s._v("\nrequirepass laokou123\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 -::1\nnotify-keyspace-events KEA\n")])])]),a("img",{attrs:{src:"/img/2/img_5.png"}}),s._v(" "),a("img",{attrs:{src:"/img/2/img_6.png"}}),s._v(" "),a("h6",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/redis/src/redis-server /usr/local/redis/etc/redis.conf\n")])])]),a("img",{attrs:{src:"/img/2/img_7.png"}}),s._v(" "),a("h6",{attrs:{id:"安装完毕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装完毕"}},[s._v("#")]),s._v(" 安装完毕！！！")]),s._v(" "),a("p",[s._v("我是老寇，我们下次再见啦！")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://kcloud.blog.csdn.net/article/details/82589349",target:"_blank",rel:"noopener noreferrer"}},[s._v("centos7 安装redis"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);