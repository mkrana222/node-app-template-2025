import express, { Request, Response, Express } from "express";
import sequelize from "./database/db";
import config from "../config/config";

(async () => {
  await sequelize.sync();
  console.log("****** Environment:[", config.env, "] ***********");
})();
const port = config.port;
const app: Express = express();

app.get("/", (req, res) => {
  res.send("API is working fine");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
