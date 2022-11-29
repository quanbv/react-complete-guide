import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}
        onChangeFilter={filterChangeHandler} />
      {props.items.map((item) => 
        <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
               />
      )}
    </Card>
  );
}

export default Expenses;