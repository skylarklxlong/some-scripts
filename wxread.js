//let wxreadData = 'ewogICJzdGFydFRpbWUiOiA5OTE2MDM5NDAxMzIsCiAgImV4cGlyZWRUaW1lIjogOTkxNjA0MjQ2Mzk5LAogICJleHBpcmVkIjogMCwKICAiaXNQYXlpbmciOiAwLAogICJwZXJtYW5lbnQiOiAwLAogICJkYXkiOiA5MSwKICAicmVtYWluVGltZSI6IDk5MzA2MTk2LAogICJwYXlpbmdSZW1haW5UaW1lIjogNiwKICAiaXNBdXRvUmVuZXdhYmxlIjogNiwKICAiaGlzdG9yeUF1dG9SZW5ld2FibGUiOiA2LAogICJhdXRvUmVuZXdhYmxlQ2hhbm5lbCI6IDYsCiAgImF1dG9SZW5ld2FibGVUaW1lIjogNiwKICAiYXV0b1JlbmV3YWJsZVByaWNlIjogOTkxOTAwLAogICJzYXZlZE1vbmV5IjogOTkyNzQzMywKICAidG90YWxGcmVlUmVhZERheSI6IDY2NjYsCiAgInJlbWFpbkNvdXBvbiI6IDY2NjYsCiAgInJlbWFpbkNvdW50IjogNjY2NiwKICAiaGludHNGb3JSZWNoYXJnZSI6IHsKICAgICJwcmVkaWN0ZWRTYXZlZE1vbmV5IjogOTkxMDMxNSwKICAgICJwcmVkaWN0ZWRDaGFwdGVyUHJpY2UiOiAxNSwKICAgICJwcmljZVBlck1vbnRoIjogOTk5MDAsCiAgICAic2VuZENvdXBvbnMiOiA2NjY2LAogICAgImJ1dHRvblRpdGxlIjogIuS7mOi0ueaXoOmZkOWNoTnlhYMv5pyIIMK3IOmZkOaXtueJueaDoCIsCiAgICAiYnV0dG9uU3VidGl0bGUiOiAi5L2g5q2j5Zyo5L2/55So5YWN6LS55peg6ZmQ5Y2hIMK3IOWNh+e6p+S7mOi0ueaXoOmZkOWNoeWNs+WPr+mYheivuyIKICB9LAogICJmcmVlQm9va0lkcyI6IFtdLAogICJ0aW1lc3RhbXAiOiAxNjAzOTQwMjAzLAogICJyYW5kb20iOiA4MzQxLAogICJzaWduYXR1cmUiOiAiNWQ3ZjZjOTI5MDg2YTRhOTU4ZWFkNjBjOWJkOTVmYWU2OTkxYWZlZjUxYzFkZTUwYTQxZTdjMjY0MWZkYWYzZiIKfQ==';
//wxreadData = new Base64().decode(wxreadData)

let wxreadData = {
  "startTime": 991603940132,
  "expiredTime": 991604246399,
  "expired": 0,
  "isPaying": 0,
  "permanent": 0,
  "day": 91,
  "remainTime": 99306196,
  "payingRemainTime": 6,
  "isAutoRenewable": 6,
  "historyAutoRenewable": 6,
  "autoRenewableChannel": 6,
  "autoRenewableTime": 6,
  "autoRenewablePrice": 991900,
  "savedMoney": 9927433,
  "totalFreeReadDay": 6666,
  "remainCoupon": 6666,
  "remainCount": 6666,
  "hintsForRecharge": {
    "predictedSavedMoney": 9910315,
    "predictedChapterPrice": 15,
    "pricePerMonth": 99900,
    "sendCoupons": 6666,
    "buttonTitle": "付费无限卡9元/月 · 限时特惠",
    "buttonSubtitle": "你正在使用免费无限卡 · 升级付费无限卡即可阅读"
  },
  "freeBookIds": [],
  "timestamp": 1603940203,
  "random": 8341,
  "signature": "5d7f6c929086a4a958ead60c9bd95fae6991afef51c1de50a41e7c2641fdaf3f"
}
let body = $response.body
body = JSON.stringify(wxreadData)
$done({ body })

