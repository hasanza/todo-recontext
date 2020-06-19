import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Todo = ({ todo }) => {
  //here we are destructuring the object returned by the GlobalContext.
  // via object destructuring, we are only taking out the property we want which is deleteTodo function.
  const { deleteTodo } = useContext(GlobalContext);
  //without destructuring, we would write this:
  //const deleteTodo = useContext(GlobalContext).deleteTodo;
  return (
    <>
      <li style={{listStyle: "none"}}>
        {todo.text}
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Todo;
