import { useState, useEffect } from "react";
import { TodoUpdatePage } from "../components/pages/todoUpdatePage";
import { useParams } from "react-router-dom";

export const TodoUpdate = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();

  const fetchTodo = async () => {
    try {
      const res = await fetch(`http://localhost:8000/todo/${id}`);
      const data = await res.json();
      setTodo({
        ...data,
        done: data.done ? "完了" : "未完了",
      });
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchTodo();
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
        method: "PUT",
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

  if (!todo) {
    return "loading";
  }

  return (
    <TodoUpdatePage
      todo={todo}
      handleTodoChange={handleTodoChange}
      handleSubmit={handleSubmit}
    />
  );
};
