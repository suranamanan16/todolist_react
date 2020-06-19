import React from 'react';
import TodoItem from "./TodoItem"
import style from './style.module.css';


function App() {
    return (
      <div className={style.todolist}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
    )
}

export default App
