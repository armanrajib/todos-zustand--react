import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useTodoStore = create(
  devtools((set) => ({
    todos: [],

    // Add a new todo
    addTodo: (text) =>
      set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }],
      })),

    // Remove a todo
    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),

    // Toggle a todo
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
  }))
);

export default useTodoStore;
