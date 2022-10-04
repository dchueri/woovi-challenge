import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { GraphQLContext } from "../../../graphql/types";
import MovieLoader from "../../../modules/movie/MovieLoader";
import MovieModel from "../../../modules/movie/MovieModel";
import MovieType from "../../../modules/movie/MovieType";
import CommentLoader from "../CommentLoader";
import CommentModel from "../CommentModel";
import { CommentConnection } from "../CommentType";

type Args = {
  movie: string;
  text: string;
};
export default mutationWithClientMutationId({
  name: "CommentCreate",
  inputFields: {
    movie: {
      type: new GraphQLNonNull(GraphQLID),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: Args, context: GraphQLContext) => {
    if (!context.user) {
      return {
        error: "User not logged",
      };
    }

    const movie = await MovieModel.findOne({
      id: args.movie,
    });

    if (!movie) {
      return {
        error: "movie not found",
      };
    }

    const comment = await new CommentModel({
      user: context.user.id,
      movie,
      text: args.text,
    }).save();

    return {
      id: comment.id,
      movie: movie.id,
      error: null,
    };
  },
  outputFields: {
    commentEdge: {
      type: CommentConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const comment = await CommentLoader.load(context, id);

        if (!comment) {
          return null;
        }

        return {
          cursor: toGlobalId("Comment", comment._id),
          node: comment,
        };
      },
    },
    movie: {
      type: MovieType,
      resolve: async ({ movie }, _, context) => {
        return await MovieLoader.load(context, movie);
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
  },
});
