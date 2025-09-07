import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/TodoSlice";

export default function Form() {
  const [inputStr, setInputStr] = useState("");
  const dispatcher = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputStr("");
    dispatcher(addTodo(inputStr));
  }
  return (
    <div>
      <form className="flex justify-center my-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
            className="border-2 rounded-lg px-4 py-2"
            placeholder="Add todo"
          />
        </div>
        <div>
          <button type="submit" className="bg-red-400 ml-2 cursor-pointer px-4 py-2 rounded-lg">
            <Plus size={28} color="white"/>
          </button>
        </div>
      </form>
    </div>
  );
}
