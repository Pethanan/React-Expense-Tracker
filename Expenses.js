import React from "react";
import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"


const Expenses = (props) => {



      const [filteredYear, setFilteredYear] = useState("");

      const filterChangeHandler = selectedYear => {

            setFilteredYear(selectedYear);
            console.log(selectedYear)

      }
      return (
            <div>
                  <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler}></ExpensesFilter>
                  <div className="expenses">
                        {props.expenses.map((el) => <ExpenseItem key={el.id} location={el.location} title={el.title} amount={el.amount} date={el.date} ></ExpenseItem>)}</div>
            </div>);

};

export default Expenses;