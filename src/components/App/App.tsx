import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import css from './App.css'
import OrderForm from "../OrderForm/OrderForm";
import SearchForm from '../SearchForm/SearchForm';
import axios from 'axios';
import ArticleList from "../ArticleList/ArticleList";
import type {Article} from "../../types/article"
import { fetchArticles} from '../../services/ArticleServices';

export default function App() {
   const [articles, setArticles] = useState<Article[]>([]);
   const [isLoading, setLoading] = useState(false);
   const [isError, setError] = useState(false);

   const handleSearch = async (topic: string) => {
    try {
       setLoading(true);
       setError(false);

     const data = await fetchArticles(topic);
       setArticles(data);
    } catch {
      setError(true);
    } finally {
       setLoading(false);
    }
   
  };
   
  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data?please wait...</p>}
      {isError && <p>Ooooop... something went wrong, please try again</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
 
