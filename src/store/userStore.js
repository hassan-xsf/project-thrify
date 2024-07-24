import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from './userSlice'


export const userStore = configureStore({
    reducer: {
        auth: authReducer
    }
})