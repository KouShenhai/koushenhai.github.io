(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{340:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("你好呀，我的老朋友！我是老寇，欢迎来到老寇云平台！"),s("br"),a._v("\n跟我一起安装Rabbitmq。")]),a._v(" "),s("h2",{attrs:{id:"拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull rabbitmq:3.12.2\n")])])]),s("h2",{attrs:{id:"启动容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hostname")]),a._v(" laokou "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" rabbit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 rabbitmq\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --hostname 网络")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --name 容器名称")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -p 服器务端口:容器端口")]),a._v("\n")])])]),s("h1",{attrs:{id:"管理面版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理面版"}},[a._v("#")]),a._v(" 管理面版")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" 容器id /bin/bash\nrabbitmq-plugins "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_management\n")])])]),s("p",[a._v("我是老寇，我们下次再见啦！")])])}),[],!1,null,null,null);s.default=r.exports}}]);