import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    id: number,
    name: string
}

type initialStateType = {
    isLoading: boolean,
    user: User[],
    error: string | undefined
}

const initialState: initialStateType = {
    isLoading: false,
    user: [],
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        initUsers: (state): void=> {
            state.isLoading = true
        },
        success: (state, action: PayloadAction<User[]>): void => {
            state.isLoading = false
            state.user = action.payload
            state.error = ''
        },
        errorFetch: (state, action: PayloadAction<string | undefined>): void => {
            state.isLoading = false
            state.user = []
            state.error = action.payload
        }
    }
})

export default userSlice.reducer
export const { initUsers, success, errorFetch } = userSlice.actions