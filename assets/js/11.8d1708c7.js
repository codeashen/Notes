(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{336:function(r,n,i){"use strict";i.r(n);var t=i(4),s=Object(t.a)({},(function(){var r=this,n=r._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[n("h1",{attrs:{id:"核心基础组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心基础组件"}},[r._v("#")]),r._v(" 核心基础组件")]),r._v(" "),n("p",[r._v("Spring 基础组件包含六个，相应的关系如下图：")]),r._v(" "),n("p",[n("img",{attrs:{src:"https://img1.sycdn.imooc.com/5f28db83000139b212360588.png",alt:"图片描述"}})]),r._v(" "),n("p",[r._v("从箭头的流向可以归纳出从底到上的分层结构：")]),r._v(" "),n("ul",[n("li",[r._v("spring-jcl、spring-instrument、kotlin-coroutines 是底层基础，不依赖 Spring；")]),r._v(" "),n("li",[r._v("其它组件，可以标记为 L1；")]),r._v(" "),n("li",[r._v("spring-core 依赖于 spring-jcl、kotlin-coroutines 而又不依赖其它 Spring 组件，可以标记为 L2；")]),r._v(" "),n("li",[r._v("spring-expression、spring-beans 依赖于 spring-jcl 和 spring-core 又不依赖其它 Spring 组件，可以标记为 L3；")]),r._v(" "),n("li",[r._v("spring-aop 依赖于 spring-jcl、spring-core、spring-beans 而又不依赖其它 Spring 组件，可以标记为 L4；")]),r._v(" "),n("li",[r._v("spring-context 依赖于 spring-jcl、spring-core、spring-expression、spring-beans、spring-aop，可标记为L5。")])]),r._v(" "),n("p",[n("img",{attrs:{src:"https://img1.sycdn.imooc.com/5ecde6d90001860205310588.jpg",alt:"图片描述"}})]),r._v(" "),n("ul",[n("li",[n("strong",[r._v("Spring-jcl：")]),r._v(" JCL 全称：Jakarta Commons Logging，Spring-jcl 采用了设计模式中的“适配器模式”，它对外提供统一的接口，然后在适配类中将对日志的操作委托给具体的日志框架；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-core：")]),r._v(" Core 模块主要的功能是实现了反向控制 IOC（Inversion of Control）与依赖注入DI（Dependency Injection）、Bean 配置以及加载。Core 模块中有 Beans、BeanFactory、BeanDefinitions、ApplicationContext 等几个重要概念；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-expression：")]),r._v(" Spring 表达式语言，解析 Spring 表达式语言；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-beans：")]),r._v(" 负责 Bean 工厂中 Bean 的装配，所谓 Bean 工厂即是创建对象的工厂，Bean 的装配也就是对象的创建工作。"),n("strong",[r._v("重点：BeanFactory")]),r._v("；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-aop：")]),r._v(" Spring 提供了面向切面功能的模块；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-context：")]),r._v(" Spring 的 IOC 容器，因大量调用 Spring Core 中的函数，整合了 Spring 的大部分功能。 Bean 创建好对象后，由 Context 负责建立 Bean 与 Bean 之间的关系并维护。所以也可以把 Context 看成是 Bean 关系的集合，"),n("strong",[r._v("重点：ApplicationContext")]),r._v("。")])]),r._v(" "),n("p",[r._v("使用的其它组件：")]),r._v(" "),n("ul",[n("li",[n("strong",[r._v("Spring-instrument：")]),r._v(" 相当于一个检测器，提供对 JVM 以及对 Tomcat 的检测；")]),r._v(" "),n("li",[n("strong",[r._v("kotlin-coroutines：")]),r._v(" 引入了协程。")])]),r._v(" "),n("p",[r._v("为了方便查看，我们去掉了 Spring 核心组件的描述，仅仅描述核心组件之间的关系，如下图所示：")]),r._v(" "),n("p",[n("img",{attrs:{src:"https://img1.sycdn.imooc.com/5f28dc2c0001ebbc13090484.png",alt:"图片描述"}})]),r._v(" "),n("h1",{attrs:{id:"高级应用组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级应用组件"}},[r._v("#")]),r._v(" 高级应用组件")]),r._v(" "),n("p",[r._v("本文根据 Spring5.x 官方最新文档画出的 Spring 的架构图如下：")]),r._v(" "),n("p",[n("img",{attrs:{src:"https://img1.sycdn.imooc.com/5ecde6b0000160ce12360803.png",alt:"图片描述"}})]),r._v(" "),n("p",[r._v("可以看到 Spring 核心组件 core 位于所有组件的核心，它包含了 DI，事件，资源，国际化，验证，数据绑定，类型转换，SpEL，AOP 等主要功能，基于核心应用组件之上的组件有：数据访问（data access）、Web 框架、Spring 还支持动态脚本语言如 Groovy，也提供了 Kotlin 的支持、及其它各种框架及组件如调度，邮件，缓存，远程调用等的支持集成。最后，Spring 还提供了方便的测试支持 spring-test。")]),r._v(" "),n("p",[r._v("下面对各组件做一下详细介绍。")]),r._v(" "),n("h3",{attrs:{id:"_1-web-框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-web-框架"}},[r._v("#")]),r._v(" 1. web 框架")]),r._v(" "),n("ul",[n("li",[n("strong",[r._v("Spring-web：")]),r._v(" Web 上下文模块建立在应用程序上下文模块之上，为基于 Web 的应用程序提供了上下文；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-webmvc：")]),r._v(" 主要用于在遵守 Servlet 规范的前提下，将 Spring 框架集成到 Java web 应用中；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-websocket")]),r._v("：Spring 在 4.0 后将 WebSocket 集成了进去，即 Spring-websocket 模块。它与 Java WebSocket API 标准（JSR-356）兼容，并且还提供额外功能；")]),r._v(" "),n("li",[n("strong",[r._v("Spring-webflux：")]),r._v(" Spring Framework 5.0 中引入的新的反应式 Web 框架。 与 Spring MVC 不同，它不需要 Servlet API，完全异步和非阻塞， 并通过 Reactor 项目实现 Reactive Streams 规范。 并且可以在诸如 Netty， Undertow 和 Servlet 3.1+ 容器的服务器上运行。")])]),r._v(" "),n("h2",{attrs:{id:"_2-数据访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据访问"}},[r._v("#")]),r._v(" 2. 数据访问")]),r._v(" "),n("ul",[n("li",[n("strong",[r._v("Transactions：")]),r._v(" 事务管理")]),r._v(" "),n("li",[n("strong",[r._v("DAO Support：")]),r._v(" 数据访问对象")]),r._v(" "),n("li",[n("strong",[r._v("JDBC：")]),r._v(" jdbcTemplate")]),r._v(" "),n("li",[n("strong",[r._v("O/R Mapping：")]),r._v(" jpa，hibernate")]),r._v(" "),n("li",[n("strong",[r._v("XML Marshalling：")]),r._v(" xml 读取")])]),r._v(" "),n("h2",{attrs:{id:"_3-消息框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-消息框架"}},[r._v("#")]),r._v(" 3.消息框架")]),r._v(" "),n("p",[r._v("Spring-messaging")]),r._v(" "),n("h2",{attrs:{id:"高级组件的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级组件的关系"}},[r._v("#")]),r._v(" 高级组件的关系")]),r._v(" "),n("p",[r._v("我们看一下他们之间的相互关系，完整的依赖图如下所示：")]),r._v(" "),n("p",[n("img",{attrs:{src:"https://img1.sycdn.imooc.com/5f28dc7d0001248515890824.png",alt:"图片描述"}})]),r._v(" "),n("p",[r._v("从图中可以看出来各组件以下依赖关系：")]),r._v(" "),n("ul",[n("li",[r._v("spring-web 依赖于 Spring 核心组件和 spring-oxm；")]),r._v(" "),n("li",[r._v("spring-webmvc 依赖于 Spring核心组件和 spring-web，spring-context-support，spring-oxm；")]),r._v(" "),n("li",[r._v("spring-websocket 依赖于 Spring 核心组件和 spring message，spring-web，spring-webmvc；")]),r._v(" "),n("li",[r._v("spring-webflux 依赖于 Spring 核心组件和 spring-context-support，kotlin-coroutines。")])]),r._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),n("p",[r._v("Spring 框架本身包含的内容比较多，盲目的去阅读其源代码，只会陷入代码的沼泽中；源码 Spring 源码讲解战略战术：从战略上搞清楚 Spring 的各个组件及应用场景，然后从战术上根据自己的弱点进行加强练习，才可以练就一身神功。官方文档是我们了解 Spring 框架组件及应用场景的最好来源，通过使用思维导图来将官网文档进行浓缩精华，是一种值得推荐的方式。你瞧！你是否对 Spring 框架有了总体的认识了？")])])}),[],!1,null,null,null);n.default=s.exports}}]);