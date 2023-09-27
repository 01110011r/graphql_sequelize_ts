"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const schema_1 = require("@graphql-tools/schema");
exports.default = (0, schema_1.makeExecutableSchema)({
    typeDefs: [users_1.td],
    resolvers: [users_1.resolvers]
});
