(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{400:function(t,a,_){"use strict";_.r(a);var s=_(4),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、mapping"}},[t._v("#")]),t._v(" 一、Mapping")]),t._v(" "),a("h2",{attrs:{id:"_1-1-mapping-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mapping-介绍"}},[t._v("#")]),t._v(" 1.1 Mapping 介绍")]),t._v(" "),a("p",[t._v("Mapping 类似数据库中的表结构定义，主要作用如下：")]),t._v(" "),a("ul",[a("li",[t._v("定义 Index 下的字段名（Field Name）")]),t._v(" "),a("li",[t._v("定义字段的类型，比如数值型、字符串型、布尔型等")]),t._v(" "),a("li",[t._v("定义倒排索引相关的配置，比如是否索引、记录 position 等")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/24/rcJoAH.png",alt:"image-20201224003619215"}})]),t._v(" "),a("p",[t._v("自定义 Mapping")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/24/rcJTNd.png",alt:"image-20201224003751552"}})]),t._v(" "),a("h2",{attrs:{id:"_1-2-参数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-参数介绍"}},[t._v("#")]),t._v(" 1.2 参数介绍")]),t._v(" "),a("h3",{attrs:{id:"动态开关-dynamic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态开关-dynamic"}},[t._v("#")]),t._v(" 动态开关 dynamic")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Mapping 中的字段类型一旦设定后，禁止直接修改，原因是 Lucene 实现的倒排索引生成后不允许修改")])]),t._v(" "),a("li",[a("p",[t._v("重新建立新的索引，然后做 reindex 操作重新导入文档")])]),t._v(" "),a("li",[a("p",[t._v("允许新增字段通过 "),a("code",[t._v("dynamic")]),t._v(" 参数来控制字段的新增")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("true")]),t._v("：(默认)允许自动新增字段")]),t._v(" "),a("li",[a("strong",[t._v("false")]),t._v("：不允许自动新增字段，但是文档可以正常写入，但无法对字段进行查询等操作")]),t._v(" "),a("li",[a("strong",[t._v("strict")]),t._v("：文档不能写入，报错")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/24/rcJ74A.png",alt:"image-20201224004042261"}})]),t._v(" "),a("p",[t._v("查询一个索引的mapping： "),a("code",[t._v("GET /index_name/_mapping")])])])]),t._v(" "),a("h3",{attrs:{id:"字段复制-copy-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段复制-copy-to"}},[t._v("#")]),t._v(" 字段复制 copy_to")]),t._v(" "),a("ul",[a("li",[t._v("将该字段的值复制到目标字段，实现类似 "),a("code",[t._v("_all")]),t._v(" 的作用")]),t._v(" "),a("li",[t._v("不会出现在 "),a("code",[t._v("_source")]),t._v(" 中，只用来搜索")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rREqsA.png",alt:"image-20201225003011925"}})]),t._v(" "),a("h3",{attrs:{id:"是否索引-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否索引-index"}},[t._v("#")]),t._v(" 是否索引 index")]),t._v(" "),a("ul",[a("li",[t._v("控制当前字段是否索引，默认为 true，即记录索引，false 不记录，即不可搜索")]),t._v(" "),a("li",[t._v("不用来检索的字段可以设置成 false，不生成倒排索引，会节省空间")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRELqI.png",alt:"image-20201225003359686"}})]),t._v(" "),a("h3",{attrs:{id:"索引内容控制-index-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引内容控制-index-options"}},[t._v("#")]),t._v(" 索引内容控制 index_options")]),t._v(" "),a("p",[t._v("index_options 用于控制倒排索引记录的内容，有如下4种配置")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("docs")]),t._v("： 只记录 doc id")]),t._v(" "),a("li",[a("strong",[t._v("freqs")]),t._v("：记录 doc id 和 term frequencies (词频)")]),t._v(" "),a("li",[a("strong",[t._v("positions")]),t._v("：记录 doc id、term frequencies 和 term position (位置)")]),t._v(" "),a("li",[a("strong",[t._v("offsets")]),t._v("：记录doc id、term frequencies、term position 和 character offsets (开始结束位置)")])]),t._v(" "),a("p",[t._v("text 类型默认配置为 positions，其他默认为 docs。记录内容越多，占用空间越大。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rREXZt.png",alt:"image-20201225004617196"}})]),t._v(" "),a("h3",{attrs:{id:"默认空值-null-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认空值-null-value"}},[t._v("#")]),t._v(" 默认空值 null_value")]),t._v(" "),a("p",[t._v("当字段遇到 null 值时的处理策略，默认为 null，即空值，此时 es 会忽略该值。可以通过设定该值设定字段的默认值")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rREvIf.png",alt:"image-20201225004646636"}})]),t._v(" "),a("h2",{attrs:{id:"_1-3-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-数据类型"}},[t._v("#")]),t._v(" 1.3 数据类型")]),t._v(" "),a("h3",{attrs:{id:"_1-3-1-常见数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-常见数据类型"}},[t._v("#")]),t._v(" 1.3.1 常见数据类型")]),t._v(" "),a("ul",[a("li",[t._v("字符串：text，keyword")]),t._v(" "),a("li",[t._v("数值型：long，integer，short，byte，double，float，half_float，scaled_float")]),t._v(" "),a("li",[t._v("布尔：boolean")]),t._v(" "),a("li",[t._v("日期：date")]),t._v(" "),a("li",[t._v("二进制：binary")]),t._v(" "),a("li",[t._v("范围类型：integer_range，float_range，long_range，double_range，date_range")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-2-复杂数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-复杂数据类型"}},[t._v("#")]),t._v(" 1.3.2 复杂数据类型")]),t._v(" "),a("ul",[a("li",[t._v("数组类型 array：无需指定为数组，只需要放入数组的元素符合该字段数据类型即可，即 integer 类型字段可以存放 integer 数组")]),t._v(" "),a("li",[t._v("对象类型 object")]),t._v(" "),a("li",[t._v("嵌套类型 nested object：和前者的区别的这些文档会特殊处理，不会和父文档混在一起，是独立存在的")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-3-地理位置数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-地理位置数据类型"}},[t._v("#")]),t._v(" 1.3.3 地理位置数据类型")]),t._v(" "),a("ul",[a("li",[t._v("geo_point")]),t._v(" "),a("li",[t._v("geo_shape")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-4-专用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-专用类型"}},[t._v("#")]),t._v(" 1.3.4 专用类型")]),t._v(" "),a("ul",[a("li",[t._v("ip：记录ip地址")]),t._v(" "),a("li",[t._v("completion：实现自动补全")]),t._v(" "),a("li",[t._v("token_count：记录分词数")]),t._v(" "),a("li",[t._v("murmur3：记录字符串hash值")]),t._v(" "),a("li",[t._v("percolator")]),t._v(" "),a("li",[t._v("join：做子查询用")])]),t._v(" "),a("h3",{attrs:{id:"_1-3-4-多字段特性-multi-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-多字段特性-multi-fields"}},[t._v("#")]),t._v(" 1.3.4 多字段特性 multi-fields")]),t._v(" "),a("p",[t._v("允许对同一个字段采用不同的配置，比如分词，常见例子如对人名实现拼音搜索，只需要在人名中新增一个子字段为 pinyin 即可")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rREzi8.png",alt:"image-20201225010451559"}})]),t._v(" "),a("h1",{attrs:{id:"二、动态映射-dynamic-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、动态映射-dynamic-mapping"}},[t._v("#")]),t._v(" 二、动态映射 Dynamic Mapping")]),t._v(" "),a("h2",{attrs:{id:"_2-1-自动识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-自动识别"}},[t._v("#")]),t._v(" 2.1 自动识别")]),t._v(" "),a("p",[t._v("es 可以自动识别文档字段类型，从而降低用户使用成本，如下所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVSJS.png",alt:"image-20201225010752220"}})]),t._v(" "),a("p",[t._v("es 是依靠 JSON 文档的字段类型来实现自动识别字段类型，支持的类型如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVpRg.png",alt:"image-20201225010926671"}})]),t._v(" "),a("h2",{attrs:{id:"_2-2-日期和数字识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-日期和数字识别"}},[t._v("#")]),t._v(" 2.2 日期和数字识别")]),t._v(" "),a("h3",{attrs:{id:"_2-2-1-日期识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-日期识别"}},[t._v("#")]),t._v(" 2.2.1 日期识别")]),t._v(" "),a("p",[t._v("日期的自动识别可以自行配置日期格式，以满足各种需求")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("默认是 "),a("code",[t._v('["strict date optional time","yyyy/MM/dd HH:mmss Zlyyyy/MM/dd Z]')])])]),t._v(" "),a("li",[a("p",[t._v("strict_date_optional_time 是 ISO datetime 的格式，完整格式类似下面：")]),t._v(" "),a("p",[a("code",[t._v("YYYY-MM-DDThh:mm:ssTZD(eg 1997-07-16T19:20:30+01:00)")])])]),t._v(" "),a("li",[a("p",[t._v("dynamic_date_formats 可以自定义日期类型")])]),t._v(" "),a("li",[a("p",[t._v("date_detection 可以关闭日期自动识别的机制")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRV9zQ.png",alt:"image-20201225011645649"}})]),t._v(" "),a("h3",{attrs:{id:"_2-2-2-数字识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-数字识别"}},[t._v("#")]),t._v(" 2.2.2 数字识别")]),t._v(" "),a("p",[t._v("字符串是数字时，默认不会自动识别为整型，因为字符串中出现数字是完全合理的")]),t._v(" "),a("ul",[a("li",[t._v("numeric_detection 可以开启字符串中数字的自动识别，如下所示：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVPMj.png",alt:"image-20201225011838499"}})]),t._v(" "),a("h1",{attrs:{id:"三、动态模板-dynamic-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、动态模板-dynamic-template"}},[t._v("#")]),t._v(" 三、动态模板 Dynamic Template")]),t._v(" "),a("p",[t._v("允许根据 es 自动识别的数据类型、字段名等来动态设定字段类型，可以实现如下效果：")]),t._v(" "),a("ul",[a("li",[t._v("所有字符串类型都设定为 keyword 类型，即默认不分词")]),t._v(" "),a("li",[t._v("所有以 message 开头的字段都设定为 text 类型，即分词")]),t._v(" "),a("li",[t._v("所有以 long_ 开头的字段都设定为 long 类型")]),t._v(" "),a("li",[t._v("所有自动匹配为 double 类型的都设定为 float 类型，以节省空间")])]),t._v(" "),a("p",[t._v("匹配规则一般有如下几个参数：")]),t._v(" "),a("ul",[a("li",[t._v("match_mapping_type 匹配 es 自动识别的字段类型，如 boolean、long、string 等")]),t._v(" "),a("li",[t._v("match，unmatch 匹配字段名")]),t._v(" "),a("li",[t._v("path_match，path unmatch 匹配路径")])]),t._v(" "),a("p",[t._v("下面示例就是实现了上述第一点，创建一个索引，改索引将 String 都设置为 keyword：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRViss.png",alt:"image-20201225012624670"}})]),t._v(" "),a("p",[t._v("以 message 开头的字段都设置为 text 类型：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVFLn.png",alt:"image-20201225013052799"}})]),t._v(" "),a("p",[t._v("自定义 Mapping 的操作步骤建议如下：")]),t._v(" "),a("ol",[a("li",[t._v("写入一条文档到 es 的临时索引中，获取 es 自动生成的 mapping")]),t._v(" "),a("li",[t._v("修改步骤1得到的 mapping，自定义相关配置")]),t._v(" "),a("li",[t._v("使用步骤2的 mapping 创建实际所需索引")])]),t._v(" "),a("h1",{attrs:{id:"四、索引模板-index-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、索引模板-index-template"}},[t._v("#")]),t._v(" 四、索引模板 Index Template")]),t._v(" "),a("p",[t._v("索引模板，英文为 Index Template，主要用于在新建索引时自动应用预先设定的配置，简化索引创建的操作步骤。创建规则如下：")]),t._v(" "),a("ul",[a("li",[t._v("可以设定索引的配置和 mapping")]),t._v(" "),a("li",[t._v("可以有多个模板，根据 order 设置，order 大的覆盖小的配置")])]),t._v(" "),a("p",[t._v("索引模板 endpoint 为 "),a("code",[t._v("_template")]),t._v("，如下所示：")]),t._v(" "),a("p",[a("strong",[t._v("创建索引模板")]),t._v("，即创建索引模板后，以后创建不指定设置，会采用匹配的索引模板设置（实际用处不大，很少有用的）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVAZq.png",alt:"image-20201225013813823"}})]),t._v(" "),a("p",[a("strong",[t._v("获取与删除索引模板")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVEd0.png",alt:"image-20201225014132461"}})]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("p",[t._v("1.创建两个模板")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVVoV.png",alt:"image-20201225014216422"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("创建索引，查看结构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/25/rRVeiT.png",alt:"image-20201225014316967"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);