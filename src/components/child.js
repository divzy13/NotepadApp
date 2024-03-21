import React, {useContext} from 'react';
import { mycontext } from './Notes'; 

function Child(props) {

    const user = useContext(mycontext);

    return (
        <div>
            <h2>{`hello am from child ${user}`}</h2>
        </div>
    );
}

export default Child;