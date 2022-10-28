import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import Todolist from "./components/Todolist";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
  background: #e9ecef;
}
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <Todolist />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
