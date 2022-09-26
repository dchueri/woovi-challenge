export interface IMovie {
  id: string;
  title: string;
  genre: string;
}

export interface Movie {
  movieEdge: MovieEdge;
  error: string;
  id: string;
  title: string;
  genre: string;
}

export interface CreateMovieResponse {
  CreateMovie?: CreateMovie;
}

export interface CreateMovie {
  movieEdge: MovieEdge;
  error: string;
}

export interface Node {
  id: string;
  title: string;
  genre: string;
}

export interface MovieEdge {
  node: Node;
}

export interface IMovieEdge {
  node: Node;
  cursor: string;
}

export interface Edge {
  edges:
    | readonly ({
        readonly cursor: string | null;
        readonly node: {
          readonly genre: string;
          readonly id: string;
          readonly title: string;
        } | null;
      } | null)[]
    | null;
}

export interface MovieInput {
  title: string;
  genre: string;
}

export interface Movies {
  edges: IMovieEdge[];
  pageInfo: PageInfo;
}

export interface PageInfo {
  hasNextPage: string;
  hasPreviousPage: string;
  startCursor: string;
  endCursor: string;
}
