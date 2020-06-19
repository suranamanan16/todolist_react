import React from "react"
import style from "./style.module.css"

function TodoItem(){
  return(
      <div>
        <input type="checkbox" className={style.todoitem} />
        <p>Placeholder text here</p>
      </div>
  )
}

export default TodoItem
