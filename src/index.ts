import express, { Express } from "express";
import cors from "cors";

// **** Uncomment This Imoprt To Get Database Connection ****
// import sequelize from "./database/db";
import config from "../config/config";

(async () => {
  // **** Uncomment This Line To Sync With Database ****
  // await sequelize.sync();
  console.log("****** Environment:[", config.env, "] ***********");
})();
const port = config.port;
export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("API is working!!!");
});

// **** Uncomment this Function To Authenticate With Database Before Running The Application ****

// sequelize.authenticate().then(() => {
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });

// **** Remove this app.listen method after uncommenting sequelize.authenticate method ****
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
