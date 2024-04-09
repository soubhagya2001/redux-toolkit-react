import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="mt-8 mb-4 text-2xl font-bold">Todos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-gray-800 p-4 rounded-lg flex flex-col justify-center items-center"
            style={{ maxWidth: "300px", minHeight: "200px" }}
          >
            <div className="text-white text-center">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="mt-4 bg-red-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
