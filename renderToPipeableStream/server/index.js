// 서버 스크립트 babel 설정!
require("ignore-styles");
require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./app");
