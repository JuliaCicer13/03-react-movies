import {useId} from "react";

interface OrderFormProps {
    onSubmit:(value: string) => void;
}

export default function OrderForm ({onSubmit} : OrderFormProps) {
 const nameId = useId();
 const emailId = useId();
 const selectedId = useId();
// based id:
const basedId = useId();

 const handleSubmit = (formData: FormData) => {
  const restrictions = formData.getAll("restrictions") as string [];
   const delivery = formData.get("delivery") as string;
   const deliveryTime = formData.get("deliveryTime") as string;
   onSubmit(delivery);
  console.log(restrictions);
  console.log("Select delivery time:", deliveryTime);
 };

 return (
    <form action={handleSubmit}>
      <label htmlFor={nameId}></label>
      <input type="text" name="username" id={nameId} />

      <label htmlFor={emailId}></label>
      <input type="text" name="email" id={emailId} />

        <button type="submit">Submit</button>


        {/* radiobutton: */}
        <fieldset>
         <legend>Delivery method</legend>

         <label>
           <input type="radio" name="delivery" value="pickup" defaultChecked />
           Pickup
         </label>
         <label>
         <input type="text" name="delivery" value="courier" />
         Courier
         </label>
         <label>
          <input type="text" name="delivery" value="drone" />
          Drone delivery
         </label>
          {/* checkboxes: */}
           

           <legend>Dietary restrictions:</legend>
           <label>
            <input type="checkbox" name="restrictions" value="vegan" />
            Vegan
           </label>
           <label>
            <input type="checkbox" name="restrictions" value="gluten-free"/>
            Gluten-free
           </label>
           <label>
            <input type="checkbox" name="restrictions" value="nut-free"/>
            Nut-free
           </label>
        </fieldset>


        {/* SELECTS FROM A LOT OF... */}

        <label htmlFor={selectedId}>Preferred delivery time</label>
        <select name="deliveryTime" id={selectedId} defaultValue="">
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </select>
    </form>
 )
}