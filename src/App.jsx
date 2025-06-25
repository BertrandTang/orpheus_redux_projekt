import { useState } from "react";
// Hook react-redux qui permet de lire et d'envoyer une action au store Redux
import { useSelector, useDispatch } from "react-redux";
// Nos actions
import { addTodo, toggleTodo } from "./redux/todoSlice";
// Nos selectors
import { selectTodos, selectCompletedTodos } from "./redux/selectors";

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <h1>Liste des tâches</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.text}
          </li>
        ))}
      </ul>
      <h2>Tâches terminées</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
