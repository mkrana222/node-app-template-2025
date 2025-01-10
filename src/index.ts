import express, { Express } from "express";
import cors from "cors";

import sequelize from "./database/db";
import config from "../config/config";

(async () => {
  await sequelize.sync();
  console.log("****** Environment:[", config.env, "] ***********");
})();
const port = config.port;
export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("API is working fine");
});

sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
