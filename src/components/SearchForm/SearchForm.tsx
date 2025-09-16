interface SearchFormProps {
    onSubmit: (topis: string) => void;
}


export default function SerachForm ({onSubmit}: SearchFormProps) {
   const handleSubmit = (formData: FormData) => {
   const topic = formData.get("topic") as string;


   if (topic === "") {
     alert("PLease enter seraching for topis");
     return
   }
   onSubmit(topic);
   };


   return (
    <form action={handleSubmit}>
        <input type="text" name="topic"/>
        <button type="submit">Search</button>
    </form>
   )
}