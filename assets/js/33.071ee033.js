(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{431:function(e,t,s){"use strict";s.r(t);var a=s(56),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-记录创建时间、更新时间-自动生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-记录创建时间、更新时间-自动生成"}},[e._v("#")]),e._v(" mysql-记录创建时间、更新时间，自动生成")]),e._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 添加 创建 更新 时间字段\nALTER TABLE `表名`\nADD  COLUMN `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `最后一个列名`,\nADD COLUMN `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP  ON UPDATE CURRENT_TIMESTAMP AFTER  `create_time`;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("执行后, 会批量更新 现有数据全部自动更新为当前时间, 新插入的数据时候自动更新插入的时间.")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("修改已经存在的字段")]),e._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 添加 创建 更新 时间字段\nALTER TABLE `表名`\nMODIFY COLUMN `create_time`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `create字段前面一个字段名`,\nMODIFY COLUMN `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER `create_time`;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);