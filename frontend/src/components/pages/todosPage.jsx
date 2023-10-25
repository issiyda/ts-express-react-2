export const TodosPage = ({ todos }) => {
  console.log("todos", todos);

  if (!todos) {
    return "loading";
  }

  return (
    <>
      <h1>todosPage</h1>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.done ? "完了" : "未完了"}</p>
            <p>{todo.limitDate}</p>
          </div>
        );
      })}
    </>
  );
};
