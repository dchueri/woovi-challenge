/* import cors from '@koa/cors';
import 'dotenv/config';
import Koa from 'koa';
import { graphqlHTTP } from 'koa-graphql';
import mount from 'koa-mount';
import db from './config/database';
import { schema } from './schema';

db.on('error', console.log.bind(console, 'Database connection failed'));
db.once('open', () => {
  console.log('Database connected successfully');
});

const port = process.env.PORT;

const app = new Koa();

app.use(cors());

app.use(
  mount(
    '/',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  ),
);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
 */

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
