export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/img/jqb.png",
    "heroText": "发财豹's Blog",
    "tagline": "喜欢折腾研究、又什么都学不会",
    "features": [
      {
        "title": "长风破浪会有时，直挂云帆济沧海",
        "details": "路漫漫其修远兮，吾将上下而求索，是多么寂寞的人儿~"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1644087011000,
    "contributors": [
      {
        "name": "xiaorui16888",
        "email": "87920151@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
