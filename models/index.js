import { Sequelize } from "sequelize";
import  User  from "./userModel.js"
import dotenv from "dotenv";

dotenv.config();


const sequelize = new Sequelize(
  process.env.DBNAME || "cronjobdb",
  "root",
  process.env.PASSWORD,
  {
    dialect: "mysql",
  }
);

const models = {
    user: User.init(sequelize)
}

const db = {
    ...models,
    sequelize,

}

export default db;