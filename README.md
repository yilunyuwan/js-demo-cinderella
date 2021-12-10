# 部署方式
每次改完代码，必须运行以下代码，才能正确请求 JS 和 CSS
```js
yarn global add parcel@1.9.7
parcel build src/index.html --no-minify --public-url .
```