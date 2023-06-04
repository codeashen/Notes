(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{401:function(t,a,r){"use strict";r.r(a);var e=r(4),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、search-api-概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、search-api-概览"}},[t._v("#")]),t._v(" 一、Search API 概览")]),t._v(" "),a("p",[t._v("实现对 es 中存储的数据进行查询分析，endpoint 为 "),a("code",[t._v("_search")]),t._v("，如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7aXDK.png",alt:"image-20201226175946805"}})]),t._v(" "),a("p",[t._v("查询主要有两种形式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("URI Search")]),t._v("：操作简便，方便通过命令行测试，仅包含部分查询语法")]),t._v(" "),a("li",[a("strong",[t._v("Request Body Search")]),t._v("：es 提供的完备查询语法 Query DSL (Domain Specific Language)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7ajHO.png",alt:"image-20201226180123424"}})]),t._v(" "),a("h1",{attrs:{id:"二、uri-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、uri-search"}},[t._v("#")]),t._v(" 二、URI Search")]),t._v(" "),a("h2",{attrs:{id:"_2-1-搜索方式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-搜索方式介绍"}},[t._v("#")]),t._v(" 2.1 搜索方式介绍")]),t._v(" "),a("p",[t._v("通过 url query 参数来实现搜索，常用参数如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("q")]),t._v("：指定查询的语句，语法为 Query String Syntax")]),t._v(" "),a("li",[a("code",[t._v("df")]),t._v("：q 中不指定字段时默认查询的字段，如果不指定，es 会查询所有字段")]),t._v(" "),a("li",[a("code",[t._v("sort")]),t._v("：排序")]),t._v(" "),a("li",[a("code",[t._v("from")]),t._v(", "),a("code",[t._v("size")]),t._v("：用于分页")]),t._v(" "),a("li",[a("code",[t._v("timeout")]),t._v("：指定超时时间，默认不超时")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7azUe.png",alt:"image-20201226180557610"}})]),t._v(" "),a("h2",{attrs:{id:"_2-2-搜索语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-搜索语法"}},[t._v("#")]),t._v(" 2.2 搜索语法")]),t._v(" "),a("h3",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[t._v("#")]),t._v(" 匹配规则")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("term 与 phrase：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('q=alfred way    等效于 alfred OR way\nq="alfred way"  词语查询，要求先后顺序\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("泛查询："),a("code",[t._v("q=alfred")]),t._v(" 等效于在所有字段去匹配该 term")])]),t._v(" "),a("li",[a("p",[t._v("指定字段："),a("code",[t._v("q=name:alfred")])])]),t._v(" "),a("li",[a("p",[t._v("Group 分组设定：使用括号指定匹配的规则")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("q=(quick OR brown) AND fox \nq=status:(active OR pending) title:(full text search)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("p",[t._v("可以通过加 profile 请求体，查看实际查询条件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dPgI.png",alt:"image-20201226183111763"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dC8A.png",alt:"image-20201226183215912"}})]),t._v(" "),a("h3",{attrs:{id:"布尔操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔操作符"}},[t._v("#")]),t._v(" 布尔操作符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("AND(&&), OR(|), NOT(!)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("q=name:(tom NOT lee)   注意大写，不能小写\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("+")]),t._v(" "),a("code",[t._v("-")]),t._v(" 分别对应 must 和 must_not")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("q=name:(tom+lee-alfred)`，`q=name:(lee&&lalfred)|(tom&&lee&&lalfred))`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[a("code",[t._v("+")]),t._v(" 在 url 中会被解析为空格，要使用 encode 后的结果才可以，为 "),a("code",[t._v("%2B")])])])])]),t._v(" "),a("h3",{attrs:{id:"范围查询-支持数值和日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#范围查询-支持数值和日期"}},[t._v("#")]),t._v(" 范围查询，支持数值和日期")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("区间写法，闭区间用 "),a("code",[t._v("[]")]),t._v("，开区间用 "),a("code",[t._v("{}")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("age:[1 TO 10]  意为 1<=age<=10\nage:[1 TO 10}  意为 1<=age<10\nage:[1 TO]     意为 age>=1\nage:[* TO 10]  意为 age<=10\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("算数符号写法")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("age:>=1\nage:(>=1&&<=10) 或者 age:(+>=1+<=10)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"通配符查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配符查询"}},[t._v("#")]),t._v(" 通配符查询")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("?")]),t._v(" 代表1个字符，"),a("code",[t._v("*")]),t._v(" 代表0或多个字符")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("name:t?m\nname:tom*\nname:t*m*\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通配符匹配执行效率低，且占用较多内存，不建议使用")])]),t._v(" "),a("li",[a("p",[t._v("如无特殊需求，不要将 "),a("code",[t._v("?")]),t._v(" 或 "),a("code",[t._v("*")]),t._v(" 放在最前面")])])]),t._v(" "),a("h3",{attrs:{id:"正则表达式匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式匹配"}},[t._v("#")]),t._v(" 正则表达式匹配")]),t._v(" "),a("p",[a("code",[t._v("name:/[mb]oat/")])]),t._v(" "),a("h3",{attrs:{id:"模糊匹配-fuzzy-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配-fuzzy-query"}},[t._v("#")]),t._v(" 模糊匹配 fuzzy query")]),t._v(" "),a("p",[a("code",[t._v("name:roam~1")]),t._v("：匹配与 roam 差 1 个 character 的词，比如 foam、roams 等")]),t._v(" "),a("h3",{attrs:{id:"近似度查询-proximity-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#近似度查询-proximity-search"}},[t._v("#")]),t._v(" 近似度查询 proximity search")]),t._v(" "),a("p",[a("code",[t._v('"fox quick"~5')]),t._v('：以 term 为单位进行差异比较，比如 "quick fox"，"quick brown fox" 都会被匹配')]),t._v(" "),a("h1",{attrs:{id:"三、request-body-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、request-body-search"}},[t._v("#")]),t._v(" 三、Request Body Search")]),t._v(" "),a("h2",{attrs:{id:"_3-1-搜索方式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-搜索方式介绍"}},[t._v("#")]),t._v(" 3.1 搜索方式介绍")]),t._v(" "),a("p",[t._v("将查询语句通过 http request body 发送到 es，主要包含如下参数")]),t._v(" "),a("ul",[a("li",[t._v("query：符合 Query DSL 语法的查询语句")]),t._v(" "),a("li",[t._v("from、size、timeout、sort 等等")])]),t._v(" "),a("h2",{attrs:{id:"_3-2-query-dsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-query-dsl"}},[t._v("#")]),t._v(" 3.2 Query DSL")]),t._v(" "),a("p",[t._v("基于JSON定义的查询语言，主要包含如下两种类型：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("字段类查询")]),t._v("：如 term, match, range 等，只针对某一个字段进行查询")]),t._v(" "),a("li",[a("strong",[t._v("复合查询")]),t._v("：如 bool 查询等，包含一个或多个字段类查询或者复合查询语句")])]),t._v(" "),a("p",[t._v("具体参考官方文档："),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Query DSL"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Query DSL 结构包含主要包含下图部分，后面会详细介绍相关查询的含义和语法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://z3.ax1x.com/2021/08/09/f10xJI.png",alt:"image-20210809022421414"}})]),t._v(" "),a("h2",{attrs:{id:"_3-3-相关性算分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-相关性算分"}},[t._v("#")]),t._v(" 3.3 相关性算分")]),t._v(" "),a("p",[t._v("在介绍详细介绍查询方式之前，先学习下 es 的相关性算分。")]),t._v(" "),a("p",[t._v("相关性算分是指文档与查询语句间的相关度，英文为 relevance，通过倒排索引可以获取与查询语句相匹配的文档列表，那么如何 "),a("strong",[t._v("将最符合用户查询需求的文档放到前列")]),t._v(" 呢？本质是一个排序问题，排序的依据是相关性算分。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dQvq.png",alt:"image-20201226193837601"}})]),t._v(" "),a("h3",{attrs:{id:"_3-3-1-相关性算分因素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-相关性算分因素"}},[t._v("#")]),t._v(" 3.3.1 相关性算分因素")]),t._v(" "),a("p",[t._v("相关性算分的几个重要概念如下：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Term Frequency(TF)")]),t._v(" 词频，即单词在该文档中出现的次数。词频越高，相关度越高")]),t._v(" "),a("li",[a("strong",[t._v("Document Frequency(DF)")]),t._v(" 文档频率，即单词出现的文档数")]),t._v(" "),a("li",[a("strong",[t._v("Inverse Document Frequency(IDF)")]),t._v(" 逆向文档频率，与文档频率相反，简单理解为1/DF。即单词出现的文档数越少，相关度越高")]),t._v(" "),a("li",[a("strong",[t._v("Field-length Norm")]),t._v(" 文档越短，相关性越高")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-2-相关性算分模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-相关性算分模型"}},[t._v("#")]),t._v(" 3.3.2 相关性算分模型")]),t._v(" "),a("p",[t._v("ES目前主要有两个相关性算分模型，如下：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("TF/IDF 模型")])]),t._v(" "),a("li",[a("strong",[t._v("BM25 模型")]),t._v("，5.x 之后的默认模型")])]),t._v(" "),a("p",[a("strong",[t._v("TF/IDF 模型")]),t._v(" 是 Lucene 的经典模型，其计算公式如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7d1K0.png",alt:"image-20201226194233000"}})]),t._v(" "),a("p",[t._v("可以通过 explain 参数来查看具体的计算方法，但要注意：")]),t._v(" "),a("ul",[a("li",[t._v("es 的算分是按照 shard 进行的，即 shard 的分数计算是相互独立的，所以在使用 explain 的时候注意分片数。")]),t._v(" "),a("li",[t._v("可以通过设置索引的分片数为 1 来避免这个问题")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7d3rV.png",alt:"image-20201226200524827"}})]),t._v(" "),a("p",[a("strong",[t._v("BM25 模型")]),t._v(" 中 BM 指 Best Match，25 指迭代了 25 次才计算方法，是针对 TF/IDF 的一个优化，其计算公式如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7d8bT.png",alt:"image-20201226200737542"}})]),t._v(" "),a("p",[t._v("BM25 相比 TF/IDF 的一大优化是降低了 TF（词频）在过大时的权重")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dJVU.png",alt:"image-20201226200925270"}})]),t._v(" "),a("p",[t._v("至此，了解了相关性算分之后，开始详细介绍查询方式和语法。")]),t._v(" "),a("h1",{attrs:{id:"四、字段查询和复合查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、字段查询和复合查询"}},[t._v("#")]),t._v(" 四、字段查询和复合查询")]),t._v(" "),a("p",[t._v("前面介绍 "),a("a",{attrs:{href:"#32-query-dsl"}},[t._v("Query DSL")]),t._v(" 时，提到 Query DSL 主要包含包含字段类型查询和符合查询。")]),t._v(" "),a("h2",{attrs:{id:"_4-1-字段查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-字段查询"}},[t._v("#")]),t._v(" 4.1 字段查询")]),t._v(" "),a("p",[t._v("字段类查询主要包括以下两类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("全文查询")]),t._v("：针对 text 类型的字段进行全文检索，会对查询语句先进行分词处理，如 match，match_phrase 等 query 类型。")]),t._v(" "),a("li",[a("strong",[t._v("单词级查询")]),t._v("：不会对查询语句做分词处理，直接去匹配字段的倒排索引，如 term，terms，range 等。")])]),t._v(" "),a("h3",{attrs:{id:"_4-1-1-全文查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-全文查询"}},[t._v("#")]),t._v(" 4.1.1 全文查询")]),t._v(" "),a("p",[t._v("全文查询使你能够搜索分析过的文本字段，例如电子邮件正文。查询时使用的分词器和索引时分词器相同。")]),t._v(" "),a("p",[t._v("具体可参考官方文档："),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/full-text-queries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full text queries"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("全文查询包含以下具体方式：")]),t._v(" "),a("h4",{attrs:{id:"match-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match-query"}},[t._v("#")]),t._v(" Match Query")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("对字段作全文检索")]),t._v("，最基本和常用的查询类型，API示例如下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7divt.png",alt:"image-20201226192654312"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dkKP.png",alt:"image-20201226192834774"}})]),t._v(" "),a("ul",[a("li",[t._v("Match Query具体流程如下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dEb8.png",alt:"image-20201226193018447"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 "),a("strong",[t._v("operator")]),t._v(" 参数可以控制单词间的匹配关系，可选项为 "),a("code",[t._v("or")]),t._v(" 和 "),a("code",[t._v("and")])]),t._v(" "),a("blockquote",[a("p",[t._v("以下示例表示 文档中 alfred 和 way 必须同时存在")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7deUg.png",alt:"image-20201226193147450"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 "),a("strong",[t._v("minimum_should_match")]),t._v(" 参数可以控制需要匹配的单词数")]),t._v(" "),a("blockquote",[a("p",[t._v("以下示例表示 文档最少含有条件中的两个单词")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dM2n.png",alt:"image-20201226193340270"}})]),t._v(" "),a("h4",{attrs:{id:"match-phrase-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match-phrase-query"}},[t._v("#")]),t._v(" Match Phrase Query")]),t._v(" "),a("p",[a("strong",[t._v("对字段作检索，有顺序要求")]),t._v("，API 示例如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dYaF.png",alt:"image-20201226201007930"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dt54.png",alt:"image-20201226201058092"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 "),a("strong",[t._v("slop")]),t._v(" 参数可以控制单词间的间隔")]),t._v(" "),a("blockquote",[a("p",[t._v("以下示例表示 关键词之间允许存在一个词的间隔距离")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7daG9.png",alt:"image-20201226201120244"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dwx1.png",alt:"image-20201226201237451"}})]),t._v(" "),a("h4",{attrs:{id:"query-string-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-string-query"}},[t._v("#")]),t._v(" Query String Query")]),t._v(" "),a("p",[t._v("类似于 URI Search 中的 q 参数查询")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dBKx.png",alt:"image-20201226201542037"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7drqK.png",alt:"image-20201226201740320"}})]),t._v(" "),a("h4",{attrs:{id:"simple-query-string-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-query-string-query"}},[t._v("#")]),t._v(" Simple Query String Query")]),t._v(" "),a("p",[t._v("类似 Query String，但是会忽略错误的查询语法，并且仅支持部分查询语法")]),t._v(" "),a("p",[t._v("其常用的逻辑符号如下，不能使用 AND、OR、NOT 等关键词：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("+")]),t._v(" 代指 AND")]),t._v(" "),a("li",[a("code",[t._v("|")]),t._v(" 代指 OR")]),t._v(" "),a("li",[a("code",[t._v("-")]),t._v(" 代指 NOT")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dyVO.png",alt:"image-20201226201923225"}})]),t._v(" "),a("h3",{attrs:{id:"_4-1-2-单词级查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-单词级查询"}},[t._v("#")]),t._v(" 4.1.2 单词级查询")]),t._v(" "),a("p",[t._v("使用单词级别的查询，根据结构化数据中的精确值查找文档。与全文查询不同，词级查询不进行分词。相反，单词级查询与文档中的字段进行精确匹配。")]),t._v(" "),a("p",[t._v("具体可参考官方文档："),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/term-level-queries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Term level queries"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("单词级查询包含以下具体方式：")]),t._v(" "),a("h4",{attrs:{id:"term-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#term-query"}},[t._v("#")]),t._v(" Term Query")]),t._v(" "),a("p",[t._v("将查询语句作为整个单词进行查询，即不对查询语句做分词处理，如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dcIe.png",alt:"image-20201226202151991"}})]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("terms")]),t._v(" 一次传入多个单词进行查询，如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7d2PH.png",alt:"image-20201226202244803"}})]),t._v(" "),a("h4",{attrs:{id:"range-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#range-query"}},[t._v("#")]),t._v(" Range Query")]),t._v(" "),a("p",[t._v("范围查询主要针对数值和日期类型，如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dRGd.png",alt:"image-20201226202352941"}})]),t._v(" "),a("p",[t._v("针对日期做查询，如下所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dWRA.png",alt:"image-20201226202458420"}})]),t._v(" "),a("p",[t._v("针对日期提供的一种更友好地计算方式，格式如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7dfxI.png",alt:"image-20201226202553652"}})]),t._v(" "),a("blockquote",[a("p",[t._v("主要时间单位：y-years，M-months，w-weeks，d-days，h-hours，m-minutes，s-seconds")])]),t._v(" "),a("p",[t._v("假设 "),a("code",[t._v("now")]),t._v(" 为 "),a("code",[t._v("2018-01-02 12:00:00")]),t._v("，那么如下的计算结果实际为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/28/r7d4Mt.png",alt:"image-20201226202813590"}})]),t._v(" "),a("h2",{attrs:{id:"_4-2-复合查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-复合查询"}},[t._v("#")]),t._v(" 4.2 复合查询")]),t._v(" "),a("p",[t._v("复合查询是指包含字段类查询或复合查询的类型，主要包括以下几类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("constant_score query")]),t._v("：包装另一个查询的查询，但在过滤器上下文中执行它。")]),t._v(" "),a("li",[a("strong",[t._v("bool query")]),t._v("：组合一个或多个布尔查询子句。")]),t._v(" "),a("li",[t._v("dis_max query：接受多个查询并返回与任何查询子句匹配的文档。")]),t._v(" "),a("li",[t._v("function_score query：允许修改查询结果文档的相关性得分。")]),t._v(" "),a("li",[t._v("boosting query：返回匹配 positive 子句的文档，同时减少也匹配 negative 子句文档的分数。")])]),t._v(" "),a("p",[t._v("具体参考官方文档："),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/compound-queries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Compound Queries"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("下面重点介绍 "),a("code",[t._v("constant_score query")]),t._v(" 和 "),a("code",[t._v("bool query")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-1-constant-score-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-constant-score-query"}},[t._v("#")]),t._v(" 4.2.1 constant_score query")]),t._v(" "),a("p",[t._v("包装过滤器查询，并将所有结果的相关性得分都设置成 "),a("code",[t._v("boost")]),t._v(" 参数设置的值，默认为 1.0，然后将过滤后的文档放回。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r76o5V.png",alt:"image-20201226203228938"}})]),t._v(" "),a("h3",{attrs:{id:"_4-2-2-bool-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-bool-query"}},[t._v("#")]),t._v(" 4.2.2 bool query")]),t._v(" "),a("p",[t._v("布尔查询，由一个或多个布尔子句组成，主要包含如下4个：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("子句")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("filter")]),t._v(" "),a("td",[t._v("只过滤符合条件的文档，不计算相关性得分")])]),t._v(" "),a("tr",[a("td",[t._v("must")]),t._v(" "),a("td",[t._v("文档必须符合 must 中的所有条件，会影响相关性得分")])]),t._v(" "),a("tr",[a("td",[t._v("must_not")]),t._v(" "),a("td",[t._v("文档必须不符合 must_not 中的所有条件，不会影响相关性得分")])]),t._v(" "),a("tr",[a("td",[t._v("should")]),t._v(" "),a("td",[t._v("文档可以符合 should 中的条件，会影响相关性得分")])])])]),t._v(" "),a("p",[t._v("Bool 查询的 API 如下所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r76H8U.png",alt:"image-20201226203635765"}})]),t._v(" "),a("p",[a("strong",[t._v("Filter")]),t._v(" 查询只过滤符合条件的文档，不会进行相关性算分")]),t._v(" "),a("ul",[a("li",[t._v("es 针对 filter 会有智能缓存，因此其执行效率很高")]),t._v(" "),a("li",[t._v("做简单匹配查询且不考虑算分时，推荐使用 filter 替代 query 等")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r76OKJ.png",alt:"image-20201226203803009"}})]),t._v(" "),a("p",[a("strong",[t._v("must")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r76Xr9.png",alt:"image-20201226203922939"}})]),t._v(" "),a("p",[a("strong",[t._v("must_not")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r76xV1.png",alt:"image-20201226204105896"}})]),t._v(" "),a("p",[a("strong",[t._v("should")])]),t._v(" "),a("p",[t._v("should 使用分两种情况：")]),t._v(" "),a("ol",[a("li",[t._v("bool 查询中只包含 should，不包含 must 查询")]),t._v(" "),a("li",[t._v("bool 查询中同时包含 should 和 must 查询")])]),t._v(" "),a("p",[t._v("只包含 should 时，文档必须满足至少一个条件")]),t._v(" "),a("blockquote",[a("p",[t._v("minimum should_match 可以控制满足条件的个数或者百分比")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r76zUx.png",alt:"image-20201226204204838"}})]),t._v(" "),a("p",[t._v("同时包含 should 和 must 时，文档不必满足 should 中的条件，但是如果满足条件，会增加相关性得分")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r7cC8O.png",alt:"image-20201226204303800"}})]),t._v(" "),a("h1",{attrs:{id:"五、query-和-filter-上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、query-和-filter-上下文"}},[t._v("#")]),t._v(" 五、Query 和 Filter 上下文")]),t._v(" "),a("p",[t._v("默认情况下，Elasticsearch 按相关性分数对匹配的搜索结果进行排序，相关性分数衡量每个文档与查询的匹配程度。虽然每种查询类型可以不同地计算相关性分数，但分数计算还取决于查询子句是在查询还是过滤器上下文中运行。")]),t._v(" "),a("p",[t._v("在 Query 上下文中，查询子句回答了 "),a("code",[t._v("“此文档与此查询子句匹配程度如何？”")]),t._v(" 除了判断文档是否匹配外，查询子句还会计算 "),a("code",[t._v("_score")]),t._v(" 元数据字段中的相关性分数 。")]),t._v(" "),a("p",[t._v("在 Filter 上下文中，查询子句回答问题 "),a("code",[t._v("“此文档是否与此查询子句匹配？”")]),t._v("，答案是简单的“是”或“否”——不计算分数。过滤上下文主要用于过滤查询结果文档。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r7c9PK.png",alt:"image-20201226204502324"}})]),t._v(" "),a("p",[t._v("Query 和 Filter 上下文使用示例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r7cS56.png",alt:"image-20201226204553616"}})]),t._v(" "),a("p",[t._v("具体参考官方文档："),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Query and filter context"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"六、文档计数和字段过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、文档计数和字段过滤"}},[t._v("#")]),t._v(" 六、文档计数和字段过滤")]),t._v(" "),a("h2",{attrs:{id:"_6-1-文档计数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-文档计数"}},[t._v("#")]),t._v(" 6.1 文档计数")]),t._v(" "),a("p",[t._v("获取符合条件的文档数，endpoint 为 "),a("code",[t._v("_count")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r7cixe.png",alt:"image-20201226204633445"}})]),t._v(" "),a("h2",{attrs:{id:"_6-2-文档字段过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-文档字段过滤"}},[t._v("#")]),t._v(" 6.2 文档字段过滤")]),t._v(" "),a("p",[t._v("过滤返回结果中 "),a("code",[t._v("_source")]),t._v(" 中的字段，主要有如下几种方式：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/r7cP2D.png",alt:"image-20201226204730854"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);