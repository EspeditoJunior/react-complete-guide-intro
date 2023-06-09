import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props){
    /*{props.items.length === 0 ? 
        (<p>No expenses found.</p>) 
        :
        (props.items.map((e) => (<ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>)))
    }*/

    if (props.items.length === 0) {
        return <h2 className="expenses-list_fallback">Found no expenses.</h2>
    }

    return(
        <ul className="expenses-list">
            {props.items.map((e) => (<ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>))}
        </ul>
    ) 

};

export default ExpensesList;