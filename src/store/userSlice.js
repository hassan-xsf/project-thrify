import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData : null,
    authStatus: false
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login : (state,action) => {
            state.authData = action.payload;
            state.authStatus = true
        },
        logout : (state) => {
            state.authData = null;
            state.authStatus = false
        }
    }

})

export const {login,logout} = authSlice.actions;
export const authReducer = authSlice.reducer;