import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux"
import todoReducer from '../redux/todoSlice'
import { TypedUseSelectorHook } from "react-redux";

//Ici on initialise le store de l'application
export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useDispatch = () => useReduxDispatch<AppDispatch>()

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector



export default store