import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Todo from "./Todo"
import type { TodoType } from "../types"

const TodoDisplayer = () => {
  //Selectore
  const todos = useSelector((state: RootState) => state.todo.todos)

  return (
    <>
      {todos.map((todo: TodoType) => (
        <Todo todo={todo}></Todo>
      ))}
    </>
  )
}

export default TodoDisplayer
