import fs from "fs";
import path from "path"
import { resolvers } from "./resolvers";

const td=fs.readFileSync(path.join(process.cwd(), "src", "modules", "users", "schema.gql"), "utf-8");

export {td, resolvers};