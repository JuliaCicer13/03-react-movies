import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import css from './App.css'
import OrderForm from "../OrderForm/OrderForm";

export default function App() {
  const [count, setCount] = useState(0);

   const handleSubmit = (formData: FormData) => {
      const username = formData.get("username") as string;
      console.log("username:", username);
   }
  return (
    <>
     <form action={handleSubmit}>
      <input type="text" name='username' defaultValue={"Yuliia"} />
      <button type="button">Submit</button>
     </form>

    </>
  )
}


