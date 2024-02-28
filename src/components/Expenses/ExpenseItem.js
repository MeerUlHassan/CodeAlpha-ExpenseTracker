import React, { useState } from "react";
import ExpenceCard from "./ExpenceCard";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "../styles/ExpenseItem.css";
import "../styles/expenses.css";

const ExpenseItem = (props) => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const onChangeYearHandler = (Year) => {
    setSelectedYear(Year);
  };
  const filteredexpenses = props.expenseData.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  let expenseContent = <p>No Expenses Found</p>;
  if (filteredexpenses.length > 0) {
    expenseContent = filteredexpenses.map((ex) => (
      <ExpenceCard
        key={ex.id}
        title={ex.title}
        date={ex.date}
        price={ex.price}
      />
    ));
  }

  return (
    <div className="expense">
      <ExpenseFilter
        selected={selectedYear}
        onSelectedYear={onChangeYearHandler}
      />
      <ExpenseChart dataPoints={filteredexpenses} />
      {expenseContent}
    </div>
  );
};

export default ExpenseItem;
