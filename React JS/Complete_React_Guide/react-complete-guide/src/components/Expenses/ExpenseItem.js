import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// we can pass any name as props,below we pass  
const ExpenseItem =(props) =>{
    let title = props.name
    const clickHandler = () => {
        console.log('clicked!!!');
    }
    return (
        <Card className='expense-item'>
             <ExpenseDate time={props.time}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;