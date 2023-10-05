import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: "e1", title: "MIRERO", amount: 123.456, date: new Date(2023, 9, 27) },
    {
      id: "e2",
      title: "SYSTEM",
      amount: 456.123,
      date: new Date(2023, 11, 11),
    },
    { id: "e3", title: "ABCDEF", amount: 3.46, date: new Date(2023, 8, 16) },
    { id: "e4", title: "GHI", amount: 321.4, date: new Date(2023, 8, 11) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js !", expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
