import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoType } from "../types"

// >>>>>>>> On commence par typer l'état initial du Slice
interface TodoState {
  todos: TodoType[]
  selectedTodo: TodoType | null
  displayAddTodoModal: boolean
  displayEditTodoModal: {
    id: number,
    display : boolean
  }
}

// >>>>>>>> Puis on défini l'état initial du Slice
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
  // >>>>>>>> Ensuite on créer le Slice en tant que tel, on doit définir son nom, son état initial, et enfin les reucer qui vont permettre d'agir sur l'état initial
  name: "todo",
  initialState,
  reducers: {
    
    // Un reducer est toujours défini de la même manière :
    // sonNom : (sonEtatAUnInstantT, sonAction : éventuellementAvecUnPayload) => {
    // laLogiqueDuReducerQuiAgitSurUnePartiePréciseDeLEtat}

    selectTodo: (state, action: PayloadAction<TodoType>) => {
      state.selectedTodo = action.payload
    },
    clearSelectedTodo: state => {
      state.selectedTodo = null
    },
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<TodoType>) => {
      if (state.selectedTodo !== null) {
        state.selectedTodo = action.payload
        state.todos = state.todos.map(todo =>
          todo.id === state.selectedTodo!.id
            ? { ...todo, ...action.payload }
            : todo,
        )
      }
    },
    displayAddTodo: (state, action: PayloadAction<boolean>) => {
      state.displayAddTodoModal = action.payload
    },
    displayEditTodo: (
      state,
      action: PayloadAction<{ id: number; display: boolean }>,
    ) => {
      state.displayEditTodoModal = action.payload
    },
  },
})

// >>>>>>>> Il faut bien penser à exporter ses reducer, sans quoi ils ne serviront à rien
export const {
  addTodo,
  deleteTodo,
  selectTodo,
  clearSelectedTodo,
  displayAddTodo,
  displayEditTodo, 
  editTodo
} = todoSlice.actions
export default todoSlice.reducer
