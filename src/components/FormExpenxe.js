import React, { useState } from "react";
import "./styles/ExpenseForm.css";

const FormExpenxe = (props) => {
  const [enteredtitle, setTitle] = useState("");
  const [enteredamount, setAmount] = useState(0);
  const [entereddate, setDate] = useState("");
  const [message, setMessage] = useState(false);

  const textHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setMessage(true);
    const expenseData = {
      id: Math.random().toString(),
      title: enteredtitle,
      price: enteredamount,
      date: new Date(entereddate),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSubmitData(expenseData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title Here"
              value={enteredtitle}
              onChange={textHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="Amount Here"
              value={enteredamount}
              onChange={amountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-02"
              max="2023-12-31"
              placeholder="Date Here"
              value={entereddate}
              onChange={dateHandler}
            />
          </div>
          <div>
            <button type="submit" className="new-expense__actions">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormExpenxe;
