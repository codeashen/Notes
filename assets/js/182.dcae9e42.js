(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{505:function(e,v,t){"use strict";t.r(v);var s=t(4),r=Object(s.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("相对于传统的 IT 架构，互联网的架构在最近十几年变化非常迅速，究其原因还是互联网业务本身的飞速发展。如今中国互联网公司的用户规模已经全球领先，这得益于中国网络基础设施的建设，得益于智能手机的普及。")]),e._v(" "),v("p",[e._v("在这十几年中，中国的互联网行业从最早的 Web1.0 代表的新浪、网易等门户网站，到 Web2.0 代表的社区网站豆瓣网、人人网、开心网，再到如今的移动互联网的 O2O 生活——美团、微信、支付宝，甚至最近大红大紫的短视频抖音、快手等，每一个都代表一个时代。")]),e._v(" "),v("p",[e._v("随着用户规模的增大，互联网业务的迭代速度也越来越快，功能也越来越多。")]),e._v(" "),v("p",[e._v("实际上在 PC 互联网时代，无论是门户网站还是社区网站，受限于电脑的普及程度和学习“高”门槛，用户的规模很难说庞大，竞争也不是特别激烈，所以在 PC 互联网时代我们也可以发现，大多数网站采用的就是"),v("strong",[e._v("单体架构")]),e._v("的设计，因为完全可以满足业务的迭代速度。")]),e._v(" "),v("p",[e._v("但随着以手机为代表的移动设备的普及，用户接入互联网的门槛一下子降低了很多，导致网民数量迅速增长。互联网厂商可以更加容易地获取用户，厂商之间的竞争也变得更加激烈，这就导致了单体架构无法满足业务迭代的速度需求，"),v("strong",[e._v("微服务架构")]),e._v("应运而生。")]),e._v(" "),v("p",[e._v("进入移动互联网时代后，产品的制作速度越来越快，从最早的一年一款产品，到后面几个月一款产品，再到几周一款产品。这样的速度，也促使互联网公司逐步从自建机房，到使用云厂商的虚拟机，再到云原生时代。这些都是为适应业务的迅速变化而产生的架构变化，"),v("strong",[e._v("架构不是一蹴而就的，只有能够赋能业务，架构才能有生命力")]),e._v("。")]),e._v(" "),v("h1",{attrs:{id:"从微服务到-service-mesh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从微服务到-service-mesh"}},[e._v("#")]),e._v(" "),v("strong",[e._v("从微服务到 Service Mesh")])]),e._v(" "),v("p",[e._v("在这个专栏中，我们从微服务一直讲解到 Service Mesh，再到最终的展望部分简单讲解了 FaaS，可以说整个微服务的关键技术都涉及了。下面我们再来简单回顾一下整个专栏的内容。")]),e._v(" "),v("p",[e._v("在模块一中，我们讲解了微服务和 Service Mesh 中的核心组件，包括注册中心、负载均衡器、路由器、网关、配置中心等。相信通过模块一的学习，你对微服务的原理已经可以深入掌握。同时，我们也提到了一些学习方法，比如要"),v("strong",[e._v("关注英语词汇本身的意思")]),e._v("，避免中英文思维差异而产生误解，又比如多去查阅 RFC 文档，以了解设计的本意。")]),e._v(" "),v("p",[e._v("在模块二中，我们结合最流行的 Service Mesh 架构 Istio&Envoy 实际进行了操作演示，进一步了解了 Service Mesh 的运行方式，也分析了 Envoy 才是整个 Service Mesh 架构的核心。对于整个 Service Mesh 数据面和控制面交互的 xDS 协议也进行了深入理解。")]),e._v(" "),v("p",[e._v("在模块三中，我们自己用 Go 语言实现了一个简单的 Service Mesh 原型，包括数据面的代理层 Sidecar 和控制面的 xDS 协议。虽然这些只是最初步的实现，但相信这个章节会让你恍然大悟，原来 Istio 这样“高大上”的架构，在底层原理上也并非遥不可及。")]),e._v(" "),v("p",[e._v("在模块四中，我结合自己的实际经验，分享了一些落地中的问题和困难，也对 Service Mesh 未来发展做了初步的展望：FaaS 和中间件 Mesh 都是美好的未来。")]),e._v(" "),v("h1",{attrs:{id:"service-mesh-会是微服务演进的终极方向吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh-会是微服务演进的终极方向吗"}},[e._v("#")]),e._v(" "),v("strong",[e._v("Service Mesh 会是微服务演进的终极方向吗？")])]),e._v(" "),v("p",[e._v("任何架构都有其生命周期，Service Mesh 也不例外，它不可能是微服务演进的最终目标。但是我相信 Service Mesh 会作为网络通信层，在未来的架构中继续发光发热，Service Mesh 的控制面和数据面分离的思想，更是会一直存在下去。")]),e._v(" "),v("p",[e._v("在 24 讲中，我已经分享过 Service Mesh 未来的发展，它和 FaaS 的相结合将会是一个非常好的方向。但是目前我们也只是看到只有 Knative 这样做了，而且做的并不是很彻底。")]),e._v(" "),v("p",[e._v("结合我们上一讲提过的这张图，虽然 Knative 充分利用了 Istio&Envoy 的能力，但是也受限于开源的 Service Mesh 方案，没有办法更进一步。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/19/F1/CioPOWBK13KARAmNAAFOLVdbxMk461.png",alt:"Knative 架构图"}})]),e._v(" "),v("p",[e._v("你可以试想一下，作为 Route（Istio Gateway）是否有存在的必要，而 Activator 是否又有必要呢？")]),e._v(" "),v("p",[e._v("我们已经知道，经过 Sidecar 的代理后，微服务的内部通信都是以"),v("strong",[e._v("服务发现")]),e._v("的方式进行的，也就是说，内部流量根本没有必要经过 Route 这个 Gateway，而是直接通过 Pod to Pod 的方式通信。如果我们改造一下 Sidecar，"),v("strong",[e._v("让 Sidecar 可以接管 Route 的功能")]),e._v("，当没有发现服务节点的时候，将流量转发到 Activator；发现节点的情况将流量转发到服务的 Pods，这样不就可以省掉 Route 这层了吗？")]),e._v(" "),v("p",[e._v("Knative 之所以没有这么做，是因为"),v("strong",[e._v("Envoy 并不支持这样的工作")]),e._v("。传统的 Service Mesh 数据面没有为 Faas 改造 Sidecar，在没有节点的情况下会直接返回 500 错误。")]),e._v(" "),v("p",[e._v("我们进一步思考，Activator 这个组件的功能是否也可以集成到 Sidecar 中？Activator 和 Route 作为 Knative 的两个核心组件，存在一个最大的问题——它们都是中心化的。也就是说，这样的方式"),v("strong",[e._v("一旦挂掉，将会影响整个集群的调用")]),e._v("。")]),e._v(" "),v("p",[e._v("Activator 的功能就是在服务 Pod 为 0 的时候，通知 Autoscaler 组件进行服务扩容，这样的操作 Sidecar 自然也可以接管。所以整个架构就变成了，Sidecar 在发现服务没有节点的时候，直接通知 Autoscaler 组件进行扩容操作。此时先阻塞住请求，等待服务发现节点的时候，再将请求转发过去，这样我们就可以利用 Service Mesh 的能力让 FaaS 的架构变得更加稳定可靠，也更容易落地。")]),e._v(" "),v("p",[e._v("你也可以思考一下，我在上一讲中提到的 OpenFaaS 异步模式，是否也可以用上面的方式进行改造，省去 Gateway。")])])}),[],!1,null,null,null);v.default=r.exports}}]);