(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(s,a,t){"use strict";t.r(a);var r=t(7),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("你好呀，我的老朋友！我是老寇，欢迎来到老寇云平台！"),a("br"),s._v("\n话不多说，跟我一起安装Mysql。")]),s._v(" "),a("h2",{attrs:{id:"下载mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载mysql"}},[s._v("#")]),s._v(" 下载Mysql")]),s._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://dev.mysql.com/downloads/mysql"}},[s._v("Mysql官网下载地址")]),a("br"),s._v(" "),a("img",{attrs:{src:"/img/1/img.png"}})]),s._v(" "),a("h2",{attrs:{id:"安装准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装准备"}},[s._v("#")]),s._v(" 安装准备")]),s._v(" "),a("p",[s._v("注：Mysql会与MariaDB文件冲突，需要先卸载掉MariaDB")]),s._v(" "),a("h4",{attrs:{id:"卸载mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载mariadb"}},[s._v("#")]),s._v(" 卸载MariaDB")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否安装MariaDB")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb\n")])])]),a("img",{attrs:{src:"/img/1/img_1.png"}}),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -e --nodeps 文件名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nodeps")]),s._v(" mariadb-libs-5.5.35-3.el7.x86_64\n")])])]),a("img",{attrs:{src:"/img/1/img_2.png"}}),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否卸载干净")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb\n")])])]),a("img",{attrs:{src:"/img/1/img_3.png"}}),s._v(" "),a("h4",{attrs:{id:"检查依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查依赖"}},[s._v("#")]),s._v(" 检查依赖")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否安装libaio")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" libaio\n")])])]),a("img",{attrs:{src:"/img/1/img_4.png"}}),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有libaio则安装")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libaio\n")])])]),a("img",{attrs:{src:"/img/1/img_5.png"}}),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看安装numactl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" numactl\n")])])]),a("img",{attrs:{src:"/img/1/img_6.png"}}),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有则安装numactl")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" numactl\n")])])]),a("img",{attrs:{src:"/img/1/img_7.png"}}),s._v(" "),a("h2",{attrs:{id:"开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[s._v("#")]),s._v(" 开始安装")]),s._v(" "),a("h6",{attrs:{id:"上传压缩包-略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传压缩包-略"}},[s._v("#")]),s._v(" 上传压缩包（略）")]),s._v(" "),a("h6",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拆分 => tar -xvf 包名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" mysql-8.0.33-el7-x86_64.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 => tar -zxvf 包名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" mysql-8.0.33-el7-x86_64.tar.gz\n")])])]),a("img",{attrs:{src:"/img/1/img_8.png"}}),s._v(" "),a("img",{attrs:{src:"/img/1/img_9.png"}}),s._v(" "),a("h6",{attrs:{id:"重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名"}},[s._v("#")]),s._v(" 重命名")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysql-8.0.33-el7-x86_64 /usr/local/mysql8\n")])])]),a("img",{attrs:{src:"/img/1/img_10.png"}}),s._v(" "),a("h6",{attrs:{id:"创建存储数据文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建存储数据文件"}},[s._v("#")]),s._v(" 创建存储数据文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /usr/local/mysql8/data\n")])])]),a("img",{attrs:{src:"/img/1/img_11.png"}}),s._v(" "),a("h6",{attrs:{id:"创建用户组并赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户组并赋值"}},[s._v("#")]),s._v(" 创建用户组并赋值")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r：创建系统用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g：指定用户组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" mysql mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改范围和权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql:mysql /usr/local/mysql8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /usr/local/mysql8\n")])])]),a("img",{attrs:{src:"/img/1/img_12.png"}}),s._v(" "),a("img",{attrs:{src:"/img/1/img_13.png"}}),s._v(" "),a("img",{attrs:{src:"/img/1/img_14.png"}}),s._v(" "),a("h6",{attrs:{id:"初始化mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化mysql"}},[s._v("#")]),s._v(" 初始化Mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql8/bin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化完成后会打印随机密码")]),s._v("\n./mysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--datadir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql8/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--basedir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql8\n")])])]),a("img",{attrs:{src:"/img/1/img_15.png"}}),s._v(" "),a("img",{attrs:{src:"/img/1/img_16.png"}}),s._v(" "),a("h6",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[s._v("#")]),s._v(" 配置参数")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /usr/local/mysql8/my.cnf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制以下内容，根据需要修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/local/mysql8/data/mysql.sock\ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \ncharacter-set-client-handshake "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" FALSE\ncharacter-set-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\ncollation-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4_general_ci\ninit_connect "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET NAMES utf8mb4'")]),s._v("\n\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/local/mysql8/data/mysql.sock\nskip-external-locking\nkey_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 16M\nmax_allowed_packet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1M\ntable_open_cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\nsort_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 512K\nnet_buffer_length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 8K\nread_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 256K\nread_rnd_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 512K\nmyisam_sort_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 8M\ndatadir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/local/mysql8/data\nlower_case_table_names "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ninnodb_flush_log_at_trx_commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsync_binlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#lower_case_table_names=1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果要设置lower_case_table_names可以在初始化里面设置 ./mysqld --initialize --user=mysql --datadir=/usr/local/mysql/data --basedir=/usr/local/mysql --lower_case_table_names=1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqldump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nquick\nmax_allowed_packet "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 16M\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nno-auto-rehash\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("myisamchk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nkey_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 20M\nsort_buffer_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 20M\nread_buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 2M\nwrite_buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 2M\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqlhotcopy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ninteractive-timeout\n")])])]),a("img",{attrs:{src:"/img/1/img_17.png"}}),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /usr/local/mysql8/my.cnf\n")])])]),a("img",{attrs:{src:"/img/1/img_18.png"}}),s._v(" "),a("h6",{attrs:{id:"启动mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql"}},[s._v("#")]),s._v(" 启动Mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n./mysqld_safe /usr/local/mysql8/my.cnf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ntlp")]),s._v("\n")])])]),a("img",{attrs:{src:"/img/1/img_19.png"}}),s._v(" "),a("img",{attrs:{src:"/img/1/img_20.png"}}),s._v(" "),a("h6",{attrs:{id:"设置密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[s._v("#")]),s._v(" 设置密码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 => 密码就是截图的随机密码")]),s._v("\n./mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码")]),s._v("\nALTER "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'laokou123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("img",{attrs:{src:"/img/1/img_21.png"}}),s._v(" "),a("h6",{attrs:{id:"开放远程访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放远程访问"}},[s._v("#")]),s._v(" 开放远程访问")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("use mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nupdate user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user.Host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user.User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新权限")]),s._v("\nflush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("img",{attrs:{src:"/img/1/img_22.png"}}),s._v(" "),a("h6",{attrs:{id:"关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl stop firewalld.service\n")])])]),a("img",{attrs:{src:"/img/1/img_23.png"}}),s._v(" "),a("h6",{attrs:{id:"安装完毕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装完毕"}},[s._v("#")]),s._v(" 安装完毕！！！")]),s._v(" "),a("p",[s._v("我是老寇，我们下次再见啦！")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_36408717/article/details/126705287",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS7安装MySQL8(亲测无坑百分百安装成功)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);