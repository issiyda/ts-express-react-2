import { useState, useEffect } from "react";
import { TodoDeletePage } from "../components/pages/todoDeletePage";
import { useParams } from "react-router-dom";

export const TodoDelete = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState("");

  const fetchTodo = async () => {
    try {
      const res = await fetch(`http://localhost:8000/todo/${id}`);
      const data = await res.json();
      setTodo(data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm(`${todo.title}を削除しますか？`)) {
        const res = await fetch(`http://localhost:8000/todo/${id}`, {
          method: "DELETE",
        });
        alert(`${res.id}のTODOを削除しました`);
      }
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };

  return <TodoDeletePage todo={todo} handleSubmit={handleSubmit} />;
};
