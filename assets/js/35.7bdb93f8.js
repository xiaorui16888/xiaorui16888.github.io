(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{433:function(s,a,e){"use strict";e.r(a);var t=e(56),l=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql如何查看操作记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql如何查看操作记录"}},[s._v("#")]),s._v(" mysql如何查看操作记录")]),s._v(" "),e("p",[s._v("分为文件记录日志和数据库记录日志两种方式，效果相同。")]),s._v(" "),e("h2",{attrs:{id:"一-、文件记录数据库操作日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-、文件记录数据库操作日志"}},[s._v("#")]),s._v(" 一 、文件记录数据库操作日志")]),s._v(" "),e("p",[s._v("首先进入mysql输入指令，是先进入root数据库，否则会提示没权限。")]),s._v(" "),e("p",[s._v("然后再进需要开启日志的数据库。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show variables like 'gen%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"mysql%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95.assets/image-20211114010255065.png",alt:"image-20211114010255065"}})]),s._v(" "),e("p",[s._v("general_log是开启还是关闭状态，以及这个帐号的general_log文件在哪。\n如果没有开启，请先设置开启。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set global general_log=ON;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后去路径在看日志就ok了。")]),s._v(" "),e("p",[s._v("查看log：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /目录/日志.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"二-、数据库自己记录操作日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-、数据库自己记录操作日志"}},[s._v("#")]),s._v(" 二 、数据库自己记录操作日志")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show variables like '%log_output%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"mysql%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95.assets/image-20211114010525029.png",alt:"image-20211114010525029"}})]),s._v(" "),e("p",[s._v("默认是FILE，改为TABLE")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set  global log_output='TABLE';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("之后就可以通过以下两句话查看数据库操作记录。")]),s._v(" "),e("p",[s._v("查看操作记录：")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from mysql.general_log;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("会看到在数据库里已经记录上了日志")]),s._v(" "),e("p",[e("img",{attrs:{src:"mysql%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95.assets/image-20211114010616035.png",alt:"image-20211114010616035"}})]),s._v(" "),e("p",[s._v("因数据库一直记录日志会增加压力，建议用文件记录")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set  global log_output='FILE';\n\ntruncate table mysql.general_log;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("最后附上MySQL8.0的修改数据库密码：")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new密码';  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=l.exports}}]);