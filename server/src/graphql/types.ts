import mongoose from "mongoose";
import { IUser } from "../types/types";

import { DataLoaders } from "../graphql/loaderRegister";

declare type ObjectId = mongoose.Schema.Types.ObjectId;

export type GraphQLContext = {
  user?: IUser;
  dataloaders: DataLoaders;
};

export type LoaderFn = (
  ctx: GraphQLContext,
  id: string | ObjectId | object
) => any;
