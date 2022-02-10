import React, { useState } from 'react';
import './counter.css';


const Counter = () => {


    const [count, setCount] = useState(0);

    const incrementNumber = () => {
        setCount(count + 1);
    };

    const decrementNumber = () => {
        setCount(count - 1);
    };


    return (
        <div className="counter">
            <div className="count">
                {count}
            </div>

            <div className="buttons">
                <button className='counterButton' onClick={incrementNumber}>+</button>

                <button className='counterButton' onClick={decrementNumber}>-</button>
            </div>
        </div>
    );
};




export default Counter;