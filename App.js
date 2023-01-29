import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';

const App = () =>   {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Chennai"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: "Chennai"
},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Bangalore"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Pune"
    },
  ];
      let expenseElements = expenses.map((el) => <ExpenseItem location={el.location} title={el.title} amount={el.amount} date={el.date} ></ExpenseItem> )

  return (
    <div>
      {expenseElements}
       </div>
  );
}

export default App;
