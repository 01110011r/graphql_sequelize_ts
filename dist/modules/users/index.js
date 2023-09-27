"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.td = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const resolvers_1 = require("./resolvers");
Object.defineProperty(exports, "resolvers", { enumerable: true, get: function () { return resolvers_1.resolvers; } });
const td = fs_1.default.readFileSync(path_1.default.join(process.cwd(), "src", "modules", "users", "schema.gql"), "utf-8");
exports.td = td;
