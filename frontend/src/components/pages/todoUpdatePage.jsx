export const TodoUpdatePage = ({ todo, handleTodoChange, handleSubmit }) => {
  console.log("todo", todo);

  const date = new Date(todo.limitDate);
  const formDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate()}`;
  console.log("formDate", formDate);

  return (
    <>
      <h1>todoUpdatePage</h1>
      <form
        action="
      "
        onSubmit={handleSubmit}
      >
        <label htmlFor="todo">
          タイトル
          <input
            onChange={(e) => handleTodoChange(e)}
            type="text"
            name="title"
            id="todo"
            value={todo.title}
          />
        </label>
        <label htmlFor="done">
          完了
          <input
            onChange={handleTodoChange}
            type="radio"
            name="done"
            id="done"
            value="完了"
            checked={todo.done === "完了"}
          />
        </label>
        <label htmlFor="unDone">
          未完了
          <input
            onChange={handleTodoChange}
            type="radio"
            name="done"
            id="unDone"
            value="未完了"
            checked={todo.done === "未完了"}
          />
        </label>
        <label htmlFor="limitDate">
          期限
          <input
            onChange={handleTodoChange}
            type="date"
            name="limitDate"
            id="limitDate"
            value={formDate}
          />
        </label>

        <button type="submit">更新</button>
      </form>
    </>
  );
};
