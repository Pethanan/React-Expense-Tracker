import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
   const [enteredDate, setEnteredDate] = useState("");
   const [enteredAmount, setEnteredAmount] = useState("");
const titleChangeHandler = (e) => {
   setEnteredTitle(e.target.value)
      console.log(e.target.value)


};
const dateChangeHandler = (e) => {
   setEnteredDate(e.target.value)
   console.log(e.target.value)

};const amountChangeHandler = (e) => {
   setEnteredAmount(e.target.value)
console.log(e.target.value)
};


    return (
        <form className="frm" >
            <div className="new-expense__controls">
                <div div className="new-expense__control"> 
                    <label>Expense Title</label>
            <input type="text" className="input" onChange={titleChangeHandler}></input> </div>
            <div className="new-expense__control">
                <label >Expense Amount</label>
            <input onChange={amountChangeHandler} type="number" className="input"></input></div>
           <div className="new-expense__control">
             <label>Expense Date</label>
            <input type="date" className="input" onChange={dateChangeHandler}></input> </div>
                        </div>

           <div className="new-expense__actions"><button type="submit" >Submit</button></div> 
           
        </form>
    );
};

export default ExpenseForm;