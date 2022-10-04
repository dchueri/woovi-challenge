import mongoose, { Model } from "mongoose";
import { IComment } from "../../types";

const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
      description: "User that typed this comment",
      required: true,
      index: true,
    },
    movie: {
      type: ObjectId,
      ref: "Movie",
      description: "Post this comment is attached to",
      required: true,
      index: true,
    },
  },
  {
    collection: "Comments",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const CommentModel: Model<IComment> = mongoose.model<IComment>(
  "Comments",
  commentSchema
);

export default CommentModel;
