import { AnimatePresence } from "framer-motion";

import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <AnimatePresence>
      <ul className="todo-list-container">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </AnimatePresence>
  );
}

export default TodoList;
