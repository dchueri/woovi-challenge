import { verify } from "jsonwebtoken";
import { Context, Request } from "koa";
import { getAllDataLoaders } from "./graphql/loaderRegister";
import { GraphQLContext } from "./graphql/types";
import UserModel from "./modules/user/UserModel";
import IUserContext from "./types/types";

type ContextVars = {
  user?: IUserContext;
  req: Request;
  context: Context;
};

export const getContext = async (ctx: ContextVars): Promise<GraphQLContext> => {
  const dataloaders = getAllDataLoaders();
  const authorization = ctx.req?.headers.authorization;
  if (!authorization) {
    return {
      req: ctx.req,
      dataloaders,
      user: null,
      context: ctx.context,
    } as GraphQLContext;
  }

  const token = authorization.split(" ");

  const authUser = verify(token[1], process.env.JWT_SECRET);
  if (!authUser) {
    return {
      req: ctx.req,
      dataloaders,
      user: null,
      context: ctx.context,
    } as GraphQLContext;
  }

  const user = await UserModel.findById(authUser.id);
  user.password = "***";
  return {
    req: ctx.req,
    dataloaders,
    user: user,
    context: ctx.context,
  } as GraphQLContext;
};
