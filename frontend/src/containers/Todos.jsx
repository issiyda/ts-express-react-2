import { useState, useEffect } from "react";
import { TodosPage } from "../components/pages/TodosPage";

export const Todos = () => {
  const [todos, setTodos] = useState("");

  const fetchTodos = async () => {
    console.log("fetch");

    try {
      const res = await fetch(`http://localhost:8000/todos`);
      const data = await res.json();
      setTodos(data);
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchTodos();
    })();
  }, []);

  return <TodosPage todos={todos} />;
};
