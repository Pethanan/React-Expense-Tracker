import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("updated");
        console.log(title)

    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} amount={props.amount} location={props.location} />
            <button onClick={clickHandler}>Edit</button>
        </div>
    );
}

export default ExpenseItem;