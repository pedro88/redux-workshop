import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface State {
 something : string
}

const initialState: State = {
something : ""
}

const slice = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
  //{Reducer}
  },
})

export const {
  //YourReducerName
} = slice.actions
export default slice.reducer
