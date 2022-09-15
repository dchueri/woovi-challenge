import * as cors from "@koa/cors";
import "dotenv/config";
import Koa from "koa";
import { graphqlHTTP } from "koa-graphql";
import * as mount from "koa-mount";
import db from "./config/database";
import { schema } from "./graphql/schema";

db.on("error", console.log.bind(console, "Database connection failed"));
db.once("open", () => {
  console.log("Database connected successfully");
});

const port = process.env.PORT;

const app = new Koa();

app.use(cors());

app.use(
  mount(
    "/",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  )
);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
