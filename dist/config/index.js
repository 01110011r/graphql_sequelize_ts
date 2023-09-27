"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSequelize = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const passwd = process.env.DB_PASSWORD;
const newSequelize = new sequelize_1.Sequelize(`postgres://gsrgvzax:${passwd}@tyke.db.elephantsql.com:5432/gsrgvzax`, { logging: false });
exports.newSequelize = newSequelize;
