import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";

import store from "./utils/Store.js";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="w-[600px] my-4 mx-auto">
          <h1 className="text-3xl text-center font-bold my-4">Todo App</h1>
          <Form />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}
