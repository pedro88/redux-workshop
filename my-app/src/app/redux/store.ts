import { configureStore } from "@reduxjs/toolkit"
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux"
import sliceReducer from "../redux/slice"
import { TypedUseSelectorHook } from "react-redux"

export const store = configureStore({
  reducer: {
    slice: sliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useDispatch = () => useReduxDispatch<AppDispatch>()

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store
