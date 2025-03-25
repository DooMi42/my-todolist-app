/**
 * @file TodoTable.jsx
 * @description Implements a data grid for displaying and interacting with todo items.
 * Uses AG Grid for advanced table features including sorting, filtering, and custom cell rendering.
 * Provides a responsive and interactive table interface with custom styling for priorities.
 */
import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';

/**
 * PriorityCellRenderer Component
 * 
 * A custom cell renderer for the "Priority" column that provides visual differentiation.
 * Renders priority values with color coding:
 * - High: Red, bold text
 * - Medium: Orange, bold text
 * - Low: Green, bold text
 * 
 * @param {Object} props - The props from AG Grid
 * @param {string} props.value - The cell value (priority text)
 * @returns {JSX.Element} Color-coded priority text
 */
function PriorityCellRenderer(props) {
    const priority = props.value || '';
    let style = {};

    // Determine text styling based on priority level
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
 * DeleteButtonRenderer Component
 * 
 * A custom cell renderer for the "Actions" column.
 * Renders an interactive delete button that triggers the deleteTodo function
 * when clicked, passing the current row index.
 * 
 * @param {Object} props - The props from AG Grid
 * @param {Object} props.context - The grid context containing shared functions
 * @param {Function} props.context.deleteTodo - Function to delete a todo
 * @param {Object} props.node - The row node information
 * @param {number} props.node.rowIndex - The index of the current row
 * @returns {JSX.Element} Delete button UI element
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
 * TodoTable Component
 * 
 * Displays todo items in an AG Grid table with advanced features:
 * - Sortable and filterable columns
 * - Custom cell renderers for priority visualization
 * - Interactive delete buttons
 * - Resizable columns
 * - Animated row transitions
 * 
 * @param {Object} props - Component props
 * @param {Array} props.todos - Array of todo objects to display
 * @param {Function} props.deleteTodo - Function to delete a todo by index
 * @returns {JSX.Element} The AG Grid table UI
 */
const TodoTable = ({ todos, deleteTodo }) => {
    /**
     * Column definitions for the AG Grid
     * Uses useMemo to avoid unnecessary re-creation on renders
     */
    const columnDefs = useMemo(() => [
        {
            headerName: 'Description',
            field: 'description',
            sortable: true,       // Enable column sorting
            filter: true,         // Enable column filtering
            floatingFilter: true  // Show filter input below column header
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
            cellRenderer: PriorityCellRenderer // Custom renderer for priority visualization
        },
        {
            headerName: 'Actions',
            cellRenderer: DeleteButtonRenderer // Custom renderer for delete functionality
        }
    ], []);

    /**
     * Default column configuration applied to all columns
     * Uses useMemo to avoid unnecessary re-creation on renders
     */
    const defaultColDef = useMemo(() => ({
        flex: 1,                // Flexible width columns
        minWidth: 120,          // Minimum width constraint
        resizable: true,        // Allow column resizing
        unSortIcon: true        // Always display the sort icon (even when unsorted)
    }), []);

    return (
        // AG Grid container with Alpine dark theme for better visibility in dark mode
        <div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                modules={[ClientSideRowModelModule]} // Required module for client-side data processing
                columnDefs={columnDefs}              // Column configuration
                rowData={todos}                      // Data to display
                defaultColDef={defaultColDef}        // Default column properties
                animateRows={true}                   // Enable row animations
                context={{ deleteTodo }}             // Pass deleteTodo function to cell renderers
            />
        </div>
    );
};

export default TodoTable;