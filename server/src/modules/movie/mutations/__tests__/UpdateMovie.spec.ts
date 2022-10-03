import { graphql } from "graphql";
import { createUser } from "../../../user/fixture/createUser";

import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  sanitizeTestObject
} from "../../../../../test";
import { generateToken } from "../../../../auth";
import { getContext } from "../../../../getContext";
import { schema } from "../../../../graphql/schema";
import { createMovie } from "../../fixture/createMovie";
import movies from "../../MovieModel";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should be update one movie", async () => {
  const user = await createUser();
  const token = generateToken(user);

  const movie = await createMovie();

  const mutation = `
  mutation UpdateMovie($input: UpdateMovieInput!) {
    UpdateMovie(input: $input) {
      movieEdge {
        node {
          title
          id
          genre
          image
          description
          average
        }
      }
      error
    }
  }
      `;

  const variableValues = {
    input: {
      id: movie.id,
      title: "updated",
      genre: "updated",
      image: "updated",
      description: "updated",
      average: 3.5,
    },
  };
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };

  const contextValue = await getContext({ ...context });

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  const updatedMovie = await movies.findById({ _id: movie.id });

  expect(result.data.UpdateMovie.error).toBeNull();
  expect(updatedMovie.title).toEqual(variableValues.input.title);
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should be update just title of movie", async () => {
  const user = await createUser();
  const token = generateToken(user);

  const movie = await createMovie();

  const mutation = `
    mutation UpdateMovie($input: UpdateMovieInput!) {
      UpdateMovie(input: $input) {
        movieEdge {
          node {
            title
            id
            genre
            image
            description
            average
          }
        }
        error
      }
    }
        `;

  const variableValues = {
    input: {
      id: movie.id,
      title: "updated",
    },
  };
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };

  const contextValue = await getContext({ ...context });

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  const updatedMovie = await movies.findById({ _id: movie.id });

  expect(result.data.UpdateMovie.error).toBeNull();
  expect(updatedMovie.title).toEqual(variableValues.input.title);
  expect(updatedMovie.genre).toEqual(movie.genre);
  expect(updatedMovie.image).toEqual(movie.image);
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be update a movie without id input", async () => {
  const user = await createUser();
  const token = generateToken(user);

  const movie = await createMovie();

  const mutation = `
      mutation UpdateMovie($input: UpdateMovieInput!) {
        UpdateMovie(input: $input) {
          movieEdge {
            node {
              title
              id
              genre
              image
              description
              average
            }
          }
          error
        }
      }
          `;

  const variableValues = {
    input: {
      title: "updated",
    },
  };
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };

  const contextValue = await getContext({ ...context });

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.errors).toBeTruthy();
  expect(result.data).toBeUndefined();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be update a movie with invalid id", async () => {
  const user = await createUser();
  const token = generateToken(user);

  const movie = await createMovie();

  const mutation = `
      mutation UpdateMovie($input: UpdateMovieInput!) {
        UpdateMovie(input: $input) {
          movieEdge {
            node {
              title
              id
              genre
              image
              description
              average
            }
          }
          error
        }
      }
          `;

  const variableValues = {
    input: {
      id: "invalidId",
      title: "updated",
    },
  };
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };

  const contextValue = await getContext({ ...context });

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.data.UpdateMovie.error).toBeTruthy();
  expect(result.data.UpdateMovie.movieEdge).toBeNull();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be update a movie without auth", async () => {
  const movie = await createMovie();

  const mutation = `
    mutation UpdateMovie($input: UpdateMovieInput!) {
      UpdateMovie(input: $input) {
        movieEdge {
          node {
            title
            id
            genre
            image
            description
            average
          }
        }
        error
      }
    }
        `;

  const variableValues = {
    input: {
      id: movie.id,
      title: "updated",
      genre: "updated",
      image: "updated",
      description: "updated",
      average: 3.5,
    },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  const updatedMovie = await movies.findById({ _id: movie.id });

  expect(result.errors).toBeDefined();
  expect(updatedMovie.title).toEqual(movie.title);
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});
