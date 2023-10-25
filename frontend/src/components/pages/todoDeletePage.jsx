export const TodoDeletePage = ({ todo, handleSubmit }) => {
  console.log("todo", todo);

  return (
    <>
      <h1>TodoDeletePage</h1>

      <p>{todo.title}</p>
      <button onClick={handleSubmit}>削除する</button>
    </>
  );
};
