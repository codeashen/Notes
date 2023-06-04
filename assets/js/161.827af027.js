(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{484:function(_,v,t){"use strict";t.r(v);var a=t(4),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("今天我要和你分享的内容是负载均衡中的进阶知识：如何实现节点染色、地域优先访问，以及如何根据后端节点的负载情况，进行动态的加权负载均衡。")]),_._v(" "),v("h1",{attrs:{id:"节点染色"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#节点染色"}},[_._v("#")]),_._v(" 节点染色")]),_._v(" "),v("p",[_._v("节点染色，简单来说就是把某一类节点打上相同的标签，然后负载均衡器根据标签来分发流量。")]),_._v(" "),v("p",[_._v("在微服务架构中，染色有很多作用，比如金丝雀发布、A/B测试、故障演练、流量区分，都可以通过染色来实现。")]),_._v(" "),v("p",[_._v("那么具体我们应该如何操作呢？")]),_._v(" "),v("p",[_._v("首先我们需要"),v("strong",[_._v("在网关层，根据 header 信息或者权重对流量进行染色")]),_._v("。比如在客户端的某些版本中写入染色的 header，就像 X-TAG=canary；也可以在网关层对流量按照比例分流，比如 1% 的流量打上金丝雀的标签进行灰度测试。")]),_._v(" "),v("p",[_._v("另外在注册中心也需要写入对应的 MetaData 信息，用于在负载均衡层进行流量的过滤。比如在注册中心的 MetaData 信息中定义 lb_tags 的字段，数据为 [stage:canary, v:1.2]，在 LB 进行匹配的时候，带有金丝雀 header 的请求，就会请求到 lb_tags 包含 canary 的节点上面。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image2/M01/04/34/CgpVE1_q6-aAAHwgAAEhSA1g7Rg541.png",alt:"https://s0.lgstatic.com/i/image2/M01/04/34/CgpVE1_q6-aAAHwgAAEhSA1g7Rg541.png"}})]),_._v(" "),v("p",[_._v("节点染色操作示意图（绿色箭头表示 prod 流量，红色箭头表示 canary 流量）")]),_._v(" "),v("p",[_._v("另外我们也需要考虑没有匹配到对应节点时的降级策略，参考 Envoy 中的配置，一般有如下几种：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/8C/52/Ciqc1F_rCcyAfF6dAACsBN_vS9I347.png",alt:"https://s0.lgstatic.com/i/image/M00/8C/52/Ciqc1F_rCcyAfF6dAACsBN_vS9I347.png"}})]),_._v(" "),v("p",[_._v("比如在金丝雀这种策略中，我们将标注 canary 的 tag 的节点，配置 DEFAULT_SUBSET，这样如果金丝雀的节点不存在的话，就会访问 prod 的节点，将标注 prod 的节点配置 NO_ENDPOINT，这样 prod 的节点就不会有染色的降级策略，而是使用我们之前配置的自我保护策略了。")]),_._v(" "),v("p",[_._v("染色是负载均衡器利用节点上的标签进行流量路由，同样地域优先访问也需要利用在节点上打上地域标签，让负载均衡器进行地域优先。")]),_._v(" "),v("h1",{attrs:{id:"地域优先访问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#地域优先访问"}},[_._v("#")]),_._v(" 地域优先访问")]),_._v(" "),v("p",[_._v("地域优先访问，在 Envoy 中也被称为 zone 感知路由，先解释一下几个术语。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("始发集群")]),_._v("：调用方，也就是 Client 端的服务节点集合。")]),_._v(" "),v("li",[v("strong",[_._v("上游集群")]),_._v("：被调用方，也就是 Server 端的服务节点集合。")]),_._v(" "),v("li",[v("strong",[_._v("zone")]),_._v(": 区域（Region）和可用区（Availability Zone，AZ）。一般这里的 zone 指两个概念的合并。比如在阿里云中区域是 cn-beijing，可用区域是 c，那么这里的 zone 指的是 cn-beijing-c。")])]),_._v(" "),v("p",[v("strong",[_._v("zone 感知路由，会根据始发集群的所在区节点数量和目标集群的所在区节点数量，动态计算出一个对应的比例")]),_._v("。")]),_._v(" "),v("p",[_._v("实际上还有另外一种简单的算法，就是"),v("strong",[_._v("地域所在区静态加权。")]),_._v(" 这种算法最大的问题，是很难保证始发集群和上游集群的所在区是一一对应且比例相同的，比如始发集群 A 所在的 c 区是 50%，而上游集群 B 所在的 c 区只有 20%，这样如果只是简单的静态加权，就会导致始发集群 c 区的流量将上游集群 c 区打挂。")]),_._v(" "),v("p",[_._v("实际上在微服务框架 Dubbo 中也采用了类似的算法，"),v("strong",[_._v("但这种算法对运维环境要求比较高，并不适合用在真实的环境中")]),_._v("。")]),_._v(" "),v("p",[_._v("zone 感知路由解决的最大的问题，就是"),v("strong",[_._v("对运维环境的依赖")]),_._v("。通过动态计算上下游的节点数，将流量正确地路由到各个分区。虽然会产生一些因环境带来的延时问题，但避免了打挂上游集群的风险。")]),_._v(" "),v("p",[_._v("这个过程会出现以下两种情况：")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("1. 始发集群的本地 zone 节点数量小于或者等于上游集群所在 zone 节点数量")])]),_._v(" "),v("p",[_._v("此种情况，只需将流量全部打到对应的上游集群所在 zone 的节点就可以了，另外计算出的上游集群所在区剩余的流量比例，用于服务其他所在区集群的流量。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("2. 始发集群的本地 zone 节点数量大于或者等于上游集群所在 zone 节点数量")])]),_._v(" "),v("p",[_._v("这个时候就没办法将所有流量路由到上游集群所在 zone 了，因为此种做法很明显会导致上游集群所在区的流量不均衡。这时我们就需要将剩余的流量路由到其他 zone 的上游集群了。")]),_._v(" "),v("p",[_._v("zone 感知路由对于降低因为跨地域跨区的请求引起的延时增高问题，有明显的效果，但依赖于获取本地所在 zone 的始发集群节点数量。在分布式场景中，"),v("strong",[_._v("如果节点数量发生变化，可能会导致瞬间的流量不均衡")]),_._v("，此时我们要及时退出此种模式以避免引发雪崩，也因为这种问题，我们引入了基于 P2C 技术（Pick of two choices，两种随机选择）的动态加权负载均衡模式。")])])]),_._v(" "),v("h1",{attrs:{id:"延时、负载加权-ewma"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#延时、负载加权-ewma"}},[_._v("#")]),_._v(" 延时、负载加权（EWMA）")]),_._v(" "),v("p",[_._v("实际上基于 P2C 算法的负载均衡，已经是 Service Mesh 世界中的“一等公民”了，也是近年来最流行的负载均衡算法，我们常见的 Service Mesh 控制面，比如 Envoy、Linkerd，默认都提供基于 P2C 的负载均衡算法，另外最常用的七层负载均衡器 Nginx，在其收费版本 NGINX plus 中，同样提供了 P2C 的负载均衡算法。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220510/2022051009320645241018.png",alt:"image-20220510213206210"}})]),_._v(" "),v("p",[_._v("相对于传统的动态加权负载均衡，P2C 解决的最大问题，就是“羊群效应”。")]),_._v(" "),v("blockquote",[v("p",[_._v("羊群效应：当某一节点出现延时或者 CPU 负载过高时，始发集群的多个节点都发现了这个节点延时/CPU 负载过高的问题，很容易造成过多的流量路由到同一节点，造成负载不均衡。")])]),_._v(" "),v("p",[_._v("因为 P2C 是随机获取两个节点，然后获得加权值算法后最大的节点，所以需要一个加权算法用来判断哪个节点的加权值更大。负载率的算法如下：")]),_._v(" "),v("p",[_._v("$$client_success/server_cpu"),v("em",[_._v("math.Sqrt(latency+1)")]),_._v("(inflight+1)$$")]),_._v(" "),v("p",[_._v("下面简单解释一下各参数的意义。")]),_._v(" "),v("ul",[v("li",[_._v("client_success: 客户端的请求成功率")]),_._v(" "),v("li",[_._v("server_cpu: 通过每次请求 response 的 header 返回，服务端的 CPU 瞬时值")]),_._v(" "),v("li",[_._v("latency：客户端计算的延时")]),_._v(" "),v("li",[_._v("inflight： 正在发送中的请求数量")])]),_._v(" "),v("p",[_._v("你需要注意的是，在这里的公式中，我们"),v("strong",[_._v("并没有加上节点的静态权重")]),_._v("。和 Envoy 一样，我们只在节点权重一致的情况下采用此种算法，因为"),v("strong",[_._v("P2C 算法会导致后端节点的实际权重和配置的权重相差比较大")]),_._v("，给运维中的临时调整节点权重和金丝雀发布带来一定的困扰。")]),_._v(" "),v("h3",{attrs:{id:"ewma-计算延时和客户端成功率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ewma-计算延时和客户端成功率"}},[_._v("#")]),_._v(" EWMA 计算延时和客户端成功率")]),_._v(" "),v("p",[_._v("我们当然可以通过"),v("strong",[_._v("滑动窗口")]),_._v("的方式计算 10s 内的延时平均值和客户端成功率，但这种方式消耗的内存比较大，所以这里我们选择 EWMA（Exponentially Weighted Averages，指数移动加权平均）的算法来计算延时和客户端成功率。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/8C/52/Ciqc1F_rCbuAFwVzAAA8uDAb-4U656.png",alt:"https://s0.lgstatic.com/i/image/M00/8C/52/Ciqc1F_rCbuAFwVzAAA8uDAb-4U656.png"}})]),_._v(" "),v("ul",[v("li",[_._v("$v_t$ 代表第 t 次请求时的 EWMA 值，$v_{t-1}$ 代表第 t-1 次请求的 EWMA 值；")]),_._v(" "),v("li",[_._v("$θ_t$ 代表第 t 次请求的实际耗时，所以 "),v("em",[_._v("β")]),_._v(" 越小，$v_t$ 越接近本次请求耗时。")])]),_._v(" "),v("p",[_._v("在实际中 "),v("em",[_._v("β")]),_._v(" 值的公式：$β = math.Exp(float64(-td) / float64(tau))$， 其中 td 为当前时间和上次响应后之间的时间差，tau 为衰减系数。")]),_._v(" "),v("h1",{attrs:{id:"负载均衡中的常见问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡中的常见问题"}},[_._v("#")]),_._v(" 负载均衡中的常见问题")]),_._v(" "),v("p",[_._v("现在，我们已经对负载均衡这部分内容有了大概的了解，接下来让我们一起来看看负载均衡中常见的问题，相信对你的学习和工作会有一定的启发。")]),_._v(" "),v("h2",{attrs:{id:"为什么四层负载均衡中流量会不均衡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么四层负载均衡中流量会不均衡"}},[_._v("#")]),_._v(" 为什么四层负载均衡中流量会不均衡？")]),_._v(" "),v("p",[_._v("实际上在内网通信初期，我们可能会选取软件负载均衡器，通过反向代理的方式做负载均衡。因为 Nginx 这样的七层负载均衡器消耗比较大，理论上一台高配置的服务器大概能承受 10w 级别 QPS 的负载，让我们过早地遇到了单机瓶颈。所以在这种情况下通常我们会选取四层负载均衡器，但四层负载均衡器最大的问题就是流量不均衡。")]),_._v(" "),v("p",[_._v("因为四层负载均衡器基于连接做负载均衡，"),v("strong",[_._v("当我们摘掉某一个节点，也就是把某个节点的权重设置为 0 的时候，由于连接还是保持的，流量依然会打到这个节点")]),_._v("，所以使用四层负载均衡器很多时候要等待一整天才能将节点无损地摘掉。这在外网网关的摘取中也特别常见。")]),_._v(" "),v("p",[_._v("也正是这种基于连接的机制，导致"),v("strong",[_._v("某些连接请求 QPS 高、某些连接请求 QPS 低")]),_._v("的情况也很容易出现。特别是在微服务架构中，这种情况会进一步加剧。作为客户端的服务也很容易出现不同服务请求量差别很大的情况。")]),_._v(" "),v("p",[_._v("另外当我们做服务发布时，某个节点重启后会出现流量很低的情况，也是因为四层的负载均衡器已经在其他节点上建立了连接，新加入的节点往往需要较长时间才会负载趋于均衡。")]),_._v(" "),v("h2",{attrs:{id:"负载均衡后各节点流量均衡-后端服务的负载就一定一致吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡后各节点流量均衡-后端服务的负载就一定一致吗"}},[_._v("#")]),_._v(" 负载均衡后各节点流量均衡，后端服务的负载就一定一致吗？")]),_._v(" "),v("p",[_._v("在负载均衡场景中，往往会造成这样的误解：我的每台机器的 QPS 一致，我的机器负载肯定是均衡的。")]),_._v(" "),v("p",[_._v("实际上，因为服务器硬件的差异，特别是虚拟机存在超卖等现象，很难保证同规格的服务器能够处理同样的 QPS 量级，所以后端服务器的负载很难一致，这个时候就"),v("strong",[_._v("需要根据延时和 CPU 情况的一些加权策略做处理")]),_._v("了。")]),_._v(" "),v("h2",{attrs:{id:"节点下线后如何及时摘掉节点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#节点下线后如何及时摘掉节点"}},[_._v("#")]),_._v(" 节点下线后如何及时摘掉节点？")]),_._v(" "),v("p",[_._v("一般情况下我们会等待注册中心的通知，但因为注册中心的中心化异步推送机制，往往收到信息不够及时，可以通过 upsteam 节点返回服务健康检查失败的头信息，让客户端可以快速摘掉不健康的节点。")]),_._v(" "),v("h1",{attrs:{id:"结语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[_._v("#")]),_._v(" 结语")]),_._v(" "),v("p",[_._v("这一章我主要讲解了负载均衡中的进阶知识，包括染色、地域优先访问、动态延时负载加权、负载均衡中的常见问题等。这一讲中你需要特别注意的是染色和地域优先访问，都需要对服务器节点打上对应的标签，因此标签的正确性尤为重要。")])])}),[],!1,null,null,null);v.default=s.exports}}]);