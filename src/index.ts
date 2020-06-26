import express from "express";

import * as lc146 from "./controllers/lc146";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/lc146ts", lc146.lc146ts);

app.get("/lc146js", lc146.lc146js);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
