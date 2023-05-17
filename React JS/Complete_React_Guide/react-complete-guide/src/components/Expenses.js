import ExpenseItem  from "./ExpenseItem";
import './Expenses.css';
function items(props){
    
    return(
        <div className="expenses">
            <ExpenseItem
      name={props.items[0].title}
      amount={props.items[0].amount}
      time={props.items[0].date} />
      <ExpenseItem
      name={props.items[1].title}
      amount={props.items[1].amount}
      time={props.items[1].date} />
      <ExpenseItem
      name={props.items[2].title}
      amount={props.items[2].amount}
      time={props.items[2].date} />
      <ExpenseItem
      name={props.items[3].title}
      amount={props.items[3].amount}
      time={props.items[3].date} />
        </div>
    );
}

export default items;