import React from "react";
import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense</h2>
    }

    else if (props.items.length === 1) {

        return (
            <ul className="expenses-list">
                {props.items.map((el) => <ExpenseItem key={el.id} location={el.location} title={el.title} amount={el.amount} date={el.date} ></ExpenseItem>)}
                <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
            </ul>

        )
    }
    else if (props.items.length > 1) {

        return (
            <ul className="expenses-list">
                {props.items.map((el) => <ExpenseItem key={el.id} location={el.location} title={el.title} amount={el.amount} date={el.date} ></ExpenseItem>)}
            </ul>

        )
    }







};


export default ExpenseList;
