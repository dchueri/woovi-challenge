export interface DataLoaders {
  UserLoader: ReturnType<typeof import("../user/UserLoader").getLoader>;
  MovieLoader: ReturnType<typeof import("../movie/MovieLoader").getLoader>;
  CommentLoader: ReturnType<
    typeof import("../comment/CommentLoader").getLoader
  >;
}

const loaders: {
  [Name in keyof DataLoaders]: () => DataLoaders[Name];
} = {} as any;

const registerLoader = <Name extends keyof DataLoaders>(
  key: Name,
  getLoader: typeof loaders[Name]
) => {
  loaders[key] = getLoader;
};

const getAllDataLoaders = (): DataLoaders =>
  (Object.keys(loaders) as (keyof DataLoaders)[]).reduce(
    (prev, loaderKey) => ({
      ...prev,
      [loaderKey]: loaders[loaderKey](),
    }),
    {}
  ) as any;

export { registerLoader, getAllDataLoaders };
