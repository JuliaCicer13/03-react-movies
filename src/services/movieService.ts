import axios from "axios";
import type { Movie } from "../types/movies";

interface MoviesHttpResponse {
    hits: Movie[];
}
export const fetchMovies = async (query: string): Promise<Movie[]> =>{
  const response  = await axios.get<MoviesHttpResponse>("https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    });
    console.log("Raw response:", response.data);
    return response.data.hits;
}

