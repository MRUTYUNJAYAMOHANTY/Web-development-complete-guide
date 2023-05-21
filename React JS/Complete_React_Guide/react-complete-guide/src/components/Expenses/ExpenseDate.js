import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.time.toLocaleString('en-us',{month:'long'});
    const day = props.time.toLocaleString('en-us',{day:'2-digit'});
    const year = props.time.getFullYear();
    
    return (
        <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{day}</div>
                <div className="expense-date__day">{year}</div>
                
            </div>
    );
}

export default ExpenseDate;