import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  
  //create function to pass data from parent component to child component
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  //create delete todo list button--to delete todo data
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">Your TODO List...</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
