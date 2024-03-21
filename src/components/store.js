import { createStore } from "redux";

const initialState = {
    counter: 1
};

const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'Add': return {
            ...state,
            counter: state.counter + 1
        };
        case 'Sub': return {
            ...state,
            counter: state.counter - 1
        };
        default: return state
    };
}

const store = createStore(counterReducer);

export default store;