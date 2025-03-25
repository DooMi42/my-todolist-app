/**
 * @file TodoList.jsx
 * @description Main component for todo list functionality including input form and data display.
 * Manages state for todos, implements add/delete operations, and renders the todo table.
 * Uses Material UI components for a consistent design with the rest of the application.
 */
import React, { useState } from 'react';
import { Box, Stack, TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';

import TodoTable from './TodoTable';

/**
 * TodoList Component
 * 
 * Provides a complete todo list interface with:
 * - Input form for adding new todos with description, date, and priority
 * - Data validation before adding new todos
 * - Integration with TodoTable for displaying existing todos
 * - Delete functionality for removing todos
 * 
 * @returns {JSX.Element} Complete todo list interface with form and table
 */
const TodoList = () => {
    /**
     * State for storing the list of todo items
     * @type {Array} Array of todo objects with description, date, and priority
     */
    const [todos, setTodos] = useState([]);

    /**
     * State for the current todo being created
     * @type {Object} Todo object with description, date, and priority fields
     */
    const [todo, setTodo] = useState({ description: '', date: null, priority: '' });

    /**
     * Handles input field changes for text inputs (description and priority)
     * Updates the todo state object using the input field name as the property key
     * 
     * @param {Object} e - The input change event
     * @param {string} e.target.name - The name of the input field that changed
     * @param {string} e.target.value - The new value of the input field
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo((prev) => ({ ...prev, [name]: value }));
    };

    /**
     * Handles date picker changes
     * Updates only the date property in the todo state object
     * 
     * @param {Date|null} newDate - The selected date object or null if cleared
     */
    const handleDateChange = (newDate) => {
        setTodo((prev) => ({ ...prev, date: newDate }));
    };

    /**
     * Adds the current todo to the todos list
     * Validates that all required fields are filled before adding
     * Adds new todo to the beginning of the list (newest first)
     * Resets the input form after successful addition
     */
    const addTodo = () => {
        // Validate that all required fields are filled
        if (!todo.description.trim() || !todo.date || !todo.priority.trim()) {
            alert('Please fill in description, date, and priority!');
            return;
        }

        // Add new todo to the beginning of the list and reset form
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: null, priority: '' });
    };

    /**
     * Deletes a todo from the list based on its index
     * Uses array filter to create a new array without the specified todo
     * 
     * @param {number} indexToDelete - The index of the todo to remove
     */
    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '900px',    // Limit content width
                mx: 'auto',           // Center horizontally
                textAlign: 'center',  // Optional: center text
            }}
        >
            {/* Input form for adding new todos */}
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mb: 2 }}
            >
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={todo.description}
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date"
                        value={todo.date}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                    label="Priority"
                    variant="outlined"
                    name="priority"
                    value={todo.priority}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" onClick={addTodo}>
                    ADD
                </Button>
            </Stack>

            {/* Table displaying all todos with delete functionality */}
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </Box>
    );
};

export default TodoList;