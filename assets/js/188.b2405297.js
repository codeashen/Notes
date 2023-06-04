(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{511:function(a,s,t){"use strict";t.r(s);var n=t(4),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gradle-基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-基本概念"}},[a._v("#")]),a._v(" Gradle 基本概念")]),a._v(" "),s("p",[a._v("Gradle 主要是用来构建应用程序的，Gradle 是一款构建工具，但不仅仅是构建工具这么简单，还可以是一款变成框框架。为什么这么说，来看 Gradle 的组成。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220616/2022061612390932252983.png",alt:"Gradle 的三大组成"}})]),a._v(" "),s("p",[a._v("Gradle 的三大组成：")]),a._v(" "),s("ul",[s("li",[a._v("groovy 核心语法，gradle 完全使用 groovy 的所有语法")]),a._v(" "),s("li",[a._v("build script block，可以在不同的 block 里执行不同的逻辑")]),a._v(" "),s("li",[a._v("gradle 自己的 api，包括 project、task 等")])]),a._v(" "),s("p",[a._v("Gradle 既有自己的语法，也有自己的 api，可以通过变成灵活的实现构建过程中的需求，所以可以看作变成框架。")]),a._v(" "),s("h1",{attrs:{id:"gradle-优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-优势"}},[a._v("#")]),a._v(" Gradle 优势")]),a._v(" "),s("ul",[s("li",[a._v("灵活性上，可以在构建过程中加入自己定义逻辑")]),a._v(" "),s("li",[a._v("粒度性上，整个构建过程都是通过一系列 task 完成的，粒度分布在每一个 task")]),a._v(" "),s("li",[a._v("扩展性上，gradle 支持插件机制，可以复用已有的插件")]),a._v(" "),s("li",[a._v("兼容性上，不仅强大，而且兼容 ant、maven")])]),a._v(" "),s("h1",{attrs:{id:"gradle-执行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-执行流程"}},[a._v("#")]),a._v(" Gradle 执行流程")]),a._v(" "),s("p",[a._v("执行 gradle 命令（clean、assemble、build 等），前面会有一个 loading 和 configuration 阶段，走完这两步，才真正执行指定的命令。")]),a._v(" "),s("p",[a._v("如执行 build 命令，在经过 loading 和 configuration 阶段后，又会执行很多其他的逻辑。")]),a._v(" "),s("p",[a._v("以上是因为 loading 和 configuration 就是 gradle 生命周期中的前两个，而 clean、build 等命令其实是执行 gradle 中的 task，而 task 是有依赖性的，执行指定 task 前，必须先执行所有其依赖的 task。")]),a._v(" "),s("p",[a._v("总结下来，gradle 的生命周期分为以下三个阶段：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220616/2022061612561662374706.png",alt:"image-20220616005614592"}})]),a._v(" "),s("h1",{attrs:{id:"生命周期监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期监听"}},[a._v("#")]),a._v(" 生命周期监听")]),a._v(" "),s("p",[a._v("gradle 提供了很多钩子函数，用来监听 gradle 的生命周期，即执行流程。这些 api 可以让我们在 gradle 生命周期的各阶段加入自定义回调逻辑。")]),a._v(" "),s("p",[a._v("下面介绍几个在平时开发过程中最常用的几个钩子函数：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("this.beforeEvaluate")]),a._v("：在配置阶段开始之前的回调")]),a._v(" "),s("li",[s("code",[a._v("this.afterEvaluate")]),a._v("：在配置阶段之后的回调")]),a._v(" "),s("li",[s("code",[a._v("this.gradle.buildFinished")]),a._v("：gradle 生命周期执行完的回调")])]),a._v(" "),s("p",[a._v("可以在 build.gradle 文件中加入以下代码，测试生命周期回调。")]),a._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//......")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 配置阶段开始前的回调")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beforeEvaluate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'===== before evaluate ====='")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 配置阶段完成后的回调")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("afterEvaluate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'===== after evaluate ====='")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// gradle执行完毕后的回调")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("buildFinished "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'===== build finished ====='")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等同于 beforeEvaluate")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beforeProject "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'===== before project ====='")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等同于 afterEvaluate")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("afterProject "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'===== after project ====='")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br")])]),s("p",[a._v("另外初始化阶段就是执行了 setting.gradle，所以可以在 setting.gradle 中加入初始化阶段要做的事情")]),a._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[a._v("rootProject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hello-gradle'")]),a._v("\n\nprintln "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'===== init start ====='")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("执行测试，在控制台执行 "),s("code",[a._v("./gradlew clean")]),a._v("，可以看到以下输出")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("===== init start =====\n\n> Configure project :\n===== after project =====\n===== after evaluate =====\n===== build finished =====\n\nBUILD SUCCESSFUL in 2s\n1 actionable task: 1 executed\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);