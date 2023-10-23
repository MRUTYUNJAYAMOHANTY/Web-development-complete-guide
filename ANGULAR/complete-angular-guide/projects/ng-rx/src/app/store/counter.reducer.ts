import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.action";

const initialSte = 0;

export const counterReducer = createReducer(
    initialSte,
    on(increment,(state)=> state + 1)
)

// export function counterReducer(state = initialSte){
//     return state;
// }