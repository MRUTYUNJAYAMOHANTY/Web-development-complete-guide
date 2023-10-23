import { createReducer } from "@ngrx/store";

const initialSte = 0;

// export const counterReducer = createReducer(
//     initialSte
// )

export function counterReducer(state = initialSte){
    return state;
}