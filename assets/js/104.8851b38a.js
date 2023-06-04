(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{429:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一、docker-的架构和底层技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-的架构和底层技术"}},[s._v("#")]),s._v(" 一、Docker 的架构和底层技术")]),s._v(" "),a("h2",{attrs:{id:"_1-1-docker-平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-docker-平台"}},[s._v("#")]),s._v(" 1.1 Docker 平台")]),s._v(" "),a("ul",[a("li",[s._v("Docker 提供了一个开发，打包，运行 app 的平台")]),s._v(" "),a("li",[s._v("把 app 和底层 infrastructure 隔离开来")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se1PpQ.png",alt:"image-20210107113657044"}})]),s._v(" "),a("h2",{attrs:{id:"_1-2-docker-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-docker-engine"}},[s._v("#")]),s._v(" 1.2 Docker Engine")]),s._v(" "),a("ul",[a("li",[s._v("Docker Engine 有一个后台进程（dockerd）")]),s._v(" "),a("li",[s._v("提供 REST API Server")]),s._v(" "),a("li",[s._v("提供 CLI接口（docker）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se1ilj.png",alt:"image-20210107113729851"}})]),s._v(" "),a("h2",{attrs:{id:"_1-3-docker-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-docker-架构"}},[s._v("#")]),s._v(" 1.3 Docker 架构")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se1F6s.png",alt:"image-20210107114039372"}})]),s._v(" "),a("h2",{attrs:{id:"_1-4-底层技术支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-底层技术支持"}},[s._v("#")]),s._v(" 1.4 底层技术支持")]),s._v(" "),a("ul",[a("li",[s._v("Namespaces：做隔离 pid, net, ipc, mnt, uts")]),s._v(" "),a("li",[s._v("Control groups：做资源限制")]),s._v(" "),a("li",[s._v("Union file systems：Container 和 image 的分层")])]),s._v(" "),a("h1",{attrs:{id:"二、docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-image"}},[s._v("#")]),s._v(" 二、Docker Image")]),s._v(" "),a("h2",{attrs:{id:"_2-1-镜像概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-镜像概述"}},[s._v("#")]),s._v(" 2.1 镜像概述")]),s._v(" "),a("ul",[a("li",[s._v("文件和 meta data 的集合（root filesystem）")]),s._v(" "),a("li",[s._v("分层的，并且每一层都可以添加改变删除文件，成为一个新的 image")]),s._v(" "),a("li",[s._v("不同的 image 可以共享相同的 layer")]),s._v(" "),a("li",[s._v("Image 本身是 read-only 的")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se1kXn.png",alt:"image-20210107131324326"}})]),s._v(" "),a("h2",{attrs:{id:"_2-2-镜像获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-镜像获取"}},[s._v("#")]),s._v(" 2.2 镜像获取")]),s._v(" "),a("p",[s._v("有两种方式获取镜像，"),a("code",[s._v("build")]),s._v(" 构建镜像和 "),a("code",[s._v("pull")]),s._v(" 拉取镜像。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-1-构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-构建镜像"}},[s._v("#")]),s._v(" 2.2.1 构建镜像")]),s._v(" "),a("p",[s._v("通过 dockerfile 构建镜像")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se1V00.png",alt:"image-20210107131747649"}})]),s._v(" "),a("h3",{attrs:{id:"_2-2-2-拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-拉取镜像"}},[s._v("#")]),s._v(" 2.2.2 拉取镜像")]),s._v(" "),a("p",[s._v("从 register 中心拉取镜像")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se1hcj.png",alt:"image-20210107132300348"}})]),s._v(" "),a("h1",{attrs:{id:"三、docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、docker-container"}},[s._v("#")]),s._v(" 三、Docker Container")]),s._v(" "),a("ul",[a("li",[s._v("通过 Image 创建（copy）")]),s._v(" "),a("li",[s._v("在 Image layer 之上建立一个 container layer（可读写）")]),s._v(" "),a("li",[s._v("类比面向对象：类和实例")]),s._v(" "),a("li",[s._v("Image 负责 app 的存储和分发，Container 负责运行 app")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se8kd0.png",alt:"image-20210107133335105"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有正在运行和退出的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等同于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#交互式运行container")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" centos\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" c72dd5359148\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除所有容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aq")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h1",{attrs:{id:"四、dockerfile语法及最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、dockerfile语法及最佳实践"}},[s._v("#")]),s._v(" 四、Dockerfile语法及最佳实践")]),s._v(" "),a("h2",{attrs:{id:"_4-1-语法介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-语法介绍"}},[s._v("#")]),s._v(" 4.1 语法介绍")]),s._v(" "),a("h3",{attrs:{id:"_4-1-1-from-基础镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-from-基础镜像"}},[s._v("#")]),s._v(" 4.1.1 FROM 基础镜像")]),s._v(" "),a("p",[s._v("用于指定 base 镜像")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/sefi8S.png",alt:"image-20210107151927292"}})]),s._v(" "),a("blockquote",[a("p",[s._v("尽量使用官方的 image 作为 base image")])]),s._v(" "),a("h3",{attrs:{id:"_4-1-2-label-元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-label-元数据"}},[s._v("#")]),s._v(" 4.1.2 LABEL 元数据")]),s._v(" "),a("p",[s._v("用于添加元数据")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/sefFgg.png",alt:"image-20210107151908380"}})]),s._v(" "),a("blockquote",[a("p",[s._v("Metadata 不可少")])]),s._v(" "),a("h3",{attrs:{id:"_4-1-3-run-运行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-run-运行命令"}},[s._v("#")]),s._v(" 4.1.3 RUN 运行命令")]),s._v(" "),a("p",[s._v("使用 RUN 运行一些命令，安装一些软件的时候经常使用 run。")]),s._v(" "),a("p",[s._v("每执行一次 RUN，image 都会新加一层。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/sefEuj.png",alt:"image-20210107151851460"}})]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("为了美观，复杂的 RUN 请用反斜线换行！")]),s._v(" "),a("li",[s._v("避免无用分层，合并多条命令成一行！")])])]),s._v(" "),a("h3",{attrs:{id:"_4-1-4-workdir-工作目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-workdir-工作目录"}},[s._v("#")]),s._v(" 4.1.4 WORKDIR 工作目录")]),s._v(" "),a("p",[s._v("用于指定工作目录")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/sefnU0.png",alt:"image-20210107151821768"}})]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("用 WORKDIR，不要用 RUN cd")]),s._v(" "),a("li",[s._v("尽量使用绝对目录")])])]),s._v(" "),a("h3",{attrs:{id:"_4-1-5-add、copy-添加文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-5-add、copy-添加文件"}},[s._v("#")]),s._v(" 4.1.5 ADD、COPY 添加文件")]),s._v(" "),a("p",[s._v("将本地文件添加到 docker image 里。")]),s._v(" "),a("p",[s._v("ADD 添加到 docker image 目录中可以自动将文件解压缩")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/sehH6e.png",alt:"image-20210107152243522"}})]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("大部分情况，COPY 优于 ADD")]),s._v(" "),a("li",[s._v("ADD 除了 COPY 还有额外功能（解压）")]),s._v(" "),a("li",[s._v("添加远程文件/目录请使用 curl 或者 wget")])])]),s._v(" "),a("h3",{attrs:{id:"_4-1-6-env-环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-6-env-环境变量"}},[s._v("#")]),s._v(" 4.1.6 ENV 环境变量")]),s._v(" "),a("p",[s._v("添加环境变量")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/07/se4ehV.png",alt:"image-20210107152856953"}})]),s._v(" "),a("blockquote",[a("p",[s._v("尽量使用 ENV 增加可维护性")])]),s._v(" "),a("h3",{attrs:{id:"_4-1-7-volume、expose-存储和网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-7-volume、expose-存储和网络"}},[s._v("#")]),s._v(" 4.1.7 VOLUME、EXPOSE 存储和网络")]),s._v(" "),a("p",[s._v("用于存储和网络")]),s._v(" "),a("h3",{attrs:{id:"_4-1-8-cmd-默认命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-8-cmd-默认命令"}},[s._v("#")]),s._v(" 4.1.8 CMD 默认命令")]),s._v(" "),a("ul",[a("li",[s._v("容器启动后默认执行的命令")]),s._v(" "),a("li",[s._v("如果 docker run 指定了其它命令，CMD 命令被忽略")]),s._v(" "),a("li",[s._v("如果定义了多个 CMD，只有最后一个会执行")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/12/sGatmj.png",alt:"image-20210112005020350"}})]),s._v(" "),a("h3",{attrs:{id:"_4-1-9-entrypoint-启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-9-entrypoint-启动命令"}},[s._v("#")]),s._v(" 4.1.9 ENTRYPOINT 启动命令")]),s._v(" "),a("ul",[a("li",[s._v("让容器以应用程序或者服务的形式运行")]),s._v(" "),a("li",[s._v("不会被忽略，一定会执行")]),s._v(" "),a("li",[s._v("最佳实践：写一个 shell 脚本作为 entrypoint")])]),s._v(" "),a("h2",{attrs:{id:"_4-2-run、cmd、entrypoint-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-run、cmd、entrypoint-对比"}},[s._v("#")]),s._v(" 4.2 RUN、CMD、ENTRYPOINT 对比")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("RUN")]),s._v("：执行命令并创建新的 Image Layer")]),s._v(" "),a("li",[a("strong",[s._v("CMD")]),s._v("：设置容器启动后默认执行的命令和参数")]),s._v(" "),a("li",[a("strong",[s._v("ENTRYPOINT")]),s._v("：设置容器启动后运行的命令")])]),s._v(" "),a("h2",{attrs:{id:"_4-3-命令编写格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-命令编写格式"}},[s._v("#")]),s._v(" 4.3 命令编写格式")]),s._v(" "),a("p",[s._v("Dockerfile 中可以使用 shell 格式或者 Exec 格式编写命令，Shell 格式用 shell 脚本语法编写，Exec 格式使用命令和参数的特定格式编写。")]),s._v(" "),a("h3",{attrs:{id:"_4-3-1-shell-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-shell-格式"}},[s._v("#")]),s._v(" 4.3.1 Shell 格式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/12/sGaQtP.png",alt:"image-20210112004118859"}})]),s._v(" "),a("h3",{attrs:{id:"_4-3-2-exec-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-exec-格式"}},[s._v("#")]),s._v(" 4.3.2 Exec 格式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/12/sGa3p8.png",alt:"image-20210112004130931"}})]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考 mongodb 的写法")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝本地的 shell 脚本文件到镜像的中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" docker-entrypoint.sh /usr/1ocal/bin/ ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 ENTRYPOINT 命令运行 shell 脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.sh"')]),s._v("] ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 27017 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongod"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h1",{attrs:{id:"五、发布镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、发布镜像"}},[s._v("#")]),s._v(" 五、发布镜像")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("docker hub 注册账户")])]),s._v(" "),a("li",[a("p",[s._v("本地登录 docker 账户")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login\nUsername: lucifer\nPassword:\nLogin Succeeded\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("编写 dockerfile，构建 docker image")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建自己的镜像，注意镜像名要以 “docker用户名/” 开头")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" lucifer/mycentos "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("推送镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push lucifer/mycentos:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("创建私有的 docker 镜像仓库参考：https://registry.hub.docker.com/_/registry")])])}),[],!1,null,null,null);a.default=r.exports}}]);