import css from "./MoviesGrid.module.css";
import type { Movie } from "../../types/movies";

interface MovieListProps {
  items: Movie[];
}
export default function MovieGrid({items}: MovieListProps) {
     return (
<ul className={css.grid}>
  {items.map((item) => (
    <li key={item.id}>
       <div className={css.card}>
           <img 
		    className={css.image} 
		    src="https://image.tmdb.org/t/p/w500/poster-path" 
		    alt="movie title" 
		    loading="lazy" 
		  />
	    <h2 className={css.title}>{item.title}</h2>
       </div>
    </li>
  ))}
 </ul>
  )
}
    
  
  

     
