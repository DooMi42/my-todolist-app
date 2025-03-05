import React from 'react';
import TodoList from './TodoList.jsx'; // Import the Todolist component
import './App.css';

/**
 * App
 * The root component of the application.
 * Renders the Todolist component, which handles the todo logic.
 */
function App() {
  return (
    <div className="App">
      <h1>Todo List App with ag-grid</h1>
      <TodoList /> {/* Render the Todolist component */}
    </div>
  );
}

export default App;
