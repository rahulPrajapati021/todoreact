# Redux 
Redux is a state management library. 

#### What does it mean ?
Let's say we have 2 component in our app that depends on a same state. 
In our case its todos list. 
You will go to TodoList.jsx and see, it gets todoList as a state. And we have another component 
which manuplate the state. Here it is Form.jsx component & 2 buttons in TodoList.jsx itself.

So now one of the solution to pass this todo state from one component to another is props drilling. 
We can create todoList state in App.jsx & pass it as a prop to both the components. 
But props drilling can cause issues and make our app closed couple. 
So instead of passing states in heirarcical manner, we can create a centralized store from where we can subscribe for the state. Now for this purpose we use redux. 

### Working flow of redux - 
To understand how redux works we need to understand following terminology first - 
1. Store
2. Slices
3. Reducers
4. useSelector & useDispatch
5. actions

So starting with store 
* Store is a centralized place where reducers are passed.  
* Slices are the encapsulation layer that defines  state & methods together.
* Reducers are the functions that manuplate the state. 
* useSelector & useDispatch are the hooks that helps to subscribe for the state & dispatch our actions like dispatcher(addTodo("myTodoValue"));
* actions are the events we want to emit. 

## Basic steps to set redux store

1. Create a redux store file store.js
```javascript
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
    reducer: {},()
})
```

2. Now Create Slice file todoSlice.js
```javascript
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList"
    initialValue: {
        value: [],
    }
    reducers: {
        addTodo: (state, action) => {
            state.push({id: state.value.length, content: action.payload});
        }
        deleteTodo: (state, action) => {
            state.value = state.value.filter(e => e.id != action.payload);
        },
    }
})
// below statement translates reducers function to action names that we will dispatch in components
export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
```
3. Now update our store.js with current todoSlice reducers.

```javascript
import { configureStore } from "@reduxjs/toolkit";
// importing without {} so that default export will work & todoSlice.reducer will get picked.
import todoReducer from "./todoSlice.js";
export default configureStore({
    reducer: {
        todos: todoReducer;
    },
})
```
4. Wrap our app in provider component
```javascript
import { Provider } from "react-redux";
import store from "./utils/Store.js";

export default function App() {
  return (
    <Provider store={store}>
      <h1>MyApp</h1>
    </Provider>
  );
}
```


* We can create as many slices we want to create 
& define them in store's reducer directory. 

## Now, how to use this states store 

1. To get the state we can use useSelector function. 
```javascript
import { useSelector } from "react-redux";
export default function TodoList() {
  const list = useSelector((state) => state.todos.value);
  return <div>
  {list.map(e => <div key={e.id}>{e.content}</div>)}
  </div>;
}
```

2. To manuplate state we can use useDispatch hook.
``` javascript
import {useState} from "react";
import {useDipatch} from "react-redux";
export default function Form() {
    const [inputValue, setInputValue] = useState("");
    const dispatcher = useDispatch();
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(addTodo(inputValue));
    setInputValue("");
  }
    return 
    <div>
        <form>
            <input 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)}
            />
            <button type="submit" 
            onClick={handleSubmit}>Add</button>
        </form>
    </div>
}
```