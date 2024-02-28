import React from "react";
import ExpenceDate from "./ExpenceDate";
import "../styles/ExpenseDate.css";


const ExpenceCard = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <ExpenceDate date={props.date} />
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div className="expense-item__price">
        <h2>$ {props.price}</h2>
      </div>
    </div>
  );
};

export default ExpenceCard;
