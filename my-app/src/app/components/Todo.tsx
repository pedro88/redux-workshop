import React from "react"
import type { TodoType } from "../types"
import { useDispatch } from "react-redux"
import { displayEditTodo, selectTodo } from "../redux/todoSlice"

const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
  //hook  -- useDispatch est un custom hook de Redux qui permet d'agir sur le store. Sans useDispatch, impossible de changer l'état de ton App
  const dispatch = useDispatch()

  return (
    <section
      className={`border-1 flex justify-between p-2 hover:scale-105 w-[50vw] rounded-2xl ${todo.priority === 1 ? "bg-emerald-200" : todo.priority === 2 ? "bg-amber-200" : todo.priority === 3 ? "bg-red-300" : "bg-blue-200"}`}

    >
      <div className="flex flex-col">
        <h2 className="text-2xl">{todo.todo}</h2>
        <h3 className='"text-xl'>{todo.status}</h3>
      </div>
      <div className="flex justify-end items-end">
        <button className="flex hover:scale-105 items-center justify-center w-20 bg-amber-100 border-1 m-5"
              onClick={() => {
        dispatch(selectTodo(todo))
        dispatch(
          displayEditTodo({
            id: todo.id,
            display: true,
          }),
        )
      }}>
          Edit
        </button>
        <button className="flex hover:scale-105 items-center justify-center w-20 bg-amber-100 border-1 m-5">
          Delete
        </button>
      </div>
    </section>
  )
}

export default Todo
