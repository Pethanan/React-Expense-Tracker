import React from "react";
import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css"


const Expenses = (props) => {

      const [filteredYear, setFilteredYear] = useState("2023");

      const filterChangeHandler = selectedYear => {
            setFilteredYear(selectedYear);
      }
      const filteredExpenses = props.expenses.filter(el => el.date.getFullYear().toString() === filteredYear);


      return (
            <div className="expenses">
                  <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler}></ExpensesFilter>
                  <div>
                        <ExpenseList items={filteredExpenses}></ExpenseList>
                  </div>
            </div>);

};

export default Expenses;