import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todos } from "./containers/Todos";
import { TodoDetail } from "./containers/TodoDetail";
import { TodoCreate } from "./containers/TodoCreate";
import { TodoUpdate } from "./containers/TodoUpdate";
import { TodoDelete } from "./containers/TodoDelete";

function App() {
  return (
    <>
      <h1>React Todo App</h1>

      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Todos />} />
          <Route path={`/create`} element={<TodoCreate />} />
          <Route path={`/todo/:id`} element={<TodoDetail />} />
          <Route path={`/update/:id`} element={<TodoUpdate />} />
          <Route path={`/delete/:id`} element={<TodoDelete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
