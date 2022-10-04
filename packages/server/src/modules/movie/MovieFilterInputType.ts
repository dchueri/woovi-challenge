import { GraphQLID, GraphQLInputObjectType } from "graphql";

import {
    FILTER_CONDITION_TYPE,
    getObjectId
} from "@entria/graphql-mongo-helpers";

export const movieFilterMapping = {
  author: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
};

const MovieFilterInputType = new GraphQLInputObjectType({
  name: "movieFilter",
  description: "Used to filter movies",
  fields: () => ({
    author: {
      type: GraphQLID,
    },
  }),
});

export default MovieFilterInputType;
