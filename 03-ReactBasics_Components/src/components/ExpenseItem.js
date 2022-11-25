import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('vi', { month: 'long'});
  const day = props.date.toLocaleString('vi', { day: '2-digit'});
  const year = props.date.getFullYear();


  return (
    <div className='expense-item'>
      {/* <div>{props.date.toISOString()}</div> */}
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.expenseTitle}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
