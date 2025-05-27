import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoType } from "../types"

interface TodoState {
  todos: TodoType[]
  selectedTodo: TodoType | null
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      todo: "finir mon workshop Redux",
      status: "running",
      priority: 3,
    },
    {
      id: 2,
      todo: "tester mon workshop",
      status: "backload",
      priority: 2,
    },
    {
      id: 3,
      todo: "faire du sport",
      status: "finish",
      priority: 1,
    },
  ],
  selectedTodo: null,
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.filter(todo => todo.id !== action.payload)
    },
    selectTodo: (state, action: PayloadAction<TodoType>) => {
      state.selectedTodo = action.payload
    },
  },
})

export default todoSlice.reducer
