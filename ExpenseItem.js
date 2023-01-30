import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) =>
{

    const clickHandler = () => {

    }

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
            <button onClick={clickHandler}>Delete</button>
        </div>
    );
}

export default ExpenseItem;