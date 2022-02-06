(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{453:function(t,e,E){"use strict";E.r(e);var a=E(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,E=t._self._c||e;return E("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[E("h2",{attrs:{id:"jmeter之http协议接口性能测试"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#jmeter之http协议接口性能测试"}},[t._v("#")]),t._v(" JMeter之HTTP协议接口性能测试")]),t._v(" "),E("h2",{attrs:{id:"jmeter安装工作"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#jmeter安装工作"}},[t._v("#")]),t._v(" jmeter安装工作")]),t._v(" "),E("p",[E("a",{attrs:{href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),E("OutboundLink")],1)]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233606666.png",alt:"image-20211224233606666"}})]),t._v(" "),E("p",[t._v("jmeter运行需要java环境，安装jdk1.8即可。")]),t._v(" "),E("p",[t._v("解压下载的jmeter绿色安装包，打开bin目录，windows系统——双击jmeter.bat，等待窗口打开。")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233624174.png",alt:"image-20211224233624174"}})]),t._v(" "),E("p",[t._v("打开后，纯英文，英文一般的同学，点击上方工具栏中的options——choose language——Chinese（simplified），即可切换为中文。")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233642212.png",alt:"image-20211224233642212"}})]),t._v(" "),E("h2",{attrs:{id:"get请求测试"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#get请求测试"}},[t._v("#")]),t._v(" get请求测试")]),t._v(" "),E("p",[t._v("右键Test Plan ，添加——线程——线程组")]),t._v(" "),E("p",[t._v("右键线程组，添加——取样器——HTTP请求")]),t._v(" "),E("p",[t._v("继续填写Http请求内容——服务器名称、路径、请求协议")]),t._v(" "),E("p",[t._v("如下")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233801430.png",alt:"image-20211224233801430"}})]),t._v(" "),E("p",[t._v("发送请求后，我们发现页面中并没有发生任何变化。没有办法知道http请求返回的结果。怎么办呢？")]),t._v(" "),E("p",[t._v("右键线程组，添加——监听器——察看结果树")]),t._v(" "),E("p",[t._v("再次发送请求，就会发现察看结果树板块中，出现响应的信息。")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233823223.png",alt:"image-20211224233823223"}})]),t._v(" "),E("p",[t._v("如果需要统计请求的结果，比如响应速度，错误率等。怎么办呢?")]),t._v(" "),E("p",[t._v("右键线程组，添加——监听器——聚合报告")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233850020.png",alt:"image-20211224233850020"}})]),t._v(" "),E("p",[t._v("如果需要多个样本，怎么办呢？")]),t._v(" "),E("p",[t._v("点击线程组，修改线程数为你需要的数量。")]),t._v(" "),E("p",[t._v("如果需要同时并发，修改"),E("code",[t._v("Ramp-Up时间（秒）")]),t._v("为0。")]),t._v(" "),E("h2",{attrs:{id:"参数化-函数助手"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#参数化-函数助手"}},[t._v("#")]),t._v(" 参数化——函数助手")]),t._v(" "),E("p",[t._v("在一些场景中，我们需要读取文件中的内容，去发送请求。怎么办呢？")]),t._v(" "),E("p",[t._v("使用函数助手生成参数，就可以达到我们的需求。")]),t._v(" "),E("p",[t._v("点击工具栏中的，工具——函数助手对话框")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233911444.png",alt:"image-20211224233911444"}})]),t._v(" "),E("p",[E("code",[t._v("函数助手")]),t._v("就会把函数字符串生成出来，我们就可以很容易的得到函数。")]),t._v(" "),E("p",[t._v("把生成的函数，可以传递到请求路径后，发送请求。看看效果如何？")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224233933592.png",alt:"image-20211224233933592"}})]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234000490.png",alt:"image-20211224234000490"}})]),t._v(" "),E("p",[t._v("附上userName.txt中的内容")]),t._v(" "),E("div",{staticClass:"language- line-numbers-mode"},[E("pre",{pre:!0,attrs:{class:"language-text"}},[E("code",[t._v("站长\nzhangsn\nhhhhh\nlisi\n")])]),t._v(" "),E("div",{staticClass:"line-numbers-wrapper"},[E("span",{staticClass:"line-number"},[t._v("1")]),E("br"),E("span",{staticClass:"line-number"},[t._v("2")]),E("br"),E("span",{staticClass:"line-number"},[t._v("3")]),E("br"),E("span",{staticClass:"line-number"},[t._v("4")]),E("br")])]),E("p",[t._v("我们把线程数调整为5，循环读取文件中的内容，发送请求。")]),t._v(" "),E("p",[t._v("会发现每次请求携带的参数不一样。")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234028228.png",alt:"image-20211224234028228"}})]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234046690.png",alt:"image-20211224234046690"}})]),t._v(" "),E("h2",{attrs:{id:"post请求测试"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#post请求测试"}},[t._v("#")]),t._v(" post请求测试")]),t._v(" "),E("h3",{attrs:{id:"map参数格式-key-value"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#map参数格式-key-value"}},[t._v("#")]),t._v(" map参数格式(key-value)")]),t._v(" "),E("p",[t._v("继续新建HTTP请求")]),t._v(" "),E("p",[t._v("右键线程组——取样器——HTTP请求，")]),t._v(" "),E("p",[t._v("填写HTTP请求配置")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234109872.png",alt:"image-20211224234109872"}})]),t._v(" "),E("p",[t._v("为了防止post和get请求同时触发，我们可以先禁用掉get请求。")]),t._v(" "),E("p",[t._v("右键"),E("code",[t._v("get请求测试")]),t._v("，点击禁用即可。")]),t._v(" "),E("p",[t._v("然后发送请求后，察看结果树，是否返回正常。")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234133801.png",alt:"image-20211224234133801"}})]),t._v(" "),E("p",[E("code",[t._v("userName")]),t._v("的赋值也可以使用函数表达式。生成函数后，填写即可。")]),t._v(" "),E("h3",{attrs:{id:"json格式参数格式"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#json格式参数格式"}},[t._v("#")]),t._v(" json格式参数格式")]),t._v(" "),E("p",[t._v("继续新建一个HTTP请求...我们直接把其他HTTP请求禁用掉，防止触发。")]),t._v(" "),E("p",[t._v("json格式的参数传递的时候，把json内容填写到"),E("code",[t._v("消息体数据")]),t._v("中。")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234153316.png",alt:"image-20211224234153316"}})]),t._v(" "),E("p",[t._v("继续设置请求头")]),t._v(" "),E("p",[t._v("点击线程组右键——新建——配置元件——HTTP信息头管理器，")]),t._v(" "),E("p",[t._v("填写"),E("code",[t._v("Content-Type:application/json")])]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234215891.png",alt:"image-20211224234215891"}})]),t._v(" "),E("p",[t._v("发送请求后，察看结果树")]),t._v(" "),E("p",[E("img",{attrs:{src:"JMeter%E4%B9%8BHTTP%E5%8D%8F%E8%AE%AE%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.assets/image-20211224234233217.png",alt:"image-20211224234233217"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);