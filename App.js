import NewExpense from './components/Expenses/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const DummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Chennai"
  },
  {
    id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: "Chennai"
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

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses)
  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    setExpenses(() => [expense, ...expenses])
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
