import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import css from './App.css'
import OrderForm from "../OrderForm/OrderForm";
import SearchForm from '../SearchForm/SearchForm';
import axios from 'axios';
import ArticleList from "../ArticleList/ArticleList";
import type {Article} from "../../types/article"
import { fetchArticles} from '../../services/ArticleServices';
import {useId} from "react";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";

export default function App() {
   const [articles, setArticles] = useState<Article[]>([]);
   const [isLoading, setLoading] = useState(false);
   const [isError, setError] = useState(false);
   const [person, setPerson] = useState(null);
   const [count, setCount] = useState(1);
   const [isOpen, setIsOpen] = useState(false);
   const [isModalOpen, setIsModal] = useState(false);
   const [clicks, setClicks] = useState(0);

   const modalOpen = () => setIsModal(true);
   const modalClose = () => setIsModal(false);

useEffect(() => {
  localStorage.setItem("saved-clicks",JSON.stringify(clicks))
    console.log(`Effect ran for: ${count}`);

		// Повертаємо функцію очищення ефекта
    return () => {
      console.log(`Clean up for ${count}`);
    };
  }, [count]);


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
    <>
      <h2>The count is {count}</h2>
       <SearchForm onSubmit={handleSearch} /> 
      {isLoading && <p>Loading data?please wait...</p>}
      {isError && <p>Ooooop... something went wrong, please try again</p>}
      {articles.length > 0 && <ArticleList items={articles}/>}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide time" : "Show time"}
      </button>
       {isOpen && <Timer/>}
      <button onClick={()=> setCount(count + 1)}>The count is {count}</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <button onClick={modalOpen}>Open modal</button>
       {isModalOpen && (<Modal onClose={modalClose}>
        <h2>Custom Modal Content</h2>
        <p>This JSX will be passed as children prop</p>
       </Modal>)}
       <button onClick={() => setClicks(clicks + 1)}>  You clicked {clicks} times</button>
       <button onClick={() => setClicks(0)}>Reset</button>
    </>
  );
}
 
