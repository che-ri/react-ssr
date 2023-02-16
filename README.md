# Next.js 없이 React 만으로 SSR 하기

## 실행 방법

각 폴더를 기준으로 터미널에서 아래와 같이 입력합니다. ex) renderToString/

```
yarn
yarn build
yarn ssr
```

http://localhost:8000/ 에 들어가면 결과물을 볼 수 있습니다.

<br/>

## SSR 구현방법

React 공식문서 상 총 4가지의 방법이 있으며, 구현했던 방법은 ✔️ 해두었습니다.

- [x] renderToString
- [x] renderToStaticMarkup
- [ ] renderToReadableStream
- [ ] renderToStaticNodeStream

<br/>

## 이슈

> data-reactroot

- [React Docs](https://ko.reactjs.org/docs/react-dom-server.html#gatsby-focus-wrapper)에서는 renderToStaticMarkup시 data-reactroot가 생기지 않는다고 되어있는데, 현재 react에서 data-reactroot 자체가 생성되지 않는 것 같다. 이 부분은 docs 최신화 이슈로 보인다.
- [data-reactroot' attribute missing in 16.0.0](https://github.com/facebook/react/issues/10971)
