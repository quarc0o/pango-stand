import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodos([
        ...todos,
        { id: `${Date.now()}-${todos.length}`, text: input },
      ]);
      setInput("");
    }
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className="App container mx-auto mt-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        My Todo List
      </h1>
      <form onSubmit={addTodo} className="flex justify-center mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 p-2 w-full mr-4 transition-colors"
          placeholder="What needs to be done?"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Add Todo
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center mb-4 bg-white shadow-md rounded-lg p-4"
          >
            <span className="text-lg text-gray-700">{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
