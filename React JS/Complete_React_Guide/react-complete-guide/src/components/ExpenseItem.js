import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
// we can pass any name as props,below we pass  
function ExpenseItem(props){
    
    return (
        <Card className='expense-item'>
             <ExpenseDate time={props.time}/>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;