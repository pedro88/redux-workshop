import React, { useState } from "react"
import { TodoType } from "../types"

const EditTodo: React.FC<{ todo: TodoType }> = ({ todo }) => {
  //Local Variables
  const [newTodo, setNewTodo] = useState<TodoType>({
    id: 0,
    todo: todo.todo,
    status: todo.status,
    priority: todo.priority,
  })

  //Handlers
  const handleSubmit = () => {
    //Le submit doit d'une part éditer le Todo si besoin, et d'autre part fermer la modal.
    //par exemple pour changer le nolm du todo en pseudo code ça donnerait quelque chose comme :
    //if (todo.todo != newTodo.todo) { dispatch(changeTodoName(newTodo.todo))}
    //Debug
    //console.log(newTodo)
  }

  return (
    <section className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <section className="flex flex-col bg-amber-500 rounded-xl border-2 w-[50vw]">
        <label htmlFor="todoName">todo :</label>
        <input
          className="border-1 rounded-md"
          id="todoName"
          type="text"
          placeholder={newTodo.todo}
          onChange={e =>
            setNewTodo(prev => ({ ...prev, todo: e.target.value }))
          }
        />

        <label htmlFor="todoStatus">status :</label>
        <select
          name="todoStatus"
          id="todoStatus"
          value={newTodo.status}
          onChange={e =>
            setNewTodo(prev => ({
              ...prev,
              status: e.target.value as "backlog" | "running" | "finish",
            }))
          }
        >
          <option value="backlog">Backlog</option>
          <option value="running">Running</option>
          <option value="finish">Finish</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          value={newTodo.priority}
          onChange={e =>
            setNewTodo(prev => ({
              ...prev,
              priority: Number(e.target.value) as 1 | 2 | 3,
            }))
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <div className="flex items-center justify-center">
          <button
            className="flex hover:scale-105 items-center justify-center w-20 bg-amber-200 border-1 m-5"
            onClick={() => console.log("You should try to dispatch!")}
          >
            Back
          </button>

          <button
            className="flex hover:scale-105 items-center justify-center w-20 bg-amber-200 border-1 m-5"
            onClick={handleSubmit}
          >
            Ok
          </button>
        </div>
      </section>
    </section>
  )
}

export default EditTodo
