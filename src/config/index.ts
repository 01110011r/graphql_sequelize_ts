import { Sequelize } from "sequelize";
import "dotenv/config";
const passwd=process.env.DB_PASSWORD;
const newSequelize=new Sequelize(`postgres://gsrgvzax:${passwd}@tyke.db.elephantsql.com:5432/gsrgvzax`,{logging:false})


export {newSequelize}