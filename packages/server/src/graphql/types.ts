import mongoose from "mongoose";
import { IUser } from "../types";

import { DataLoaders } from "../modules/loader/loaderRegister";

declare type ObjectId = mongoose.Schema.Types.ObjectId;

export type GraphQLContext = {
  user?: IUser | null;
  dataloaders: DataLoaders;
};

export type LoaderFn = (
  ctx: GraphQLContext,
  id: string | ObjectId | object
) => any;
