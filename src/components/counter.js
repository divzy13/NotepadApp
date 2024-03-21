import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const counterSelect = useSelector(state => state.counter); 
    const dispatch = useDispatch();
    return (
        <div>
            <h2>counter: {counterSelect}</h2>
            <button onClick={()=>dispatch({type: 'Add'})}>Add + </button>
            <button onClick={()=>dispatch({type: 'Sub'})}>Sub - </button>
        </div>
    );
};

export default Counter;