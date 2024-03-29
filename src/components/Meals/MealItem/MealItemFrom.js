import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
 
  const amountInputRef = useRef();
  const [amountIsValid , setAmountIsValid] = useState(true)
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 0 ||
      enteredAmountnumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmountnumber)


  };


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        // x={id:"hello"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
