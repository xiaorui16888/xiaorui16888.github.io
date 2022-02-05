export const themeData = {
  "nav": [
    {
      "text": "引擎",
      "link": "/engine/"
    },
    {
      "text": "PHP",
      "link": "/php/"
    },
    {
      "text": "机器人",
      "link": "/robot/"
    }
  ],
  "sidebar": {
    "/engine/": [
      {
        "title": "ELK",
        "children": [
          "ELK/ElasticSearch+Kibana设置用户名密码登陆.md",
          "ELK/Linux下安装部署ElasticSearch、kibana、logstash.md",
          "ELK/logstash之mysql全量及增量同步数据到ElasticSearch.md",
          "ELK/ThinkPHP3项目构建与ES的使用.md"
        ],
        "collapsable": true
      }
    ],
    "/php/": [],
    "/robot/": []
  },
  "repo": "https://github.com/xiaorui16888",
  "docsDir": "docs",
  "docsBranch": "master",
  "editLinks": true,
  "sidebarDepth": 1,
  "lastUpdated": "Last Updated",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
