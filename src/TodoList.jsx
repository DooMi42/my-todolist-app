import React, { useState } from 'react';
import TodoTable from './TodoTable'; // Import the TodoTable component

const Todolist = () => {
    // State for storing the list of todo items and the current todo being entered
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: '' });

    // Handle input field changes for both description and date
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    // Add a new todo item to the list
    const addTodo = () => {
        // Ensure both the description and date fields are filled in
        if (todo.description.trim() === '' || todo.date.trim() === '') {
            alert('Please fill in both fields!');
            return;
        }
        // Add the new todo item at the beginning of the todos array
        setTodos([todo, ...todos]);
        // Reset the input fields
        setTodo({ description: '', date: '' });
    };

    // Delete a todo item based on its index
    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <h2>Add todo's here</h2>
            <div>
                {/* Input for task description */}
                <input
                    type="text"
                    name="description"
                    placeholder="Task description"
                    value={todo.description}
                    onChange={handleChange}
                />
                {/* Input for task date */}
                <input
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={handleChange}
                />
                {/* Button to add a new task */}
                <button onClick={addTodo}>Add Task</button>
            </div>
            {/* Render the TodoTable component, passing todos and the deleteTodo function as props */}
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Todolist;
