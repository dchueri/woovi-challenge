import koaPlayground from 'graphql-playground-middleware-koa';
import 'isomorphic-fetch';
import cors from 'kcors';
import Koa, { Context } from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';

import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL
} from 'graphql-helix';

import { getUser } from './auth';
import { getContext } from './getContext';
import { schema } from './schema';

const router = new Router();

const app = new Koa();

app.use(bodyParser());

app.on('error', err => {
  // eslint-disable-next-line
  console.log('app error: ', err);
});

app.use(logger());
app.use(cors());

export const setCookie =
  (context: Context) => (cookieName: string, token: string) => {
    context.cookies.set(cookieName, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV != 'development',
      sameSite: 'lax',
      path: '/',
    });
  };

router.all(
  '/graphiql',
  koaPlayground({
    endpoint: '/graphql',
    subscriptionEndpoint: '/subscriptions',
    // subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`
  }),
);

router.all('/graphql', async (ctx: any) => {
  const { user } = await getUser(ctx.header.authorization);
  const request = {
    body: ctx.request.body,
    headers: ctx.req.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  };

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL({});
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
      contextFactory: () => {
        return getContext({
          user,
          req: request,
          setCookie: setCookie(ctx),
        });
      },
    });

    ctx.respond = false;
    sendResult(result, ctx.res);
  }
});

app.use(router.routes()).use(router.allowedMethods());

export default app;
