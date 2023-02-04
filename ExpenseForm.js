import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
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

    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        console.log(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onExpenseSave(expenseData);
        setEnteredAmount("");
        setEnteredTitle("");
        setEnteredDate("");
        console.log(expenseData);

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div div className="new-expense__control">
                    <label>Expense Title</label>
                    <input type="text" value={enteredTitle} className="input" onChange={titleChangeHandler}></input> </div>
                <div className="new-expense__control" >
                    <label >Expense Amount</label>
                    <input onChange={amountChangeHandler} type="number" className="input" value={enteredAmount} ></input></div>
                <div className="new-expense__control">
                    <label>Expense Date</label>
                    <input type="date" className="input" onChange={dateChangeHandler} value={enteredDate} ></input> </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit" >Submit</button>
                <button type="button" onClick={props.onEditCancel}>Cancel</button>
            </div>

        </form>
    );
};

export default ExpenseForm;