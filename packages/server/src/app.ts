import cors from '@koa/cors';
import Router from '@koa/router';
import koaPlayground from 'graphql-playground-middleware-koa';
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import { graphqlHTTP } from 'koa-graphql';
import { schema } from './schema';

const app = new Koa();
const router = new Router();

const graphQlServer = graphqlHTTP({
  schema: schema,
  graphiql: true,
});

router.all(
  '/graphiql',
  koaPlayground({
    endpoint: '/graphql',
    subscriptionEndpoint: '/subscriptions',
  }),
);

router.all('/', graphQlServer);

app.use(cors());
app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());

export default app;
