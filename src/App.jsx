import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <div className="w-[600px] border-2 m-auto">
        <h1 className="text-3xl text-center font-bold">Todo App</h1>
        <Form />
        <TodoList />
      </div>
    </div>
  );
}
