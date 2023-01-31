import React from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {

    return (
        <form className="frm">
            <label className="label">Expense Title</label>
            <input type="text" className="input"></input>
            <label className="label">Expense Amount</label>
            <input type="number" className="input"></input>
            <label className="label">Expense Date</label>
            <input type="date" className="input"></input>
            <button type="submit" className="btn">Submit</button>
        </form>
    );
}

export default ExpenseForm;