import React from 'react';
import TodoList from './TodoList.jsx'; // Import the Todolist component
import './App.css';

// Root component of the application
function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TodoList /> {/* Render the Todolist component */}
    </div>
  );
}

export default App;
