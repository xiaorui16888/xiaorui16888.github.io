(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{419:function(s,n,a){"use strict";a.r(n);var t=a(56),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"php开发获取cloudflare传递的真实访客ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php开发获取cloudflare传递的真实访客ip"}},[s._v("#")]),s._v(" PHP开发获取Cloudflare传递的真实访客IP")]),s._v(" "),a("p",[s._v("在某些场景下，需要限制同IP下客户注册账号数量等等...")]),s._v(" "),a("p",[s._v("用户可以通过修改修改请求头，伪造请求ip，这就很烦人")]),s._v(" "),a("p",[s._v("然后我们再套个cdn更获取不到真实的访问ip")]),s._v(" "),a("p",[s._v("我翻了很多的贴子，终于找到了一份有用的解决方法。")]),s._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),a("p",[s._v("先看看我们通过PHP 得到的CF返回来的HEADER信息")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print_r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("读取到的结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Array\n(\n    [USER] => www\n    [HOME] => /home/www\n    [HTTP_CF_CONNECTING_IP] => 122.114.6.211\n    [HTTP_COOKIE] => __cfduid=*****; PHPSESSID=******; PHPSESSID=*****; Hm_lvt_***=****; Hm_lpvt_*****=1536121476\n    [HTTP_ACCEPT_LANGUAGE] => zh-CN,zh;q=0.9\n    [HTTP_ACCEPT] => text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8\n    [HTTP_USER_AGENT] => Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36\n    [HTTP_UPGRADE_INSECURE_REQUESTS] => 1\n    [HTTP_CF_VISITOR] => {"scheme":"https"}\n    [HTTP_X_FORWARDED_PROTO] => https\n    [HTTP_CF_RAY] => 455d1c72ed0e963d-SJC\n    [HTTP_X_FORWARDED_FOR] => 122.114.6.211\n    [HTTP_CF_IPCOUNTRY] => CN\n    [HTTP_ACCEPT_ENCODING] => gzip\n    [HTTP_CONNECTION] => Keep-Alive\n    [HTTP_HOST] => cdn.bnxb.com\n    [PATH_INFO] => \n    [REDIRECT_STATUS] => 200\n    [SERVER_NAME] => cdn.bnxb.com\n    [SERVER_PORT] => 443\n    [SERVER_ADDR] => *\n    [REMOTE_PORT] => 12554\n    [REMOTE_ADDR] => 172.68.132.93\n    [SERVER_SOFTWARE] => nginx/1.14.0\n    [GATEWAY_INTERFACE] => CGI/1.1\n    [HTTPS] => on\n    [REQUEST_SCHEME] => https\n    [SERVER_PROTOCOL] => HTTP/1.1\n    [DOCUMENT_ROOT] => /\n    [DOCUMENT_URI] => /ip.php\n    [REQUEST_URI] => /ip.php\n    [SCRIPT_NAME] => /ip.php\n    [CONTENT_LENGTH] => \n    [CONTENT_TYPE] => \n    [REQUEST_METHOD] => GET\n    [QUERY_STRING] => \n    [SCRIPT_FILENAME] => /ip.php\n    [FCGI_ROLE] => RESPONDER\n    [PHP_SELF] => /ip.php\n    [REQUEST_TIME_FLOAT] => 1536196806.1434\n    [REQUEST_TIME] => 1536196806\n)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("p",[s._v("其中HTTP_CF_CONNECTING_IP标头就是我们要的访客真实IP信息了。")]),s._v(" "),a("p",[s._v("接下来说一下NGINX和PHP分别如何获取这个IP?")]),s._v(" "),a("p",[a("strong",[s._v("1、NGINX配置获取CloudFlare 下的访客真实IP并记录到日志")]),s._v("需要修改NGINX的配置文件")]),s._v(" "),a("p",[s._v("宝塔的nginx配置文件存放位置与一般nginx不一样。")]),s._v(" "),a("p",[s._v("宝塔存放nginx配置文件位置:/www/server/nginx/conf/nginx.conf；")]),s._v(" "),a("p",[s._v("一般nginx的配置文件位置:/usr/local/nginx/conf/nginx.conf。")]),s._v(" "),a("p",[s._v("在")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http{\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("部分增加")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("map $HTTP_CF_CONNECTING_IP  $clientRealIp {\n    \"\"    $remote_addr;\n    ~^(?P<firstAddr>[0-9.]+),?.*$    $firstAddr;\n}\nlog_format  main  '$clientRealIp [$time_local] \"$request\" '\n                  '$status $body_bytes_sent \"$http_referer\" '\n                  '$http_user_agent $remote_addr $request_time';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("主要是为了通用性，如果关闭了CDN，可以不需要修改获取IP的方式，所以才这么修改，不然直接用$HTTP_CF_CONNECTING_IP就行了（这个时候就不需要在日志格式里使用$clientRealIp）")]),s._v(" "),a("p",[s._v("然后在网站记录的日志定义使用main这个日志格式")]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("access_log  /www/wwwlogs/www.bnxb.com.log main;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以参考https://www.bnxb.com/nginx/27513.html")]),s._v(" "),a("p",[a("img",{attrs:{src:"PHP%E8%8E%B7%E5%8F%96%E8%8E%B7%E5%8F%96Cloudflare%E4%BC%A0%E9%80%92%E7%9A%84%E7%9C%9F%E5%AE%9E%E8%AE%BF%E5%AE%A2IP.assets/image-20211114162839379.png",alt:"image-20211114162839379"}})]),s._v(" "),a("p",[s._v("另外还有一种更简单的方法，但是如果服务器上有其他站点没套CF，可能就获取会异常。")]),s._v(" "),a("p",[s._v("就是在NGINX的主配置文件中加入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("set_real_ip_from 0.0.0.0/0;\nreal_ip_header CF-CONNECTING-IP;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"PHP%E8%8E%B7%E5%8F%96%E8%8E%B7%E5%8F%96Cloudflare%E4%BC%A0%E9%80%92%E7%9A%84%E7%9C%9F%E5%AE%9E%E8%AE%BF%E5%AE%A2IP.assets/image-20211114162942572.png",alt:"image-20211114162942572"}})]),s._v(" "),a("p",[a("strong",[s._v("2、PHP获取使用CloudFlare CDN环境下的访客真实IP")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$realip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'HTTP_CF_CONNECTING_IP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$realip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//也可以用下面这个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$clientIP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'HTTP_CF_CONNECTING_IP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'HTTP_CF_CONNECTING_IP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'REMOTE_ADDR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$clientIP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("因为我的项目是php的，所以我就选择了第二种最简单的方法。")]),s._v(" "),a("p",[s._v("下方来源有，Cloudflare配合宝塔nginx防火墙防御CC攻击的，我的站加了CDN就没被打死过，一切归功于Cloudflare和nginx防火墙。")]),s._v(" "),a("p",[s._v("下方来源的方法，我还没有亲测过。有机会了，可以测试一下。看效果和nginx防火墙默认防御策略有何不同。")]),s._v(" "),a("p",[s._v("参考来源：")]),s._v(" "),a("p",[s._v("https://www.bnxb.com/php/27592.html")])])}),[],!1,null,null,null);n.default=e.exports}}]);