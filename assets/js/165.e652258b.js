(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{488:function(t,v,_){"use strict";_.r(v);var r=_(4),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("今天我要和你分享的内容是微服务中的网关。我们都知道，网关（Gateway）就是一个网络连接到另一个网络的“关口”，也就是网络关卡。那么微服务的网关有哪些内容呢？别着急，我们先来看看微服务网关的作用。")]),t._v(" "),v("h1",{attrs:{id:"api-gateway"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api-gateway"}},[t._v("#")]),t._v(" API Gateway")]),t._v(" "),v("h2",{attrs:{id:"微服务网关的功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务网关的功能"}},[t._v("#")]),t._v(" 微服务网关的功能")]),t._v(" "),v("p",[t._v("实际上 API Gateway 可以等同于微服务网关。在微服务架构中，随着微服务的拆分，这些微服务不可能同时提供对外服务，这样就"),v("strong",[t._v("需要一个网关系统，承接外网的流量")]),t._v("。有了API 网关，各个 API 服务提供团队可以专注自己的业务逻辑处理，而 API 网关则更专注于安全、流量、路由等问题。")]),t._v(" "),v("p",[t._v("我们先来看一下微服务网关主要提供哪些功能。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("统一流量接入")]),t._v("：提供统一的流量入口，这样就可以由统一的入口管理流量，设置各种策略，比如统一的 Token 认证等。")]),t._v(" "),v("li",[v("strong",[t._v("业务聚合")]),t._v("：在具体的业务中，经常需要聚合多个服务的结果集，返回给客户端，这个时候可以由 API 网关聚合数据然后返回给客户端。")]),t._v(" "),v("li",[v("strong",[t._v("协议转换")]),t._v("：一般入口层，多使用 HTTP 协议的 RESTful 接口，而后端服务的协议可能有多种，比如 gRPC、Thrift 等。")]),t._v(" "),v("li",[v("strong",[t._v("中间件策略")]),t._v("：设置统一的中间件策略层，可以在这一层做一些限流熔断、南北向流量的服务治理功能。")]),t._v(" "),v("li",[v("strong",[t._v("安全认证")]),t._v("：一些 Token 认证功能，比如数据是否被篡改的认证，可以在 API 网关中做，这也是经常用到的功能。")]),t._v(" "),v("li",[v("strong",[t._v("证书管理")]),t._v("：随着对外网安全性能要求的增高，现在基本上都要对外提供 HTTPS 的服务，以保证数据不会被劫持、篡改等问题，在这一层做证书对内网的拆卸非常合适。由一个统一的入口管理接口，降低了证书更换时的复杂度。")])]),t._v(" "),v("p",[t._v("现在你已经对微服网关的作用有了一定了解，下面我们简单介绍一下微服务常用的网关，看看它们是如何“工作”的。")]),t._v(" "),v("h2",{attrs:{id:"常用微服务网关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用微服务网关"}},[t._v("#")]),t._v(" 常用微服务网关")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Kong")]),t._v("：几乎是目前最流行的微服务网关，内置了多种网关所需要的功能，后面我们将详细介绍。")]),t._v(" "),v("li",[v("strong",[t._v("Spring Cloud Zuul")]),t._v("：作为 Spring Cloud 的一部分，提供了微服务所需要的网关的大部分功能，最大的优势是对 Java 系统友好。严格来说"),v("strong",[t._v("Zuul 更像是一个微服务网关的框架")]),t._v("，而不是独立的产品。")]),t._v(" "),v("li",[v("strong",[t._v("Traefik")]),t._v("：基于 Go 语言实现的微服务网关，"),v("strong",[t._v("代码结构清晰简单，适合做二次开发")]),t._v("，也可以作为独立的产品使用，对云原生支持友好。如果技术栈是 Go 语言，值得一试。")])]),t._v(" "),v("p",[t._v("上面介绍的三个网关，基本上覆盖了比较流行的不同语言微服务网关中最优秀的产品：Kong 代表了 Lua + OpenResty，Zuul 代表了 Java 系统，Traefik 则代表 Go 语言实现的微服务网关。")]),t._v(" "),v("h2",{attrs:{id:"双重网关-系统网关和业务网关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双重网关-系统网关和业务网关"}},[t._v("#")]),t._v(" 双重网关（系统网关和业务网关）")]),t._v(" "),v("p",[t._v("随着业务进一步发展，单一的网关系统已经不能满足组织架构和业务的发展了，所以在实际生产中，多采用双重网关结构。")]),t._v(" "),v("p",[t._v("这种结构由"),v("strong",[t._v("多个系统网关和多个业务聚合网关")]),t._v("组成，这样配合是因为系统网关多由常见的 Nginx 系网关构成，使用 Nginx 系的网关对运维友好，方便运维做一些监控、日志、安全策略；但往往对研发人员不太友好，不方便扩展。所以后来增加了业务网关，用于服务的聚合，这层网关因为需要做一些业务的聚合策略，平时改动会比较多。")]),t._v(" "),v("p",[t._v("如下图所示，两个网关相互配合，既方便了运维维护，也方便了研发人员扩展，达到某种平衡。")]),t._v(" "),v("p",[t._v("另外，随着单一业务的发展，我们也会像下图一样拆分出多个独立的网关，这些网关会"),v("strong",[t._v("根据业务维度拆分")]),t._v("，比如分为用户系统网关和内容系统网关。这样拆分的目的，是防止由单一网关的故障带来全站的不可用，从而达到降低故障影响面的效果。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/8D/50/Ciqc1F_9ekeAOTizAAGqBVSA4Lk701.png",alt:"双重网关结构图"}})]),t._v(" "),v("p",[t._v("至此，相信你已经对微服务网关有了基础的理解，接下来我们结合一个具体的开源微服务网关 Kong，做进一步的讲解。")]),t._v(" "),v("h1",{attrs:{id:"微服务网关-kong"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务网关-kong"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"https://codechina.csdn.net/mirrors/Kong/kong?utm_source=csdn_github_accelerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("微服务网关 Kong"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("开源网关 Kong是一个轻量级的 API 网关，基于 OpenResty + Lua 开发，提供了丰富的功能以及高度灵活的扩展性，可以通过插件的方式扩展 Kong 的功能。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/8D/4D/CgqCHl_9Bg-AGswTAAGeIlb2qJk670.png",alt:"Kong 网关模型"}})]),t._v(" "),v("p",[t._v("Kong 作为微服务网关，最大的优势就是"),v("strong",[t._v("抽象出了微服务网关的一套模型")]),t._v("，而不需要像 OpenResty 那样手动配置。")]),t._v(" "),v("p",[t._v("下面我们看一下这套模型中的各个名词的含义。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("service")]),t._v("：服务对应的后端的微服务和 API。一般情况下把一组 API 集合成为一个服务，也就是我们后端的微服务。")]),t._v(" "),v("li",[v("strong",[t._v("router")]),t._v("：路由指的是流量到达 API 网关后，如何找到后端对应的服务。这和我们 "),v("a",{attrs:{href:"https://www.notion.so/05-b9f4478fcef04ff5bea8e6a27421d652",target:"_blank",rel:"noopener noreferrer"}},[t._v("05 讲“路由器：针对不同的流量实现多种路由策略”"),v("OutboundLink")],1),t._v("所讲到的路由作用是一样的。")]),t._v(" "),v("li",[v("strong",[t._v("Admin API")]),t._v("：Kong 中的 RESTful 的内部 API 接口。 API 接口可以在集群的任意节点运行，最终同步到所有集群的节点。用于管理 Kong 的各种行为，比如添加 service、router 等。")]),t._v(" "),v("li",[v("strong",[t._v("Plugins")]),t._v("：Kong 的插件系统。利用插件系统，我们添加新功能就不需要改动 Kong 的核心代码。插件系统自带足够多的功能，比如认证、限流、日志、Metrics 等。")]),t._v(" "),v("li",[v("strong",[t._v("Load Balancing")]),t._v("：Kong提供了两种负载均衡方式，DNS 和内置的负载均衡器。利用 DNS 模式，可以和 Consul 结合，实现服务发现。内置的负载均衡，则需要自己手动维护后端节点。")])]),t._v(" "),v("h2",{attrs:{id:"konga"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#konga"}},[t._v("#")]),t._v(" Konga")]),t._v(" "),v("p",[t._v("Kong 官方并没有为开源版本提供图形界面，只在其企业版提供了此功能。但是我们有一些开源的图形界面可以选择，其中最知名的就是 "),v("a",{attrs:{href:"https://github.com/PGBI/kong-dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Konga"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("Konga 提供了多种功能，包括 service、router、Load Balance 的管理，并"),v("strong",[t._v("支持多用户系统")]),t._v("，方便给不同用户划分不同的权限。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image2/M01/05/28/Cip5yF_9BjeAErkxAAGSQQtfsqw980.png",alt:"Konga 看板"}})]),t._v(" "),v("h2",{attrs:{id:"kong-架构演进"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kong-架构演进"}},[t._v("#")]),t._v(" Kong 架构演进")]),t._v(" "),v("p",[t._v("Kong 经历了几次架构演进，终于演进到了目前比较流行的微服务架构方式。整体来说该架构主要经历了如下演进：")]),t._v(" "),v("p",[t._v("DB Mode（0.x-1.0）→ DB-less Mode(1.1-1.5)→ Hybird Mode(2.0+)")]),t._v(" "),v("p",[t._v("下面我们分别介绍以下几种模式，以及它们的适用场景。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("DB Mode")]),t._v(" "),v("p",[t._v("最早的 Kong 版本就是使用这种方式，每个 Kong 都连接了后端 DB，这个 DB 可选为 PostgreSQL 或者 Cassandra。但是这个模式之前有个很严重的 Bug，就是"),v("strong",[t._v("在流量大的时候更新路由配置，会导致 Kong 产生剧烈的抖动")]),t._v("。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("DB-less Mode")])]),t._v(" "),v("p",[t._v("无数据库模式，也就是通过声明式的配置方式来运行 Kong。这种方式从某种意义来说是一种倒退，因为"),v("strong",[t._v("它让 Kong 无法通过 API 控制，也就是回到了原始的 Nginx 配置模式，相当于 Service Mesh 失去了控制面")]),t._v("。但也因为回归了原始的方式，不会出现 DB Mode 更新配置时导致的一些抖动问题。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Hybird Mode")])]),t._v(" "),v("p",[t._v("其实也就是引入了 Service Mesh 中的控制面和数据面的模式。相对于上面两种模式有巨大的架构优势，"),v("strong",[t._v("Hybird Mode 通过控制面收敛了数据库的操作行为，Kong 的数据节点不需要再直接连接到 DB 层")]),t._v("。这种模式有以下两种优势。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("仅控制面节点需要连接到 DB，而不是所有数据节点连接到 DB，对 DB 的压力大大减少，也就降低了数据面出现抖动的概率。")])]),t._v(" "),v("li",[v("p",[t._v("易于管理，不用像之前的 API 调用 Kong 的数据节点时再操作 Admin API 变更，只需与控制面交互即可。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image2/M01/05/28/Cip5yF_9BkSAGIm_AAB3pw9AH0k813.png",alt:"最新版本 Kong 架构（CP 控制面，DP 数据面）"}})])])])])]),t._v(" "),v("p",[t._v("至此，Kong 相关的知识就讲完了，相信你对微服务网关有了更深入的理解，下面我们来对微服务网关的未来发展做一些展望。")]),t._v(" "),v("h1",{attrs:{id:"微服务网关发展展望"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务网关发展展望"}},[t._v("#")]),t._v(" 微服务网关发展展望")]),t._v(" "),v("p",[t._v("微服务网关其实已经是比较成熟的微服务中间件了，它从业务中抽象了诸多功能放入其中，减少了我们业务开发的重复工作。")]),t._v(" "),v("h2",{attrs:{id:"图形化聚合层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图形化聚合层"}},[t._v("#")]),t._v(" 图形化聚合层")]),t._v(" "),v("p",[t._v("我们前面提到了系统网关和业务网关的架构，实际上这样做增加了一条请求链路。我们这样做是因为业务网关频繁更新，那么有没有办法减少这种更新频率呢？实际上 Uber 已经在某方面做出了动作，那就是"),v("strong",[t._v("通过图形化界面的方式，聚合后端 API")]),t._v("。")]),t._v(" "),v("p",[t._v("在 Uber 研发的第三代微服务网关中，提供了一个界面供所有工程师使用，工程师可以通过界面配置，创建和修改面向客户端的 API，如下图所示，这个界面也可以配置一些限流、鉴权、协议转换等中间件。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220511/2022051101410500990430.png",alt:"image-20220511014103437"}})]),t._v(" "),v("h2",{attrs:{id:"长连网关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#长连网关"}},[t._v("#")]),t._v(" 长连网关")]),t._v(" "),v("p",[t._v("这里的长连网关，指的是"),v("strong",[t._v("通过私有协议或者 gRPC、HTTP/2 等协议代替 HTTP 协议")]),t._v("。通过长连接通道，减少客户端和网关的建连次数，同时通过压缩 header 等方式，减少通信中产生的流量，以达到提高客户端响应速度的目的，让用户在 App 的使用体验上更上一个台阶。")]),t._v(" "),v("h2",{attrs:{id:"service-mesh-化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh-化"}},[t._v("#")]),t._v(" Service Mesh 化")]),t._v(" "),v("p",[t._v("其实在 Service Mesh 时代，微服务网关中的某些功能，比如限流、认证、鉴权等通用功能，完全可以让本地的 Sidecar 完成，这样就可以减少微服务链路中的一环，提高服务的吞吐及整体架构的可维护性。")]),t._v(" "),v("h1",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("这一讲我主要讲解了微服务中微服务网关这个模块，通过这讲内容，相信你已经对比较流行的微服务网关、微服务网关的未来发展趋势有了一定了解。再强调一下我们这节内容的重点：")]),t._v(" "),v("ul",[v("li",[t._v("Kong，从技术的角度讲，Kong 可以认为是一个 OpenResty 应用程序。")]),t._v(" "),v("li",[t._v("OpenResty 运行在 Nginx 之上，使用 Lua 扩展了 Nginx。")]),t._v(" "),v("li",[t._v("Lua 是一种非常容易使用的脚本语言，可以让你在 Nginx 中编写一些逻辑操作。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);