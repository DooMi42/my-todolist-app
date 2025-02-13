import React, { useState } from 'react';

const TodoList = () => {
    // State for the list of to do items
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    };

    const addTodo = () => {
        if (todo.description.trim() === '' || todo.date.trim() === '') {
            alert('Fill both fields!');
            return;
        }
        // Add new to do to the beginning of the list
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                name="description"
                placeholder="Description of the task"
                value={todo.description}
                onChange={handleChange}
            />
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleChange}
            />
            <button onClick={addTodo}>Add task</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item.description} - {item.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
