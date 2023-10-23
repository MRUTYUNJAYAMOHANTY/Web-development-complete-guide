import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.action";

const initialSte = 0;

// export const counterReducer = createReducer(
//     initialSte,
//     on(increment,(state, action)=> state + action.value)
// )

// reducer can be created as a standard function

export function counterReducer(state = initialSte, action: any){
    if(action.type === '[Counter] Increment')
    return state + action.value;
}