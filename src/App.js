import { useState } from "react";
import PangoLogo from "./assets/pangologo.png";

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
      <img src={PangoLogo} alt="Pango Logo" height={80} width={80} />
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Pango Todo-list
      </h1>
      <form onSubmit={addTodo} className="flex justify-center mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-0 border-b-2 border-red-500 focus:border-blue-500 focus:ring-0 p-2 w-full mr-4 transition-colors"
          placeholder="Hva må gjøres?"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          aria-label="Add Todo"
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
            <span className="text-lg text-gray-700">
              {todo.text[0].toUpperCase() + todo.text.slice(1)}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Slett
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
