import fs from "fs";
import path from "path";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import App from "../../renderToPipeableStream/src/App";

const app = express();
const PORT = 8000;

const html = fs.readFileSync(path.resolve(__dirname, "../build/index.html"));

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use((req, res) => {
  res.write(html);

  const stream = ReactDomServer.renderToPipeableStream(<App />, {
    onShellReady() {
      stream.pipe(res);
    },
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ::: http://localhost:${PORT}/`);
});
