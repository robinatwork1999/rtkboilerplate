import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    numberOfCakes: number
}

const initialState: initialStateType = {
    numberOfCakes: 5
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState, 
    reducers: {
        ordered: (state, action: PayloadAction<number>)=>{
            state.numberOfCakes = action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered } = cakeSlice.actions