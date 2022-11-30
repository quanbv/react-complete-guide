import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return filteredYear === 'all' ? expense.date.getFullYear().toString() !== expense :
            expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
          <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;