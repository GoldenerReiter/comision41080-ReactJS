import { useState } from "react";
import "./Counter.css";

function Counter(prop) {
    const [ counter, setCounter ] = useState(prop.initial);

    const increment = () => {
        if (counter < prop.stock) {
            setCounter(counter + 1);
        }
    }
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= prop.stock) {
            alert(`Usted lleva ${counter} items!`);
        }
    }
    
    return (
        <div className="Counter">
            <button onClick={increment}>+</button>
            <p>{ counter }</p>
            <button onClick={decrement}>-</button>
            <button onClick={onAdd}>Llevar al carrito</button>
        </div>
    )
}

export default Counter;