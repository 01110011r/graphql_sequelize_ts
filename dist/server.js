"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const config_1 = require("./config");
const index_1 = __importDefault(require("./modules/index"));
require("dotenv/config");
const main = async () => {
    const server = new server_1.ApolloServer({
        schema: index_1.default
    });
    try {
        await config_1.newSequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    const port = process.env.PORT || 7000;
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: +port }
    });
    console.log(`🚀  Server ready at: ${url}`);
};
main();
