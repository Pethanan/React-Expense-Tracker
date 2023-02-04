import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const onExpenseSaveHandler = (expense) => {
        const enteredExpenseData = { ...expense, id: Math.random().toString() };
        console.log(enteredExpenseData);
        props.onAddExpense(enteredExpenseData);
    }


    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSave={onExpenseSaveHandler}></ExpenseForm>
        </div>
    )
};

export default NewExpense;