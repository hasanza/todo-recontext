//along with react, we also import these two
import React, { createContext, useReducer } from "react";
//importing the reducer function which will do/ handle all the state changes
import AppReducer from "../context/AppReducer";

//This is the initial state. State will be set by default to this value. I just chose an empty tody array as initial state.
const initialState = {
  todos: [],
};

//creating and exporting this context. This way, all the children inside the Provider wrapper are able to access
//the state and whatever is in the Global provider
export const GlobalContext = createContext(initialState);

//creating and exporting the GlobalPrivder wrapper. Children variable here refers to any component inside this wrapper.
export const GlobalProvider = ({ children }) => {

  //setting our state to initialState and telling React that any state changes will be handled by the AppReducer function.
  const [state, dispatch] = useReducer(AppReducer, initialState);

//functions which affect the state. Inside them, we are calling the dispatch func with our action object as argument. The action object has 
//two properties: type (tells the reducer what to do) and payload, which sends data along that is to be used by the reducer.

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }
  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  }

  
  return (
    //all the components inside the provider wrapper can access these functions by using the useContext hook. See, for instance, line 6 Todo.jsx.
    //"children" on line 48 refers to the components inside the Provider wrapper. See App.js file.
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
      }}
    >
      {children} 
    </GlobalContext.Provider>
  );
};
