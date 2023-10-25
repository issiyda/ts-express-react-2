export const TodoDetailPage = ({ todo }) => {
  console.log("todo", todo);

  return (
    <>
      <h1>todoDetailPage</h1>
      <p>{todo.title}</p>
      <p>{todo.done ? "完了" : "未完了"}</p>
      <p>{todo.limitDate}</p>
    </>
  );
};
