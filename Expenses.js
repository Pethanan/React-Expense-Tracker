import React from "react";
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"


const Expenses = (props) =>{

let expenseElements = props.expenses.map((el) => <ExpenseItem location={el.location} title={el.title} amount={el.amount} date={el.date} ></ExpenseItem> )

return (
      <div className="expenses">
            {expenseElements}
       </div>
  );

};

export default Expenses;