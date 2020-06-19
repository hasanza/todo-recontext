//This is the reducer function.

export default (state, action) => {
  //switch is an alternative to if(). More concise and readable.
  switch (action.type) {
    //if action.type is ADD_TODO, then...
    case "ADD_TODO":
      //..."spread" the state object, return a new state with the change that the payload item (the latest todo) is appended (added at the end) to the state.todos array.
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        //spread the state, return a new state with the todos array changed in that todo matching the payload id is not included in the array.
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
