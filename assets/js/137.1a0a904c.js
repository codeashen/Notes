(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{460:function(s,t,a){"use strict";a.r(t);var r=a(4),n=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数组的定义和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组的定义和使用"}},[s._v("#")]),s._v(" 数组的定义和使用")]),s._v(" "),t("h2",{attrs:{id:"数组简介和定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组简介和定义"}},[s._v("#")]),s._v(" 数组简介和定义")]),s._v(" "),t("p",[s._v("数组（Array），顾名思义，用来存储一组相关的值，从而方便进行求和、计算平均数、逐项遍历等操作。")]),s._v(" "),t("h3",{attrs:{id:"定义数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义数组"}},[s._v("#")]),s._v(" 定义数组")]),s._v(" "),t("p",[s._v("有三种方式定义数组。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方括号定义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arr1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array 构造，传入数组项")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arr2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array 构造，传入数组长度，所有项都是 undefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arr3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("strong",[s._v("数组长度")]),s._v("，使用 length 属性获取，"),t("code",[s._v("arr.length")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"角标越界和更改数组项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角标越界和更改数组项"}},[s._v("#")]),s._v(" 角标越界和更改数组项")]),s._v(" "),t("p",[s._v("JavaScript 规定，访问数组中不存在的项会返回 undefined，不会报错。")]),s._v(" "),t("p",[s._v("如果更改的数组项超过了 "),t("code",[s._v("length - 1")]),s._v("，则会创造这项，自动扩容，前面的填充 undefined。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071901343213721909.png",alt:"image-20220719013430505"}})]),s._v(" "),t("h2",{attrs:{id:"数组类型的检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组类型的检测"}},[s._v("#")]),s._v(" 数组类型的检测")]),s._v(" "),t("ul",[t("li",[s._v("数组用 typeof 检测结果是 object")]),s._v(" "),t("li",[s._v("Array.isArray() 方法可以用来检测数组")]),s._v(" "),t("li",[s._v("后续还会介绍“鸭式辨型”检测方法")])]),s._v(" "),t("h1",{attrs:{id:"数组的常用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组的常用方法"}},[s._v("#")]),s._v(" 数组的常用方法")]),s._v(" "),t("h2",{attrs:{id:"数组的头尾操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组的头尾操作"}},[s._v("#")]),s._v(" 数组的头尾操作")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071901401851064436.png",alt:"image-20220719014016607"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("push")]),s._v("：在数组未尾推入新项，参数就是要推入的项，如果要推入多项，可以用逗号隔")]),s._v(" "),t("li",[t("strong",[s._v("pop")]),s._v(" ：删除并返回数组中的最后一项")]),s._v(" "),t("li",[t("strong",[s._v("unshift")]),s._v("：在数组头部插入新项，参数就是要插入的项，如果要插入多项，可以用逗号隔开")]),s._v(" "),t("li",[t("strong",[s._v("shift")]),s._v("：删除并返回数组中的首项")])]),s._v(" "),t("h2",{attrs:{id:"元素的替换、插入、删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元素的替换、插入、删除"}},[s._v("#")]),s._v(" 元素的替换、插入、删除")]),s._v(" "),t("p",[s._v("splice() 方法格式："),t("code",[s._v("splice(num1, num2, n...m)")]),s._v("，表示从 num1 项开始，删除 num2 个元素，再插入 n...m 个元素。")]),s._v(" "),t("p",[s._v("splice() 方法会以数组的形式返回被删除的元素，没有删除则返回空数组。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：这里删除元素的个数和插入的个数不要求相等。")])]),s._v(" "),t("p",[s._v("根据 splice() 方法的特点，可以用来替换、插入、删除元素。")]),s._v(" "),t("p",[t("strong",[s._v("splice() 用于元素的替换。")])]),s._v(" "),t("p",[s._v("这里将 D、E 替换成了 X、Y、Z。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071901494969229805.png",alt:"image-20220719014948130"}})]),s._v(" "),t("p",[s._v("以上图为例，可以理解为，从 3 位置开始，删除 2 项，然后将后面的元素插入。")]),s._v(" "),t("p",[t("strong",[s._v("splice() 用来插入元素")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071901551318773970.png",alt:"image-20220719015511649"}})]),s._v(" "),t("p",[s._v("上图表示，从 2 位置开始，删除 0 项，再插入后面的元素。")]),s._v(" "),t("p",[t("strong",[s._v("splice() 用于删除元素")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071901591637276217.png",alt:"image-20220719015914588"}})]),s._v(" "),t("p",[s._v("从 2 位置开始，删除 4 项，不插入元素。")]),s._v(" "),t("h2",{attrs:{id:"获取子数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取子数组"}},[s._v("#")]),s._v(" 获取子数组")]),s._v(" "),t("ul",[t("li",[s._v("slice() 方法用于得到子数组，类似于字符串的 slice() 方法")]),s._v(" "),t("li",[s._v("slice(a, b) 截取的子数组从下标为 a 的项开始，到下标为 b（不包括）结束")]),s._v(" "),t("li",[s._v("slice(a, b) 方法不会更改原有数组")]),s._v(" "),t("li",[s._v("slice() 如果不提供第二个参数，则表示从指定项开始，提取所有后续所有项作为子数组")]),s._v(" "),t("li",[s._v("slice() 方法的参数允许为负数，表示数组的倒数第几项")])]),s._v(" "),t("h2",{attrs:{id:"数组字符串互转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组字符串互转"}},[s._v("#")]),s._v(" 数组字符串互转")]),s._v(" "),t("p",[t("strong",[s._v("join() 和 split() 方法")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/202207190213051873299.png",alt:"image-20220719021303478"}})]),s._v(" "),t("ul",[t("li",[s._v("数组的 join() 方法可以使数组转为字符串；字符串的 split() 方法可以使字符串转为数组。")]),s._v(" "),t("li",[s._v("join() 的参数表示以什么字符作为连接符，如果留空则默，认以逗号分隔，如同调用 toString() 方法")]),s._v(" "),t("li",[s._v("split() 的参数表示以什么字符拆分字符串，一般不能留空")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a-b-c-d'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["a", "b", "c", "d"]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["abcd"]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["a", "b", "c", "d"]')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"数组合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组合并"}},[s._v("#")]),s._v(" 数组合并")]),s._v(" "),t("ul",[t("li",[s._v("concat() 方法可以合并连结多个数组")]),s._v(" "),t("li",[s._v("concat() 方法"),t("strong",[s._v("不会改变原数组")])])]),s._v(" "),t("p",[s._v("下例中 arr1 不会改变。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071902202024339157.png",alt:"image-20220719022018584"}})]),s._v(" "),t("h2",{attrs:{id:"数组反转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组反转"}},[s._v("#")]),s._v(" 数组反转")]),s._v(" "),t("p",[s._v("reverse() 方法用来将一个数组中的全部项顺序置反")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071902212201478702.png",alt:"image-20220719022120441"}})]),s._v(" "),t("h2",{attrs:{id:"indexof-、includes-、sort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indexof-、includes-、sort"}},[s._v("#")]),s._v(" indexOf()、includes()、sort")]),s._v(" "),t("ul",[t("li",[s._v("indexof() 方法的功能是搜索数组中的元素，并返回它所在的位置，如果元素不存在，则返回 -1")]),s._v(" "),t("li",[s._v("includes() 方法的功能是判断一个数组是否包含一个指定的值，返回布尔值")]),s._v(" "),t("li",[s._v("sort() 方法用于数组元素排序")])]),s._v(" "),t("h1",{attrs:{id:"引用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[s._v("#")]),s._v(" 引用类型")]),s._v(" "),t("h2",{attrs:{id:"什么是引用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是引用类型"}},[s._v("#")]),s._v(" 什么是引用类型")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("基本类型：number、boolean、string、undefined、null")])]),s._v(" "),t("li",[t("p",[s._v("引用类型：array、object、function、regexp...")])]),s._v(" "),t("li",[t("p",[s._v("基本类型进行相等判断时，会比较值是否相等")])]),s._v(" "),t("li",[t("p",[s._v("引用类型进行相等判断时，会比较址是否相等，也就是说它会比较是否为内存中的同一个东西")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cc.hjfile.cn/cc/img/20220719/2022071902343385047122.png",alt:"image-20220719023432087"}})]),s._v(" "),t("h2",{attrs:{id:"深克隆和浅克隆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深克隆和浅克隆"}},[s._v("#")]),s._v(" 深克隆和浅克隆")]),s._v(" "),t("ul",[t("li",[s._v("使用 arr1=arr2 的语法不会克隆数组")]),s._v(" "),t("li",[s._v("浅克隆：只克隆数组的第一层，如果是多维数组，或者数组中的项是其他引用类型值，则不克隆其他层")]),s._v(" "),t("li",[s._v("深克隆：克隆数组的所有层，要使用递归技术")])])])}),[],!1,null,null,null);t.default=n.exports}}]);