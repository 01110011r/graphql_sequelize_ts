import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { newSequelize } from './config';
import schema from "./modules/index";
import "dotenv/config";

const main=async()=>{
const server=new ApolloServer({
schema
})
try {
    
    await newSequelize.authenticate();
    console.log('Connection has been established successfully.');

  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
const port : string | number | undefined=process.env.PORT || 7000;
const {url}=await startStandaloneServer(server,{
  listen:{port:+port}
});


console.log(`🚀  Server ready at: ${url}`);
};

main();