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
		    className={css.image} 
		    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
		    alt={movie.title}
		    loading="lazy" 
		  />
	    <h2 className={css.title}>{movie.title}</h2>
       </div>
    </li>
  ))}
 </ul>
  )
}
    
  
  

     
