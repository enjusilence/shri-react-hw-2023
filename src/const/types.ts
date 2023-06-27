export type Movie = {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  id: string,
  rating: number,
  director: string,
  reviewIds: string[],
}

export type Comment = {
  id: string,
  name: string,
  rating: number,
  text: string,
}

export type Cinema = {
  id: string,
  movieIds: string[],
  name: string,
}
