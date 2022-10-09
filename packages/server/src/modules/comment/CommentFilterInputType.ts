import { GraphQLID, GraphQLInputObjectType } from 'graphql';

import {
  FILTER_CONDITION_TYPE,
  getObjectId
} from '@entria/graphql-mongo-helpers';

export const commentFilterMapping = {
  user: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
  movie: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
};

const CommentFilterInputType = new GraphQLInputObjectType({
  name: 'CommentFilter',
  description: 'Used to filter comments',
  fields: () => ({
    user: {
      type: GraphQLID,
    },
    movie: {
      type: GraphQLID,
    },
  }),
});

export default CommentFilterInputType;
