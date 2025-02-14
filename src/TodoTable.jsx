import React from 'react';

// Stateless component that renders a table with todo items
const TodoTable = ({ todos, deleteTodo }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((item, index) => (
                    <tr key={index}>
                        <td>{item.description}</td>
                        <td>{item.date}</td>
                        <td>
                            {/* When the Delete button is clicked, call deleteTodo with the current index */}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoTable;
