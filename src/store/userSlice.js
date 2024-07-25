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
        },
        updateUser : (state,action) => {
            if(state.authData) state.authData = action.payload;
        }
    }

})

export const {login,logout,updateUser} = authSlice.actions;
export const authReducer = authSlice.reducer;