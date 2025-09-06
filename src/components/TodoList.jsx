import React from "react";

const list = [
  { id: 1, content: "test todo", done: false },
  { id: 2, content: "second test", done: false },
  { id: 3, content: "third todo", done: true },
];
export default function TodoList() {
    const doneHandler = (e) => {};
    const deleteHandler = (e) => {};
  return (
    <div>
      {list.map((e) => (
        <div key={e.id}>
            <div className="">{e.content}</div>
            <div className="" id="actions">
                <button onClick={doneHandler}>Mark Done</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
      ))}
    </div>
  );
}
