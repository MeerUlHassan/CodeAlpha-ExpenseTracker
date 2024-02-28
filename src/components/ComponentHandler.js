import React, { useState } from "react";
import { expence } from "../Data/expenceData";
import ExpenseItem from "../components/Expenses/ExpenseItem";
import FormExpenxe from "../components/FormExpenxe";

const ComponentHandler = () => {
  const [expenses, setExpenses] = useState(expence);
  const expenseDataHandler = (childData) => {
    setExpenses((preExpense) => [childData, ...preExpense]);
  };
  return (
      <div className="container">
      <FormExpenxe onSubmitData={expenseDataHandler} />
      <ExpenseItem expenseData={expenses}/>
      </div>
  );
};

export default ComponentHandler;
