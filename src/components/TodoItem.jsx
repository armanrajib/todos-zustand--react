import { motion } from "framer-motion";

import useTodoStore from "../store/todoStore";

function TodoItem({ todo }) {
  const { removeTodo, toggleTodo } = useTodoStore();

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      layout
      className="flex items-center mb-4 px-4 py-3 bg-slate-100 rounded"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="form-checkbox h-5 w-5"
      />

      <span className={`flex-1 ml-2 ${todo.completed ? "line-through" : ""}`}>
        {todo.text}
      </span>

      <button
        onClick={() => removeTodo(todo.id)}
        className="px-2 py-1 bg-rose-500 text-white rounded"
      >
        Delete
      </button>
    </motion.li>
  );
}

export default TodoItem;
