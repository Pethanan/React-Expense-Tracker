
import {useState} from "react";
import "./ExpenseDetails.css"
const ExpenseDetails = (props) =>

{

    const [amount, setAmount] = useState(props.amount);
   const clickHandler = () => {
    setAmount(100);
   }
    return (
        <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">INR {amount}</div> <button onClick={clickHandler}>Edit Expense amnt</button>
                                <div className="expense-item__price">{props.location}</div>

            </div>
    );
}

export default ExpenseDetails;