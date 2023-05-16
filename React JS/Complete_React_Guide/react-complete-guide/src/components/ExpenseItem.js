import './ExpenseItem.css';
// we can pass any name as props,below we pass  
function ExpenseItem(props){
    const month = props.time.toLocaleString('en-us',{month:'long'});
    const day = props.time.toLocaleString('en-us',{day:'2-digit'});
    const year = props.time.getFullYear();
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
                
            </div>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;