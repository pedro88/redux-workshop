
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Todo from "./Todo"
import type { TodoType } from "../types"
import AddTodo from "./AddTodo"

import EditTodo from "./EditTodo"

const TodoDisplayer = () => {
  //Hooks -- useDispatch est un custom hook de Redux qui permet d'agir sur le store. Sans useDispatch, impossible de changer l'état de ton App
  const dispatch = useDispatch()

  //Selector -- Les sélectors permettet de "pointer" une partie du store que l'on veut connaitre
  const todos = useSelector((state: RootState) => state.todo.todos)
  const selectedTodo = useSelector((state: RootState) => state.todo.selectedTodo)

  //Debug
  //console.log(todos)

  return (
    <>
      <section className="flex flex-col justify-between w-[50vw] items-center m-auto">
        {todos.map((todo: TodoType) => (
          <div key={todo.id} className="my-2">
            <Todo todo={todo}></Todo>
          </div>
        ))}

        <button
          className="px-5 py-1 hover:scale-105 border-2 bg-fuchsia-200"
          onClick={() => console.log("You should update the state of displayAddTodo... But first you have to build the reducer")}
        >
Add Todo
        </button>
      </section>


        <AddTodo />
        {selectedTodo && <EditTodo/>}

    </>
  )
}

export default TodoDisplayer
