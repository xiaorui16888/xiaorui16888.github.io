<template><h1 id="linux下安装部署elasticsearch" tabindex="-1"><a class="header-anchor" href="#linux下安装部署elasticsearch" aria-hidden="true">#</a> Linux下安装部署ElasticSearch</h1>
<p>ElasticSearch，简称为<code>es</code>。es的运行需要jdk环境，我们首先需要安装java。</p>
<h2 id="java环境篇" tabindex="-1"><a class="header-anchor" href="#java环境篇" aria-hidden="true">#</a> java环境篇</h2>
<h3 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装java</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装jdk1.8.0的所有文件</span>
yum <span class="token function">install</span> -y java-1.8.0-openjdk*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="检查jdk" tabindex="-1"><a class="header-anchor" href="#检查jdk" aria-hidden="true">#</a> 检查jdk</h3>
<p>安装完成后，检查<code>jdk</code>是否安装成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java -version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="Linux下安装部署ElasticSearch.assets/image-20211224234902866.png" alt="image-20211224234902866"></p>
<p>接下来，配置环境变量。其实我一直有个疑问，yum安装的java，到底需要配置环境变量吗？其实我没有配置环境变量，也一样可以运行es。这里，我们为了保险起见，还是配置一下吧。</p>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3>
<ul>
<li>
<p>yum安装jdk默认安装的路径在 <code>/usr/lib/jvm</code></p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224234924337.png" alt="image-20211224234924337"></p>
</li>
<li>
<p>在<code>/etc/profile</code>文件中添加如下命令</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># set java environment  </span>
JAVA_HOME=/usr/lib/jvm/java<span class="token punctuation">-</span>1.8.0<span class="token punctuation">-</span>openjdk<span class="token punctuation">-</span>1.8.0.181<span class="token punctuation">-</span>3.b13.el7_5.x86_64
PATH=$PATH<span class="token punctuation">:</span>$JAVA_HOME/bin  
CLASSPATH=.<span class="token punctuation">:</span>$JAVA_HOME/lib/dt.jar<span class="token punctuation">:</span>$JAVA_HOME/lib/tools.jar  
export JAVA_HOME  CLASSPATH  PATH
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>保存关闭<code>profile</code>文件，执行如下命令生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>使用如下命令，查看<code>jdk</code>变量</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token builtin class-name">echo</span> <span class="token variable">$JAVA_HOME</span>
 <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$CLASSPATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出变量值，则成功。</p>
</li>
</ul>
<p>以上是最简单粗暴的安装java-jdk方式。</p>
<h2 id="es篇" tabindex="-1"><a class="header-anchor" href="#es篇" aria-hidden="true">#</a> ES篇</h2>
<h3 id="安装es" tabindex="-1"><a class="header-anchor" href="#安装es" aria-hidden="true">#</a> 安装es</h3>
<p>你可以去官网下载</p>
<p>https://www.elastic.co/cn/downloads/elasticsearch</p>
<p>如果你觉得下载速度比较慢，可以用一些国内的镜像站。比如<code>华为开源镜像站</code>。</p>
<p>https://repo.huaweicloud.com/elasticsearch/</p>
<p>针对自己的情况选择即可。</p>
<ul>
<li>下载完成后，解压</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tar</span> -xvf elasticsearch-xxxxxx.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>修改配置文件<code>config/elasticsearch.yml</code></li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>//添加 下面几行
<span class="token key atrule">xpack.ml.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment"># 开放端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">8833</span>

<span class="token comment">#memory</span>
<span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">bootstrap.system_call_filter</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">#node</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span> 
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"node-1"</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>修改配置文件<code>config/jvm.options</code></li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>//修改为，128m  不然本机1G的运行内存 用不了
<span class="token punctuation">-</span>Xms128m
<span class="token punctuation">-</span>Xmx128m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这里最大、小运行内存，具体看你服务器的配置和你的数据量。我配置比较高，我设置的4G。4*1024=4096m</p>
<ul>
<li>
<p>添加linux子用户，启用es</p>
<p>因为root用户下，无法启用es的。所以只能创建一个es的子用户。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 根目录下创建用户，密码</span>
<span class="token function">useradd</span> es
<span class="token comment"># 设置密码</span>
<span class="token function">passwd</span> es
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>给与文件访问权限</p>
<p>你必须给与es权限，不然他没有es文件夹下的启用权限，就会报错。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chown</span> -R es:es /www/software/elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>打开 <code>/etc/security/limits.conf </code>，在里面添加如下内容</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>* soft nofile <span class="token number">65536</span>
* hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>修改 <code>/etc/sysctl.conf</code>，末尾添加下面配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vm.max_map_count<span class="token operator">=</span><span class="token number">655360</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>查看并更新生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sysctl -p 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
<h3 id="启用es" tabindex="-1"><a class="header-anchor" href="#启用es" aria-hidden="true">#</a> 启用es</h3>
<p>使用<code>es</code>账号登录，启动es</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> es
<span class="token builtin class-name">cd</span> /www/software/elasticsearch
<span class="token comment"># 启动es</span>
./bin/elasticsearch<span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="访问es" tabindex="-1"><a class="header-anchor" href="#访问es" aria-hidden="true">#</a> 访问es</h3>
<p>打开浏览器，或者<code>curl</code>访问</p>
<p>http://localhost:8833/</p>
<p>或者http://外网ip:8833</p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224234950338.png" alt="image-20211224234950338"></p>
<p>这样就启动OK了</p>
<h3 id="基本rest命令说明" tabindex="-1"><a class="header-anchor" href="#基本rest命令说明" aria-hidden="true">#</a> 基本Rest命令说明</h3>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224235009486.png" alt="image-20211224235009486"></p>
<h2 id="插件篇" tabindex="-1"><a class="header-anchor" href="#插件篇" aria-hidden="true">#</a> 插件篇</h2>
<h3 id="安装elasticsearch-head插件" tabindex="-1"><a class="header-anchor" href="#安装elasticsearch-head插件" aria-hidden="true">#</a> 安装ElasticSearch Head插件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /www/software/elasticsearch
<span class="token comment"># 拉取文件</span>
<span class="token function">git</span> clone git://github.com/mobz/elasticsearch-head.git
<span class="token comment"># 安装依赖</span>
<span class="token builtin class-name">cd</span> elasticsearch-head
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>
<p>修改默认端口号</p>
<ul>
<li>
<p>访问es-head端口号</p>
<p>打开文件  <code>elasticsearch-head/Gruntfile.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">connect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9100</span><span class="token punctuation">,</span> <span class="token comment">//默认端口9100 修改自己的</span>
					<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'.'</span><span class="token punctuation">,</span>
					<span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>修改es-head插件访问es的端口号</p>
<p>打开<code>elasticsearch-head/_site/app.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>base_uri <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>base_uri <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prefs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"app-base_uri"</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"http://localhost:9200"</span><span class="token punctuation">;</span> 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>修改es配置文件 <code>config/elasticsearch.yml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>//末尾添加 处理跨域和运行
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">"*"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>保存后，需要重新启动es。才可生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./bin/elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
<p>修改完后，重启es-head即可生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="访问head插件地址" tabindex="-1"><a class="header-anchor" href="#访问head插件地址" aria-hidden="true">#</a> 访问Head插件地址</h3>
<p>打开浏览器访问</p>
<p>http://localhost:8834</p>
<p>或者 http://外网ip:8834</p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224235041391.png" alt="image-20211224235041391"></p>
<p>如果集群健康值，不为：红色或者灰色就OK了</p>
<p>如果你没有npm环境，就需要安装喽~</p>
<h2 id="npm篇" tabindex="-1"><a class="header-anchor" href="#npm篇" aria-hidden="true">#</a> npm篇</h2>
<h3 id="安装npm" tabindex="-1"><a class="header-anchor" href="#安装npm" aria-hidden="true">#</a> 安装npm</h3>
<p>我直接使用yum安装，很方便很粗暴</p>
<ul>
<li>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> --silent --location https://rpm.nodesource.com/setup_10.x <span class="token operator">|</span> <span class="token function">bash</span> -

yum <span class="token function">install</span> -y nodejs

<span class="token comment">## 设置淘宝镜像，速度快</span>
<span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>https://registry.npm.taobao.org

<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># 安装完成，查看版本号</span>
<span class="token function">npm</span> -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>npm 升级</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装npm升级工具</span>
<span class="token function">npm</span> <span class="token function">install</span> -g n
 
<span class="token comment"># 安装最近的稳定版本</span>
n stable
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这样就OK了</p>
</li>
</ul>
<p>如果你需要把es-head插件一直在后台运行，那可以借助<code>nohup</code>、<code>screen</code>这样工具，防止断开ssh后，进程被杀死。</p>
<p>也可以使用<code>pm2</code>进程管理器，保持进程一直活着。</p>
<h2 id="进程管理篇" tabindex="-1"><a class="header-anchor" href="#进程管理篇" aria-hidden="true">#</a> 进程管理篇</h2>
<h3 id="安装pm2" tabindex="-1"><a class="header-anchor" href="#安装pm2" aria-hidden="true">#</a> 安装pm2</h3>
<ul>
<li>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g pm2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 启动一个进程并把它命名为 es-head</span>
pm2 start <span class="token function">npm</span> --name es-head -- start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>其他运行方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pm2 start app.js -i max  <span class="token comment"># 根据有效CPU数目启动最大进程数目</span>
pm2 start app.js -i <span class="token number">3</span>      <span class="token comment"># 启动3个进程</span>
pm2 start app.js -x        <span class="token comment">#用fork模式启动 app.js 而不是使用 cluster</span>
pm2 start app.js -x -- -a <span class="token number">23</span>   <span class="token comment"># 用fork模式启动 app.js 并且传递参数 (-a 23)</span>
pm2 start app.js --name serverone  <span class="token comment"># 启动一个进程并把它命名为 serverone</span>
pm2 stop serverone       <span class="token comment"># 停止 serverone 进程</span>
pm2 start app.json        <span class="token comment"># 启动进程, 在 app.json里设置选项</span>
pm2 start app.js -i max -- -a <span class="token number">23</span>                   <span class="token comment">#在--之后给 app.js 传递参数</span>
pm2 start app.js -i max -e err.log -o out.log  <span class="token comment"># 启动 并 生成一个配置文件，你也可以执行用其他语言编写的app  ( fork 模式):</span>
pm2 start my-bash-script.sh    -x --interpreter <span class="token function">bash</span>
pm2 start my-python-script.py -x --interpreter python

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>使用命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 -g     <span class="token comment"># 命令行安装 pm2 </span>
pm2 start app.js -i <span class="token number">4</span> <span class="token comment">#后台运行pm2，启动4个app.js </span>
                              <span class="token comment"># 也可以把'max' 参数传递给 start</span>
                              <span class="token comment"># 正确的进程数目依赖于Cpu的核心数目</span>
pm2 start app.js --name my-api <span class="token comment"># 命名进程</span>
pm2 list               <span class="token comment"># 显示所有进程状态</span>
pm2 monit              <span class="token comment"># 监视所有进程</span>
pm2 logs               <span class="token comment">#  显示所有进程日志</span>
pm2 stop all           <span class="token comment"># 停止所有进程</span>
pm2 restart all        <span class="token comment"># 重启所有进程</span>
pm2 reload all         <span class="token comment"># 0秒停机重载进程 (用于 NETWORKED 进程)</span>
pm2 stop <span class="token number">0</span>             <span class="token comment"># 停止指定的进程</span>
pm2 restart <span class="token number">0</span>          <span class="token comment"># 重启指定的进程</span>
pm2 startup            <span class="token comment"># 产生 init 脚本 保持进程活着</span>
pm2 web                <span class="token comment"># 运行健壮的 computer API endpoint (http://localhost:9615)</span>
pm2 delete <span class="token number">0</span>           <span class="token comment"># 杀死指定的进程</span>
pm2 delete all         <span class="token comment"># 杀死全部进程</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></blockquote>
</li>
</ul>
<h2 id="kibana篇" tabindex="-1"><a class="header-anchor" href="#kibana篇" aria-hidden="true">#</a> kibana篇</h2>
<p>Kibana是世界上最受欢迎的开源日志分析平台ELK Stack中的“K”，它为用户提供了一个工具，用于在存储于Elasticsearch集群中的日志数据进行检索，可视化和构建仪表板。</p>
<h3 id="安装kibana" tabindex="-1"><a class="header-anchor" href="#安装kibana" aria-hidden="true">#</a> 安装kibana</h3>
<p>先下载</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://xxxxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果你想体验极速下载，还是一样去华为镜像站下载。</p>
<p>然后解压</p>
<h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> kibana/config
<span class="token function">vim</span> kibana.yml
<span class="token comment"># 需要修改的配置项</span>
<span class="token comment"># kibana服务端口</span>
server.port:5601
<span class="token comment"># 如果你想公网访问，需做以下配置</span>
server.host: <span class="token string">"0.0.0.0"</span>
<span class="token comment"># elasticsearch访问端口</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">"http://localhost:8833"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>我在安装的时候，报了以下错误。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Error registering Kibana Privileges with Elasticsearch for kibana-.kibana
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>爬了一些帖子，也没有找到头绪。只是让关闭kibana的xpack。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 继续在kibana.yml中，添加如下配置。</span>
<span class="token comment"># 禁用X-Pack图形功能</span>
<span class="token key atrule">xpack.graph.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用X-Pack机器学习功能</span>
<span class="token key atrule">xpack.ml.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用X-Pack监视功能</span>
<span class="token key atrule">xpack.monitoring.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用X-Pack报告功能</span>
<span class="token key atrule">xpack.reporting.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用X-Pack安全功能</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用X-Pack观察器功能</span>
<span class="token key atrule">xpack.watcher.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="启动kibana" tabindex="-1"><a class="header-anchor" href="#启动kibana" aria-hidden="true">#</a> 启动kibana</h3>
<p>切换到<code>kibana/bin目录</code>，启动kibana。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kibana
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>看到控制台输出如下，就OK了。</p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224235109988.png" alt="image-20211224235109988"></p>
<p>使用浏览器访问http://外网ip:5601，</p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224235133032.png" alt="image-20211224235133032"></p>
<h3 id="汉化kibana" tabindex="-1"><a class="header-anchor" href="#汉化kibana" aria-hidden="true">#</a> 汉化kibana</h3>
<p>kibana 一直是 日志分析 中得力的助手，<code>kibana 7.x</code> 中官方加入了中文的选项。</p>
<p>只需要在配置文件 <code>kibana.yml</code> 中加入</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">i18n.locale</span><span class="token punctuation">:</span> <span class="token string">"zh-CN"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>就可以了。</p>
<p>不得不说，对于我这英语菜的人来说，简直是福音。</p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224235152962.png" alt="image-20211224235152962"></p>
<h3 id="关闭kibana" tabindex="-1"><a class="header-anchor" href="#关闭kibana" aria-hidden="true">#</a> 关闭kibana</h3>
<p>使用 <code>netstat -tunlp|grep 5601</code> 就可以查到进程id 了。</p>
<p>然后使用<code>kill</code>关闭即可。</p>
<h2 id="logstash篇" tabindex="-1"><a class="header-anchor" href="#logstash篇" aria-hidden="true">#</a> Logstash篇</h2>
<p><code>Logstash</code>是一个开源的服务器端数据处理管道，可以同时从多个数据源获取数据，并对其进行转换，然后将其发送到你最喜欢的“存储”。</p>
<p>下载这里，我就不说了，同上。</p>
<p>先准备好你的数据集，然后把数据集放到logstash目录下的<code>logstash-datas</code>中。如果没有<code>logstash-datas</code>文件夹，可以创建后再放入。</p>
<p>logstash不那么可视化，用起来感觉有点不爽，需要自己编写操作数据的脚本...</p>
<p>我给大家提供一个很基础的脚本，脚本中的内容需要根据你自己的目录修改一下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> logstash.conf
<span class="token comment"># 输入的内容</span>
input <span class="token punctuation">{</span>
  <span class="token function">file</span> <span class="token punctuation">{</span>
    <span class="token comment"># 数据集</span>
    path <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"/home/xiaowen/logstash-7.4.2/logstash-datas/movies.csv"</span>
    start_position <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"beginning"</span>
    <span class="token comment"># 数据集导入日志存储地址</span>
    sincedb_path <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"/home/xiaowen/logstash-7.4.2/logstash-datas/db_path.log"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>然后调用logstash，开始导入数据集到<code>es</code>中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./logstash -f <span class="token punctuation">..</span>/config/logstash.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>回车后，我们会看到屏幕哗哗哗的输出很多json数据集。如果数据集比较庞大，我们需要稍等一会。如果看到屏幕不再输出字符了，我们使用<code>ctrl+c</code>结束脚本。</p>
<p>如果导入的数据非常多，我们又担心<code>ssh</code>会断开，可以先<code>screen</code>一个会话，然后导入数据。</p>
<p>导入完成后，可以用<code>es-head</code>查看导入情况。</p>
<p><img src="Linux下安装部署ElasticSearch.assets/image-20211224235212345.png" alt="image-20211224235212345"></p>
<p>我们可以通过<code>kibana</code>去对es中的数据进行增删改查操作。</p>
<p>我最近有个项目是基于<code>thinkphp</code>的，后续我会总结一波关于<code>ElasticSearch在thinkphp5中的使用</code>。以及<code>MySQL数据以全量和增量方式，同步到ES搜索引擎中</code>。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>如果你搭建成功后，无法在外网访问。可以通过<code>放行端口</code>的方式解决。</p>
<p><strong>以下主机商必看（开端口教程，不开不能用）：</strong></p>
<p>腾讯云：https://www.bt.cn/bbs/thread-1229-1-1.html</p>
<p>阿里云：https://www.bt.cn/bbs/thread-2897-1-1.html</p>
<p>华为云：https://www.bt.cn/bbs/thread-3923-1-1.html</p>
<p>照猫画虎，照葫芦画瓢，你用什么端口，就放行什么端口，就OK了。</p>
</template>
