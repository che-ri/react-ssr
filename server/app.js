import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server";
import App from "../src/App";

const app = express();
const PORT = 8000;

app.use("^/$", (req, res) => {
  const ReactDom = ReactDomServer.renderToString(<App />);

  // App.js 내용이 추가된 html을 return
  fs.readFile(path.resolve("build/index.html"), "utf-8", (error, data) => {
    if (error) {
      return res.status(500).send("index.html 파일을 찾을 수 없습니다.");
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDom}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ::: http://localhost:${PORT}/`);
});
