import React from "react"
import type { TodoType } from "../types"
import { useDispatch } from "react-redux"
import { displayEditTodo, selectTodo } from "../redux/todoSlice"

const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
  //hook
  const dispatch = useDispatch()

  return (
    <section
      className={`border-1 p-2 hover:scale-105 w-[50vw] rounded-2xl ${todo.priority === 1 ? "bg-emerald-200" : todo.priority === 2 ? "bg-amber-200" : todo.priority === 3 ? "bg-red-300" : "bg-blue-200"}`}
      //THIS IS THE IMPORTANT PART HERE -- YOU CAN'T MUTATE ANYTHING IN REDUX WITHOUT DISPATCH
      onClick={() => {
        dispatch(selectTodo(todo))
        dispatch(displayEditTodo({
          id: todo.id,
          display : true
        }))
      }}
    >
      <h2 className="text-2xl">{todo.todo}</h2>
      <h3 className='"text-xl'>{todo.status}</h3>
    </section>
  )
}

export default Todo
