import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, loadTodos, markTodoDone } from "../utils/TodoSlice";
import { useEffect } from "react";
import {TodoStorage} from '../utils/TodoStorage.js'

export default function TodoList() {
  const list = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    let todos = TodoStorage.getTodos();
    if(todos && todos.length > 0) {
        dispatch(loadTodos(todos));
    }
  }, [])
  const doneHandler = (id) => {
    dispatch(markTodoDone(id))
  };
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {list.map((e) => (
        <div
          key={e.id}
          className={`flex px-2 py-2 my-2 justify-evenly items-center rounded-lg ${e.done?"bg-green-300":"bg-gray-200"}`}
        >
          <div className="w-1/2 text-center">{e.content}</div>
          <div className="" id="actions">
            <button
              className="px-2 py-1 border-2 cursor-pointer border-black rounded-md text-white bg-green-500"
              onClick={(event) => doneHandler(e.id)}
            >
              Mark Done
            </button>
            <button
              className="px-2 py-1 border-2 cursor-pointer border-black rounded-md text-white bg-red-500 ml-2"
              onClick={(event) => deleteHandler(e.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
