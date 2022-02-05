import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-22522d73","/engine/ELK/ElasticSearch+Kibana%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81%E7%99%BB%E9%99%86.html",{"title":"ElasticSearch+Kibana设置用户名密码登陆"},["/engine/ELK/ElasticSearch+Kibana设置用户名密码登陆.html","/engine/ELK/ElasticSearch+Kibana%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81%E7%99%BB%E9%99%86","/engine/ELK/ElasticSearch+Kibana设置用户名密码登陆.md","/engine/ELK/ElasticSearch+Kibana%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81%E7%99%BB%E9%99%86.md"]],
  ["v-ad6d6522","/engine/ELK/Linux%E4%B8%8B%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2ElasticSearch%E3%80%81kibana%E3%80%81logstash.html",{"title":"Linux下安装部署ElasticSearch"},["/engine/ELK/Linux下安装部署ElasticSearch、kibana、logstash.html","/engine/ELK/Linux%E4%B8%8B%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2ElasticSearch%E3%80%81kibana%E3%80%81logstash","/engine/ELK/Linux下安装部署ElasticSearch、kibana、logstash.md","/engine/ELK/Linux%E4%B8%8B%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2ElasticSearch%E3%80%81kibana%E3%80%81logstash.md"]],
  ["v-be055f52","/engine/ELK/logstash%E4%B9%8Bmysql%E5%85%A8%E9%87%8F%E5%8F%8A%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AE%E5%88%B0ElasticSearch.html",{"title":"logstash之mysql全量及增量同步数据到ElasticSearch"},["/engine/ELK/logstash之mysql全量及增量同步数据到ElasticSearch.html","/engine/ELK/logstash%E4%B9%8Bmysql%E5%85%A8%E9%87%8F%E5%8F%8A%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AE%E5%88%B0ElasticSearch","/engine/ELK/logstash之mysql全量及增量同步数据到ElasticSearch.md","/engine/ELK/logstash%E4%B9%8Bmysql%E5%85%A8%E9%87%8F%E5%8F%8A%E5%A2%9E%E9%87%8F%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AE%E5%88%B0ElasticSearch.md"]],
  ["v-1230bcbc","/engine/ELK/ThinkPHP3%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA%E4%B8%8EES%E7%9A%84%E4%BD%BF%E7%94%A8.html",{"title":"ThinkPHP3项目构建与ES的使用"},["/engine/ELK/ThinkPHP3项目构建与ES的使用.html","/engine/ELK/ThinkPHP3%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA%E4%B8%8EES%E7%9A%84%E4%BD%BF%E7%94%A8","/engine/ELK/ThinkPHP3项目构建与ES的使用.md","/engine/ELK/ThinkPHP3%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA%E4%B8%8EES%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
