import React, { useState } from 'react';
import TodoTable from './TodoTable';


/**
 * Todolist
 * This component manages the todo state, input fields, and the add/delete functionality.
 * It renders the TodoTable component, passing the current list of todos and a delete function.
 */
const Todolist = () => {

    // State for storing the list of todo items
    const [todos, setTodos] = useState([]);

    // State for the currently entered todo (description, date, and priority)
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' });

    /**
     * handleChange
     * Updates the 'todo' state as the user types in the input fields.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    /**
     * addTodo
     * Validates the input fields and adds a new todo item to the 'todos' array if valid.
     */
    const addTodo = () => {
        // Ensure description, date, and priority are all provided
        if (
            todo.description.trim() === '' ||
            todo.date.trim() === '' ||
            todo.priority.trim() === ''
        ) {
            alert('Please fill in description, date, and priority!');
            return;
        }

        // Add the new todo at the beginning of the todos array
        setTodos([todo, ...todos]);

        // Reset the input fields
        setTodo({ description: '', date: '', priority: '' });
    };

    /**
     * deleteTodo
     * Removes a todo item by filtering it out of the 'todos' array based on its index.
     */
    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
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

                {/* Input for task priority */}
                <input
                    type="text"
                    name="priority"
                    placeholder="Priority (e.g., High, Medium, Low)"
                    value={todo.priority}
                    onChange={handleChange}
                />

                {/* Button to add a new task */}
                <button onClick={addTodo}>Add</button>
            </div>

            {/* Render the TodoTable component, passing todos and deleteTodo as props */}
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Todolist;
