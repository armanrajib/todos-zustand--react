import { useState } from "react";

import useTodoStore from "../store/todoStore";

function AddTodoForm() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  function handleAddTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleAddTodo} className="flex justify-between gap-2 mb-4">
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-3 py-2 border border-zinc-300 rounded"
      />
      <button
        type="submit"
        className="transition duration-200 ease-in-out transform bg-blue-500 hover:bg-blue-600 ml-2 px-6 text-white text-lg rounded"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
