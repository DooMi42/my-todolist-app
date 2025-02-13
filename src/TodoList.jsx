import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: '' });

    // Handle changes in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    // Add a new task to the list
    const addTodo = () => {
        if (todo.description.trim() === '' || todo.date.trim() === '') {
            alert('Fill both fields!');
            return;
        }
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    };

    // Remove a task from the list
    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <h2>Add todo's here</h2>
            <div>
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
            </div>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item.description} - {item.date}{' '}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
