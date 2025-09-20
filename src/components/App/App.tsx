import { useEffect, useState } from 'react';
import css from './App.css';
import SearchBar from '../SearchBar/SearchBar';
import {toast} from 'react-hot-toast';
import Loader from "../Loader/Loader";
import type {Movie} from "../../types/movies";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchMovies }from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from '../MovieModal/MovieModal';

export default function App() {  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
     async function handleSearch (query: string) {
     try {
      if(!movies || movies.length === 0) {
      return toast.error("No movies found for your request.");
     }
      setLoader(true);
      setIsError(false);
     const dataMovies = await fetchMovies(query);
      setMovies(dataMovies);
   } catch {
      setIsError(true);
   } finally {
      setLoader(false);
   }
 }
   handleSearch(fetchMovies);

  }, [movies]);

  return (
    <>
    <SearchBar onSubmit={handleSearch}/>
    {isLoader && <Loader/>}
    {isError && <ErrorMessage/>}
    {movies.length > 0 && <MovieGrid onSelect={openModal} items={movies}/>}
    <button onClick={openModal}>Open modal</button>
    {isModalOpen && <MovieModal onClose={closeModal}/>}
    </>
  );
}
 
