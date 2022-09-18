export interface IMovie {
    id: string,
    title: string,
    genre: string
}

export interface IMovieEdge {
    cursor: string,
    node: IMovie
}