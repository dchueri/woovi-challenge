import { getCounter, getOrCreate } from "../../../../test";
import { DeepPartial } from "../../../../test/deepPartial";
import { IMovie } from "../../../types";
import { createUser } from "../../user/fixture/createUser";
import User from "../../user/UserModel";
import Movie from "../MovieModel";

export const createMovie = async (args: DeepPartial<IMovie> = {}) => {
  const i = getCounter("movie");

  let { title, ...rest } = args;

  if (!title) {
    title = await getOrCreate(User, createUser);
  }

  const user = await createUser()

  return new Movie({
    title: `content#${i}`,
    genre: "test",
    image: "test",
    description: "test description",
    average: 3,
    author: user._id,
    ...rest,
  }).save();
};
