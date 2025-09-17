import css from "./MoviesGrid.module.css";
import type { Movie } from "../../types/movies";

interface MovieListProps {
  items: Movie[];
  onSelect: (movies: Movie) => void;
}
export default function MovieGrid({items, onSelect}: MovieListProps) {
     return (
<ul className={css.grid}>
  {items.map((item) => (
    <li key={item.id}>
       <div className={css.card}
        onClick={()=> onSelect(item)}
       >
      <img 
		    className={css.image} 
		    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
		    alt={item.title}
		    loading="lazy" 
		  />
	    <h2 className={css.title}>{item.title}</h2>
       </div>
    </li>
  ))}
 </ul>
  )
}
    
  
  

     
