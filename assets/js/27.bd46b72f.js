(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{429:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python-gui中-text框里实时输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-gui中-text框里实时输出"}},[t._v("#")]),t._v(" Python GUI中 text框里实时输出")]),t._v(" "),a("p",[t._v("首先GUI中不同函数的局部变量的问题，我发现不同button定义的函数得到的变量无法通用。可以通过global 函数内的变量可以解决这个问题。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openfiles2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" s2fname\n    s2fname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filedialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("askopenfilename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'打开S2文件'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filetypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S2out'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.out'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'All Files'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S2打开成功\\n'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("s2fname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openfilecgns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" cgnsfname\n    cgnsfname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filedialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("askopenfilename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'打开CGNS文件'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("filetypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CGNSdat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.dat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'All Files'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CGNS dat 打开成功\\n'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("cgnsfname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("-Text文本框的定义和输出")]),t._v(" "),a("p",[t._v("定义：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fill"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("side"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BOTTOM  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("用到fill 可以填充某个方向，这次填充X方向，使得界面更好看。 side可以放置在不同的位置。但是这次用起来很多错误。")]),t._v(" "),a("p",[t._v("以后可以尝试不用import tkinter 可以用"),a("code",[t._v("from tkinter import *")]),t._v("虽然更危险，但是网上大部分的代码都是这样导出的。更容易参考。")]),t._v(" "),a("p",[t._v("实时更新并查看：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this Row finished...\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# INSERT表示在光标位置插入")]),t._v("\ntext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tkinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果不update就是，等到计算函数计算完之后才可以得到新的insert的数据。")]),t._v(" "),a("p",[t._v("用update可以解决这个问题。")]),t._v(" "),a("p",[t._v("利用see(END)  解决文本框滚动的问题。自动显示最新的一行信息。类似于各种商业软件求解器。")])])}),[],!1,null,null,null);s.default=e.exports}}]);