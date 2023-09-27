import {resolvers, td} from "./users";
import { makeExecutableSchema } from "@graphql-tools/schema";

export default makeExecutableSchema({
    typeDefs:[td],
    resolvers:[resolvers]
});