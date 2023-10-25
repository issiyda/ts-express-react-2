import { useState, useEffect } from "react";
import { TodoCreatePage } from "../components/pages/TodoCreatePage";

export const TodoCreate = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:8000/todos");
      const data = await res.json();
      console.log("data", data);
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

  const handleTodoChange = (e) => {
    if (e.target.name === "done") {
      if (e.target.value === "完了") {
        setTodo({
          ...todo,
          [e.target.name]: true,
        });
      } else {
        setTodo({
          ...todo,
          [e.target.name]: false,
        });
      }
      return;
    }

    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("todo", todo);

    try {
      const res = fetch("http://localhost:8000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      console.log("res", res);
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  return (
    <TodoCreatePage
      handleTodoChange={handleTodoChange}
      handleSubmit={handleSubmit}
    />
  );
};
