import { Action, createReducer, on } from "@ngrx/store";
//import { CounterAction, INCREMENT, IncrementAction } from "./counter.action";
 import { decrement, increment } from "./counter.action";

const initialSte = 0;

export const counterReducer = createReducer(
    initialSte,
    on(increment,(state, action)=> state + action.value),
    on(decrement,(state, action)=> state - action.value)
)

/*
// reducer can be created as a standard function

export function counterReducer(state = initialSte, action: CounterAction | Action){
    if(action.type === INCREMENT)
    return state + (action as IncrementAction).value;
}
*/
