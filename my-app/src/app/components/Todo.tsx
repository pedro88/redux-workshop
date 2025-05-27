import React from "react"
import type { TodoType } from "../types"

const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
  return (
    <section
      className={`border-1 rounded-2xl ${todo.priority === 1 ? "bg-emerald-200" : todo.priority === 2 ? "bg-amber-200" : todo.priority === 3 ? "bg-red-300" : "bg-blue-200"}`}
    >
      <h2 className="text-2xl">{todo.todo}</h2>
      <h3 className='"text-xl'>{todo.status}</h3>
    </section>
  )
}

export default Todo
