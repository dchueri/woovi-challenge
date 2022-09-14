import { ApolloServer } from "apollo-server";
import * as dotenv from 'dotenv';
import db from "./config/database";
import { schema } from "./graphql/schema";

dotenv.config()
db.on("error", console.log.bind(console, "Database connection failed"));
db.once("open", () => {
  console.log("Database connected successfully");
});

const server = new ApolloServer({
  schema,
});

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
