export interface IMovie {
    id: String,
    title: String,
    genre: String
}

export interface IMovieEdge {
    cursor: String,
    node: IMovie
}