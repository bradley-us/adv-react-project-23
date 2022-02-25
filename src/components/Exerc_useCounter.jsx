import React from 'react';
import { useCounter } from '../hooks/useCounter';

const ExercUsecounter = () => {

    const counter = useCounter()
    
    return (
        <div>
            <h1>useCounter Hook (0-30)</h1>
            <h3>{counter.value}</h3>
            <button onClick={() => counter.increment()}>Increment +1</button>
            <button onClick={() => counter.decrement()}>Increment -1</button>
            <p>or</p>
            <button onClick={() => counter.increment10()}>Increment +10</button>
            <button onClick={() => counter.decrement10()}>Increment -10</button>
        </div>
    );
}

export default ExercUsecounter;
