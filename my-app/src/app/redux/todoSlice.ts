import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoType } from "../types"

interface TodoState {
  todos: TodoType[]
  selectedTodo: TodoType | null
  displayAddTodoModal: boolean
  displayEditTodoModal: {
    id: number,
    display : boolean
  }
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
      status: "backlog",
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
  displayAddTodoModal: false,
  displayEditTodoModal: {
    id: 0,
    display : false
  }
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    selectTodo: (state, action: PayloadAction<TodoType>) => {
      state.selectedTodo = action.payload
    },
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.filter(todo => todo.id !== action.payload)
    },
    //editTodoName
    //editTodoStatus
    //editTodoPriority
    displayAddTodo: (state, action: PayloadAction<boolean>) => {
      state.displayAddTodoModal = action.payload
    },
    displayEditTodo: (state, action: PayloadAction<{ id: number, display: boolean }>) => {
      state.displayEditTodoModal = action.payload
    },
  },
})

export const {
  addTodo,
  deleteTodo,
  selectTodo,
  displayAddTodo,
  displayEditTodo
} = todoSlice.actions
export default todoSlice.reducer
