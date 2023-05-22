import './Card.css';

const Card = (props) => {
    // storing multiple css classes in one variable
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Card