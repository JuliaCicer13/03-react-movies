import axios from "axios";
import type { Movie } from "../types/movies";

interface MoviesHttpResponse {
    hits: Movie[];
}
export const fetchMovies = async (query: string): Promise<Movie[]> =>{
  const response  = await axios.get<MoviesHttpResponse>(`https://api.themoviedb.org/3/search?query=${query}`);
   return response.data.hits;
}


//   const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
//   const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWUxYmRiZmJkMzM4Mzg3ZDkyZTRhMDcwMzJjZTFmNCIsIm5iZiI6MTc1ODEyMzY4MC44NDMwMDAyLCJzdWIiOiI2OGNhZDZhMGUxMjNhYTYwZDFkZTg0OTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tvcUkVvdU-BtXaxr4hrW-HxtZoyPeb3db340a9NGKPk'
//   }
// };

// fetchMovies(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
//   console.log(response.data);

// {
//   params: {
//     // твої параметри
//   },
//   headers: {
//     Authorization: `Bearer твійТокен`,
//   }
// }