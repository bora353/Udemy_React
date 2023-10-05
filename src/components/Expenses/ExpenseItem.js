import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date }) {
  const [title1, setTitle] = useState(title);
  console.log("ExpenseItem");

  const clickHandler = () => {
    setTitle("Update!");
    console.log("clickHandler");
  };

  return (
    // <div className="expense-item">
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title1}</h2>
      </div>
      <div className="expense-item__price">{amount}원</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
