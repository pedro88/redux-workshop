
import { useState } from "react"
import { TodoType } from "../types"
import { useDispatch } from "react-redux"
import { displayAddTodo } from "../redux/todoSlice"

const AddTodo = () => {
  //Local Variables
  const [newTodo, setNewTodo] = useState<TodoType>({
    id: 0,
    todo: "",
    status: "backlog",
    priority: 1,
  })
    
    //Hooks
    const dispatch = useDispatch()

  //Handlers
    const handleSubmit = () => {
      //Le submit doit d'une part ajouter un nouveau todo, et d'autre part fermer la modal.
      //Vérifie bien que dans ton Slice tu as un reducer qui permet de créer un todo
      
      //Debug
      //console.log(newTodo)
    }

  return (
    <section className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <section className=" bg-amber-50 rounded-xl border-2 w-[33vw]">
        <div className="m-2 p-2 flex flex-col">
        <h1 className="text-4xl">Add Todo</h1>
          <label htmlFor="todoName">todo :</label>
          <input
            className="border-1 rounded-md"
            id="todoName"
            type="text"
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
              // On utilise dispatch pour agir directement sur le store par le biai des reducers que nous avons défini dans notre Slice
              // En fait le Slice est un "morceau" du store, il permet de découper le store en plusieurs petits bout pour organiser au mieu le travail
              onClick={() => dispatch(displayAddTodo(false))}
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
        </div>
      </section>
    </section>
  )
}

export default AddTodo
