import express from "express";
import connectDB from "./config/database";
import * as lc146 from "./controllers/lc146";
import * as lc1011 from "./controllers/lc1011";
import * as lc621 from "./controllers/lc621";

const app = express();
const port = 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/lc146ts", lc146.lc146ts);

app.get("/lc146js", lc146.lc146js);

app.get("/lc1011ts", lc1011.lc1011ts);

app.get("/lc621ts", lc621.lc621ts);
app.get("/lc621ts1", lc621.lc621ts1);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
