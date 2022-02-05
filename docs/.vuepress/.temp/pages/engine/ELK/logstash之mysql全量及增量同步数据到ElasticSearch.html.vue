<template><h1 id="logstash之mysql全量及增量同步数据到elasticsearch" tabindex="-1"><a class="header-anchor" href="#logstash之mysql全量及增量同步数据到elasticsearch" aria-hidden="true">#</a> logstash之mysql全量及增量同步数据到ElasticSearch</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>我一般数据都是存在mysql的，但是mysql的全文检索性能，大家也都知道。数据量小还没啥事，一旦数据量上了几百万，几千万，分分钟给你卡死...</p>
<p>所以我都是把需要检索用到的数据，同步到es中。但是怎么同步呢？我之前提到过<code>logstash</code>。有人说，把mysql中的数据导出成csv同步到es，或者就excel直接扔到es中。这种方法我也去实践了一遍，结果经常有一些数据中含有特殊的一些字符，同步失败，而导致很多数据都没有成功同步上去。</p>
<p>那算了，这种方法我们就弃用了！</p>
<p><code>logstash</code>其实给我们提供了，mysql数据同步到es中。无需我们初始化一个demo，写一大堆代码，同步到es中。</p>
<p>说干就干！</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>
<p>es与logstash的版本保持一致，</p>
<p>下载jdbc-connector的jar包，<code>mysql-connector-java.jar</code></p>
<p><em>maven仓库下载</em>：https://mvnrepository.com/artifact/mysql/mysql-connector-java</p>
<p>下载完成后，解压到logstash/lib/jars/中。</p>
<h3 id="配置导入脚本" tabindex="-1"><a class="header-anchor" href="#配置导入脚本" aria-hidden="true">#</a> 配置导入脚本</h3>
<p>新建配置目录：sync-config，新建<code>jdbc.conf</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>input <span class="token punctuation">{</span>
    stdin <span class="token punctuation">{</span><span class="token punctuation">}</span>
    jdbc <span class="token punctuation">{</span>
   		<span class="token comment"># mysql 数据库链接</span>
        jdbc_connection_string =<span class="token punctuation">></span> "jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/cicada<span class="token punctuation">?</span>characterEncoding=utf8"
        <span class="token comment"># 用户名和密码</span>
        jdbc_user =<span class="token punctuation">></span> "root"
        jdbc_password =<span class="token punctuation">></span> "root123"
        <span class="token comment"># 驱动</span>
        jdbc_driver_library =<span class="token punctuation">></span> "./lib/jars/mysql<span class="token punctuation">-</span>connector<span class="token punctuation">-</span>java<span class="token punctuation">-</span>5.1.13.jar"
        <span class="token comment"># 驱动类名</span>
        jdbc_driver_class =<span class="token punctuation">></span> "com.mysql.jdbc.Driver"
        jdbc_paging_enabled =<span class="token punctuation">></span> "true"
        jdbc_page_size =<span class="token punctuation">></span> "50000"
        <span class="token comment"># 时区</span>
        jdbc_default_timezone =<span class="token punctuation">></span> "Asia/Shanghai"
        <span class="token comment"># 执行的sql文件路径和名称</span>
        statement_filepath =<span class="token punctuation">></span> "./sync<span class="token punctuation">-</span>config/user_sql.sql"
        <span class="token comment">#直接执行sql语句</span>
      	<span class="token comment"># statement =>"select * from employee"</span>
        <span class="token comment"># 设置监听间隔，各字段含义（由左至右）分、时、天、月、年，全部为*默认含义为每分钟都更新</span>
        schedule =<span class="token punctuation">></span> "* * * * <span class="token important">*"</span>
        <span class="token comment"># 索引类型</span>
        type =<span class="token punctuation">></span> "User"
        lowercase_column_names =<span class="token punctuation">></span> false
        <span class="token comment"># 是否记录最后一次运行内容</span>
        record_last_run =<span class="token punctuation">></span> true
        <span class="token comment"># 是否适用列元素</span>
        use_column_value =<span class="token punctuation">></span> true
        <span class="token comment"># 追踪的元素名，对应保存到es上面的字段名而不是数据库字段名</span>
        tracking_column =<span class="token punctuation">></span> "updateTime"
        <span class="token comment"># 默认为number，如果为日期必须声明为timestamp</span>
        tracking_column_type =<span class="token punctuation">></span> "timestamp"
        <span class="token comment"># 设置记录的路径</span>
        last_run_metadata_path =<span class="token punctuation">></span> "./sync<span class="token punctuation">-</span>config/user_last_time"
        clean_run =<span class="token punctuation">></span> false
    <span class="token punctuation">}</span>
    jdbc <span class="token punctuation">{</span>
        jdbc_connection_string =<span class="token punctuation">></span> "jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/cicada<span class="token punctuation">?</span>characterEncoding=utf8"
        jdbc_user =<span class="token punctuation">></span> "root"
        jdbc_password =<span class="token punctuation">></span> "root123"
        jdbc_driver_library =<span class="token punctuation">></span> "./lib/jars/mysql<span class="token punctuation">-</span>connector<span class="token punctuation">-</span>java<span class="token punctuation">-</span>5.1.13.jar"
        jdbc_driver_class =<span class="token punctuation">></span> "com.mysql.jdbc.Driver"
        jdbc_paging_enabled =<span class="token punctuation">></span> "true"
        jdbc_page_size =<span class="token punctuation">></span> "50000"
        jdbc_default_timezone =<span class="token punctuation">></span> "Asia/Shanghai"
        statement_filepath =<span class="token punctuation">></span> "./sync<span class="token punctuation">-</span>config/log_sql.sql"
        schedule =<span class="token punctuation">></span> "* * * * <span class="token important">*"</span>
        type =<span class="token punctuation">></span> "Log"
        lowercase_column_names =<span class="token punctuation">></span> false
        record_last_run =<span class="token punctuation">></span> true
        use_column_value =<span class="token punctuation">></span> true
        tracking_column =<span class="token punctuation">></span> "updateTime"
        tracking_column_type =<span class="token punctuation">></span> "timestamp"
        last_run_metadata_path =<span class="token punctuation">></span> "./sync<span class="token punctuation">-</span>config/log_last_time"
        clean_run =<span class="token punctuation">></span> false
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>
    json <span class="token punctuation">{</span>
        source =<span class="token punctuation">></span> "message"
        remove_field =<span class="token punctuation">></span> <span class="token punctuation">[</span><span class="token string">"message"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
    if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == "User" <span class="token punctuation">{</span>
        elasticsearch <span class="token punctuation">{</span>
            hosts =<span class="token punctuation">></span> <span class="token punctuation">[</span><span class="token string">"127.0.0.1:9200"</span><span class="token punctuation">]</span>
            <span class="token comment"># 索引名称</span>
            index =<span class="token punctuation">></span> "cicada_user_search"
            <span class="token comment"># type名称</span>
            document_type =<span class="token punctuation">></span> "user_search_index"
             <span class="token comment"># 文档id，inquiryId为sql文件中查询出的字段名</span>
            document_id =<span class="token punctuation">></span> "%<span class="token punctuation">{</span>id<span class="token punctuation">}</span>"
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == "Log" <span class="token punctuation">{</span>
        elasticsearch <span class="token punctuation">{</span>
            hosts =<span class="token punctuation">></span> <span class="token punctuation">[</span><span class="token string">"127.0.0.1:9200"</span><span class="token punctuation">]</span>
            index =<span class="token punctuation">></span> "cicada_log_search"
            document_type =<span class="token punctuation">></span> "log_search_index"
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><h3 id="sql文件" tabindex="-1"><a class="header-anchor" href="#sql文件" aria-hidden="true">#</a> SQL文件</h3>
<ul>
<li>
<p>user_sql.sql</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>
	id<span class="token punctuation">,</span>
	user_name userName<span class="token punctuation">,</span>
	user_phone userPhone<span class="token punctuation">,</span>
	create_time createTime<span class="token punctuation">,</span>
	update_time updateTime
<span class="token keyword">FROM</span> c_user
<span class="token keyword">WHERE</span> update_time <span class="token operator">></span> :sql_last_value
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>log_sql.sql</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT
	id,
	param_value paramValue,
	request_ip requestIp,
	create_time createTime,
	update_time updateTime
FROM c_log
WHERE update_time &gt; :sql_last_value
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
<h3 id="配置参数说明" tabindex="-1"><a class="header-anchor" href="#配置参数说明" aria-hidden="true">#</a> 配置参数说明</h3>
<ul>
<li>
<p>input参数</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>statement_filepath：读取SQL语句位置
schedule ：这里配置每分钟执行一次
type ：类型，写入ES的标识
lowercase_column_names ：字段是否转小写
record_last_run ：记录上次执行时间
use_column_value ：使用列的值
tracking_column ：根据写入ES的updateTime字段区分增量数据
tracking_column_type ：区分的字段类型
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>output参数</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>hosts ：ES服务地址
index ：Index名称，类比理解数据库名称
document_type ：Type名称，类比理解表名称
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h3 id="启动导入脚本" tabindex="-1"><a class="header-anchor" href="#启动导入脚本" aria-hidden="true">#</a> 启动导入脚本</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>logstash -f <span class="token string">"./sync-config/jdbc.conf"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="logstash7-x同步mysql数据到es报错" tabindex="-1"><a class="header-anchor" href="#logstash7-x同步mysql数据到es报错" aria-hidden="true">#</a> logstash7.x同步mysql数据到es报错</h3>
<p>logstash能正常启动但是同步数据到es时报错</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>com.mysql.jdbc.Driver not loaded. Are you sure you’ve included the correct jdbc driver in :jdbc_driver_library?
Unable to find driver class via URLClassLoader in given driver jars: com.mysql.jdbc.Driver and com.mysql.jdbc.Driver
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>解决办法</strong>：将mysql的驱动jar包拷贝到logstash目录\logstash-core\lib\jars 下</p>
<p>如果这种办法没有解决你的问题，你可以看看这篇帖子，我没试过，因为上面这种方法解决了我的问题。</p>
<p>https://www.jianshu.com/p/0e893f29ee05</p>
<p><em>LogStash 7.x com.mysql.cj.jdbc.Driver not loaded</em></p>
<h3 id="mysql资源下载" tabindex="-1"><a class="header-anchor" href="#mysql资源下载" aria-hidden="true">#</a> MYSQL资源下载</h3>
<p>https://downloads.mysql.com/archives/</p>
<h3 id="logstash-配置定时" tabindex="-1"><a class="header-anchor" href="#logstash-配置定时" aria-hidden="true">#</a> Logstash 配置定时</h3>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 设置监听时段 个字段含义(从左到右)，分,时,天,月,年, </span>
<span class="token comment"># 全部默认为*号默认为每分钟更新</span>
<span class="token comment">#每分钟执行一次</span>
schedule =<span class="token punctuation">></span> "* * * * * "
<span class="token comment"># 每间隔一分钟执行一次</span>
schedule =<span class="token punctuation">></span> "<span class="token important">*/1</span> * * * <span class="token important">*"</span>
<span class="token comment">#每小时执行一次</span>
schedule =<span class="token punctuation">></span>"* <span class="token important">*/1</span> * * <span class="token important">*"</span>
<span class="token comment">#某个时间点执行</span>
schedule =<span class="token punctuation">></span>"* 1 * * <span class="token important">*"</span>    <span class="token comment"># 每天上午1点执行</span>
<span class="token comment">#多个时间点执行</span>
schedule =<span class="token punctuation">></span>"* 1<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span>5 * * <span class="token important">*"</span>    <span class="token comment"># 每天上午1,3,5点执行</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="es-mysql-logstash-软删除的实现" tabindex="-1"><a class="header-anchor" href="#es-mysql-logstash-软删除的实现" aria-hidden="true">#</a> es-mysql-logstash 软删除的实现</h3>
<p>如果一个文档从 MySQL 中删除，该操作并不会同步到 ElasticSearch 中。列举几个我们可以考虑的方案。</p>
<p>MySQL 中的记录可通过包含 is_deleted 字段以表明该条记录是否有效。一旦发生更新，is_deleted 也会同步更新到 ElasticSearch 中。如果通过这种方式，在执行 MySQL 或 ElasticSearch 查询时，重写查询语句来过滤掉 is_deleted 为 true 的记录。同时，可以通过一些后台进程将 MySQL 和 ElasticSearch 中的这些文档删除。</p>
<p>另一个可选方案是，应用系统负责 MySQL 和 ElasticSearch 中数据的删除，即应用系统在删除 MySQL 中数据，同时负责也删除 ElasticSearch 中相应的文档。这个就会到程序层面的开发工作。</p>
<p>再谈一种方案，脱离 logstash 来谈这个问题。</p>
<p>可以通过 mysql 的 binlog 实现数据库中的得事件(增加、更新、删除)同步，任何事件实时同步到 Elasticsearch。这个相对较复杂了。但好在已经有了开源组件可以用，即阿里的 canal。不过，我个人认为，项目不大，且实时性要求不高，还是用 logstash 比较简单省心。canal 在单表时，还比较简单，如果涉及多表，也不方便，根据需求会有不定量的的开发工作。</p>
<p>最后，要依据场景选择合适的方案。把它们进行适时地结合，实时性要求高，用 canal 实现，一般场景，logstash 即可，即使是有题主提的删除，也不建议使用 canal，而是用前面提到的几个思路。有能力的话，其实可以针对这两种方案设计一个数据同步框架，以后只要加个配置即可完成。</p>
<p><strong>这里的方案，是我在网上看到的，最近不着急实现这个功能，有空了再实现一下。</strong></p>
<h3 id="联表的sql文件" tabindex="-1"><a class="header-anchor" href="#联表的sql文件" aria-hidden="true">#</a> 联表的sql文件</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT `a`.`id`,`a`.`catid`,`a`.`catids`,`a`.`title`,`f`.`name`, `a`.`status`,a.updated_at FROM `c_product` `a` LEFT JOIN `c_company` `f` ON f.id = a.cid WHERE a.updated_at &gt; :sql_last_value order by a.updated_at
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
