import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme'; // import the theme we created
import TodoList from './TodoList.jsx'; // Import the Todolist component
import './App.css';

/**
 * App
 * The root component of the application.
 * Renders the Todolist component, which handles the todo logic.
 */

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <h1>Todo List App with ag-grid</h1>
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
