export const TodoCreatePage = ({ handleTodoChange, handleSubmit }) => {
  return (
    <>
      <h1>todoCreatePage</h1>
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
          />
        </label>
        <label htmlFor="limitDate">
          期限
          <input
            onChange={handleTodoChange}
            type="date"
            name="limitDate"
            id="limitDate"
          />
        </label>

        <button type="submit">登録</button>
      </form>
    </>
  );
};
