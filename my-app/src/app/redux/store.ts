import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer : {}
})


export type RootState = ReturnType<typeof store.getState>

export default store