import { Context, Request } from "koa";
import { getAllDataLoaders } from "./graphql/loaderRegister";
import { GraphQLContext } from "./graphql/types";
import { IUser } from "./types/types";

type ContextVars = {
  user?: IUser;
  req: Request;
  context: Context;
};

export const getContext = (ctx: ContextVars): GraphQLContext => {
  const dataloaders = getAllDataLoaders();

  return {
    req: ctx.req,
    dataloaders,
    user: ctx.user,
    context: ctx.context,
  } as GraphQLContext;
};
