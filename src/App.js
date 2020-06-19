import React from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { GlobalProvider } from "./context/GlobalState";
import {AddTodo} from './components/AddTodo';
import "./App.css";

function App() {
  return (
    <>
      <GlobalProvider>
        <div style={{textAlign:"center"}}>
          <Header />
          <TodoList />
          <AddTodo />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
