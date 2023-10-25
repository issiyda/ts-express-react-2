import { useState, useEffect } from "react";
import { TodoDetailPage } from "../components/pages/todoDetailPage";
import { useParams } from "react-router-dom";

export const TodoDetail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState("");

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

  return <TodoDetailPage todo={todo} />;
};
