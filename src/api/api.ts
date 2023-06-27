import { Movie } from "@/const/types";

const BASE_URL = 'http://localhost:3001/api/';

// Кинотеатры

export const fetchCinemas = async () => (await fetch(`${BASE_URL}cinemas`)).json();

// Фильмы

export const fetchMovies = async (): Promise<Movie[]> => (await fetch(`${BASE_URL}movies`)).json();

export const fetchMovieByID = async (id: string) => (await fetch(`${BASE_URL}movie?movieId=${id}`)).json();

// Отзывы

export const fetchCommentsByID = async (id: string) => (await fetch(`${BASE_URL}reviews?movieId=${id}`)).json();
