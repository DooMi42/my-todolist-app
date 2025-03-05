import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';

/**
 * PriorityCellRenderer
 * A custom cell renderer for the "Priority" column.
 * Displays the priority text in a color based on whether it's "High," "Medium," or "Low."
 */
function PriorityCellRenderer(props) {
    const priority = props.value || '';
    let style = {};
    switch (priority.toLowerCase()) {
        case 'high':
            style = { color: 'red', fontWeight: 'bold' };
            break;
        case 'medium':
            style = { color: 'orange', fontWeight: 'bold' };
            break;
        case 'low':
            style = { color: 'green', fontWeight: 'bold' };
            break;
        default:
            style = {};
    }
    return <span style={style}>{priority}</span>;
}

/**
 * DeleteButtonRenderer
 * A custom cell renderer for the "Actions" column.
 * Renders a "Delete" button that calls the `deleteTodo` function passed via the grid's context.
 */
function DeleteButtonRenderer(props) {
    // Access the deleteTodo function from the context
    const { deleteTodo } = props.context;
    return (
        <button
            style={{
                backgroundColor: '#444',
                color: '#fff',
                border: '1px solid #666',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer'
            }}
            onClick={() => deleteTodo(props.node.rowIndex)}
        >
            Delete
        </button>
    );
}

/**
 * TodoTable
 * Stateless component that uses AG Grid to display a list of todos.
 * Receives 'todos' data and 'deleteTodo' function as props from the parent component.
 */
const TodoTable = ({ todos, deleteTodo }) => {
    // Define column definitions using useMemo to avoid re-creating them on each render
    const columnDefs = useMemo(() => [
        {
            headerName: 'Description',
            field: 'description',
            sortable: true,       // Must be true to enable sorting
            filter: true,         // Enables column filtering
            floatingFilter: true  // Shows a floating filter row under the header
        },
        {
            headerName: 'Date',
            field: 'date',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Priority',
            field: 'priority',
            sortable: true,
            filter: true,
            floatingFilter: true,
            cellRenderer: PriorityCellRenderer // Use our custom renderer to color-code the priority
        },
        {
            headerName: 'Actions',
            cellRenderer: DeleteButtonRenderer // Use our custom renderer to display a "Delete" button
        }
    ], []);

    // Default column properties, including unSortIcon to always show the sort icon
    const defaultColDef = useMemo(() => ({
        flex: 1,
        minWidth: 120,
        resizable: true,
        unSortIcon: true // Always display the sort icon (even when unsorted)
    }), []);

    return (
        // AG Grid container with Alpine theme. Adjust class name if you want a dark theme.
        <div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                modules={[ClientSideRowModelModule]}
                columnDefs={columnDefs}
                rowData={todos}
                defaultColDef={defaultColDef}
                animateRows={true}
                context={{ deleteTodo }}
            />
        </div>
    );
};

export default TodoTable;
