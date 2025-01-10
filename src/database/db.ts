import { Sequelize } from "sequelize-typescript";
import config from "../../config/config";

const dbConfig = config.getDbConfig(config.env as "development" | "test" | "production");

const sequelize = new Sequelize({
  database: dbConfig.database,
  username: dbConfig.username,
  password: String(dbConfig.password),
  port: Number(dbConfig.port),
  host: dbConfig.host,
  dialect: "postgres",
  models: [__dirname + "/../models"],
});

export default sequelize;
