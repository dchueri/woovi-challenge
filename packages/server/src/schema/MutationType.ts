import { GraphQLObjectType } from 'graphql';

import CommentMutations from '../modules/comment/mutations';
import LikeMutations from '../modules/like/mutations';
import MovieMutations from '../modules/movie/mutations';
import UserMutations from '../modules/user/mutations';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...UserMutations,
    ...MovieMutations,
    ...LikeMutations,
    ...CommentMutations,
  }),
});

export default MutationType;
