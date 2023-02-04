import React from "react";
import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const onExpenseSaveHandler = (expense) => {
        const enteredExpenseData = { ...expense, id: Math.random().toString() };
        console.log(enteredExpenseData);
        props.onAddExpense(enteredExpenseData);
    }

    const editCancelHandler = () => {
        setIsEditing(false);
    }

    const cancelClickHandler = () => {
        setIsEditing(true)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={cancelClickHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onExpenseSave={onExpenseSaveHandler} onEditCancel={editCancelHandler}></ExpenseForm>}
        </div>
    )
};

export default NewExpense;