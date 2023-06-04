(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{431:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一、docker-持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-持久化"}},[s._v("#")]),s._v(" 一、Docker 持久化")]),s._v(" "),a("h2",{attrs:{id:"_1-1-持久化概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-持久化概述"}},[s._v("#")]),s._v(" 1.1 持久化概述")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/19/sghJ2T.png",alt:"image-20210118200739472"}})]),s._v(" "),a("p",[s._v("docker 容器内产生的数据默认就在容器内部，删除容器后数据丢失。为了保留数据需要使用 Docker 持久化。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/19/sghYxU.png",alt:"image-20210118200957693"}})]),s._v(" "),a("p",[s._v("Docker 持久化数据方案：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("基于本地文件系统的 Volume")]),s._v("。可以在执行 Docker create 或 Docker run 时，通过 -v 参数将主机的目录作为容器的数据卷。这部分功能便是基于本地文件系统的 volume 管理。")]),s._v(" "),a("li",[a("strong",[s._v("基于 plugin 的 Volume")]),s._v("，支持第三方的存储方案，比如 NAS，aws")])]),s._v(" "),a("h2",{attrs:{id:"_1-2-容器数据卷-data-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-容器数据卷-data-volume"}},[s._v("#")]),s._v(" 1.2 容器数据卷 Data Volume")]),s._v(" "),a("p",[s._v("Volume 有以下两种类型")]),s._v(" "),a("ul",[a("li",[s._v("受管理的 Data Volume，由 docker 后台自动创建。")]),s._v(" "),a("li",[s._v("绑定挂载的 Volume，具体挂载位置可以由用户指定。")])]),s._v(" "),a("h3",{attrs:{id:"_1-2-1-默认-docker-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-默认-docker-volume"}},[s._v("#")]),s._v(" 1.2.1 默认 docker volume")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/19/sghNMF.png",alt:"image-20210118202745192"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 docker volume 列表")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nDRIVER              VOLUME NAME\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               40b685bd181c911b2ed49d47e7973207bf15c0af3d494a77e4ef43e9d8c27429\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               c03dd3896cd06601c409cce497321d8100abfa356fe23d5aaac910ef80432c1c\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("               da7d5902cbf6f586580fd1c6432eac97c8c187fb87da388618f11521500182ab\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看详情，包括挂载的本地目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume inspect 40b685bd181c911b2ed49d47e7973207bf15c0af3d494a77e4ef43e9d8c27429\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreatedAt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-01-07T02:32:08Z"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Driver"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Labels"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mountpoint"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/volumes/40b685bd181c911b2ed49d47e7973207bf15c0af3d494a77e4ef43e9d8c27429/_data"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"40b685bd181c911b2ed49d47e7973207bf15c0af3d494a77e4ef43e9d8c27429"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Options"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Scope"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除volume")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 40b685bd181c911b2ed49d47e7973207bf15c0af3d494a77e4ef43e9d8c27429\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("使用这种默认的，生成的 docker volume 可读性差")]),s._v(" "),a("h3",{attrs:{id:"_1-2-2-自定义-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-自定义-volume"}},[s._v("#")]),s._v(" 1.2.2 自定义 volume")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将mysql容器内 /var/lib/mysql 映射到名叫 mysql 的 docker volume 上")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" mysql:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ALLOW_EMPTY_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true mysql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker volume")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume 1s \nDRIVER \t\tVOLUME NAME\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" \t\tmysql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器之后还能继续使用上次的 docker volume")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" mysql1\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" mysql:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql2 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ALLOW_EMPTY_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这样可以自定义 docker volume 名称，可读性好")]),s._v(" "),a("h1",{attrs:{id:"二、数据共享-bind-mouting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、数据共享-bind-mouting"}},[s._v("#")]),s._v(" 二、数据共享 Bind Mouting")]),s._v(" "),a("p",[s._v("除了 Data Volume，还有 Bind Mouting 数据共享的方式实现数据持久化。他们的不同点有：")]),s._v(" "),a("ul",[a("li",[s._v("Data Volume：需要在 dockerfile 中指定；")]),s._v(" "),a("li",[s._v("Bind Mouting：不需要再 dockerfile 中指定，只需要在运行容器的时候指定本地目录和容器内目录的映射，两个目录是同步的。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/19/sghUr4.png",alt:"image-20210118202815005"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-v 本地路径:容器路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /c/data/mysql:/var/lib/mysql mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这种方式直接将本地目录与容器内目录关联，其中的文件也是同步的。")])])}),[],!1,null,null,null);a.default=n.exports}}]);