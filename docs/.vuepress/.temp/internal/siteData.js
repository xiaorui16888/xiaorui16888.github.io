export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Mybells's Log",
  "description": "Mybells's Log",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://github.githubassets.com/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
