import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
//a simple library for generating unique ids
import { v1 as uuid } from "uuid";

export const AddTodo = () => {
  const [input, setInput] = useState("");

  const { addTodo } = useContext(GlobalContext);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    //prevents default behaviour of submit event which is to refresh the webpage
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      text: input,
    };
    addTodo(newTodo);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
};
