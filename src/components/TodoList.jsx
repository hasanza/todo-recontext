import React, { useContext } from "react";
import Todo from "../components/Todo";
import { GlobalContext } from "../context/GlobalState";

export const TodoList = () => {
    //taking out todos property of GlobalContext object and assigning it to todos via object destructuring syntax.
  const { todos } = useContext(GlobalContext);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo}></Todo>;
        })}
      </ul>
    </>
  );
};
