import css from "./MoviesGrid.module.css";
import type { Movie } from "../../types/movies";

interface MovieListProps {
  movies: Movie[];
  onSelect: (movies: Movie) => void;
}
export default function MovieGrid({movies, onSelect}: MovieListProps) {
     return (
<ul className={css.grid}>
  {movies.map((movie) => (
    <li key={movie.id}>
       <div className={css.card}
        onClick={()=> onSelect(movie)}
       >
      <img
      src={ movie.poster_path 
             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
             : "https://via.placeholder.com/500x750?text=No+Image"
    }
      alt={movie.title}
      className={css.image}
    />
	    <h2 className={css.title}>{movie.title}</h2>
       </div>
    </li>
  ))}
 </ul>
  )
}
    
  
  

     
