import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server";
import App from "../src/App";

const app = express();
const PORT = 8000;

app.use("^/$", (req, res) => {
  let isError = false;

  const stream = ReactDomServer.renderToPipeableStream(<App />, {
    onAllReady() {
      console.log("onAllReady");
      isError = false;
      res.statusCode = isError ? 500 : 200;
      res.setHeader("content-type", "text/html;charset=utf-8");
      stream.pipe(res);
    },
    onError(error) {
      console.error(error);
      isError = true;
    },
  });

  setTimeout(() => stream.abort(), 10000);
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ::: http://localhost:${PORT}/`);
});
