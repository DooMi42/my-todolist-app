import React, { useState } from 'react';
import TodoTable from './TodoTable';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: null, priority: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (newDate) => {
        setTodo((prev) => ({ ...prev, date: newDate }));
    };

    const addTodo = () => {
        if (!todo.description.trim() || !todo.date || !todo.priority.trim()) {
            alert('Please fill in description, date, and priority!');
            return;
        }
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: null, priority: '' });
    };

    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <div>
                {/* Task description input */}
                <input
                    type="text"
                    name="description"
                    placeholder="Task description"
                    value={todo.description}
                    onChange={handleChange}
                    style={{
                        backgroundColor: '#222',
                        color: '#ccc',
                        border: '1px solid #666',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        marginRight: '8px'
                    }}
                />

                {/* MUI DatePicker with spacing on the right and bottom */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Select date"
                        value={todo.date}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                sx={{
                                    // Add margin to the right (mr) and bottom (mb)
                                    mr: 2,
                                    mb: 2,
                                    // Other styling overrides
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: '#222',
                                        borderRadius: '4px',
                                        '& fieldset': {
                                            borderColor: '#666',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#aaa',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#aaa',
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: '#ccc'
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#ccc'
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#ccc'
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: '#ccc'
                                    }
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>

                {/* Priority input */}
                <input
                    type="text"
                    name="priority"
                    placeholder="Priority (e.g., High, Medium, Low)"
                    value={todo.priority}
                    onChange={handleChange}
                    style={{
                        backgroundColor: '#222',
                        color: '#ccc',
                        border: '1px solid #666',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        marginRight: '8px'
                    }}
                />

                {/* Add button */}
                <button
                    onClick={addTodo}
                    style={{
                        backgroundColor: '#444',
                        color: '#fff',
                        border: '1px solid #666',
                        borderRadius: '4px',
                        padding: '4px 8px'
                    }}
                >
                    Add
                </button>
            </div>

            {/* Todo table */}
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Todolist;
