/**
 * @file App.jsx
 * @description Main application component that handles routing between home and todo list pages
 * using Material UI tabs for navigation. Implements a dark theme using MUI ThemeProvider.
 */
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from '@mui/material';

import darkTheme from './theme';   // Custom dark MUI theme
import TodoList from './TodoList'; // TodoList component - note capitalization needs to match import

/**
 * App Component
 * 
 * Root component of the application that provides:
 * - A navigation bar with tabs
 * - Theme context for the entire application
 * - Conditional rendering based on selected tab
 * 
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  // State for tracking which tab is currently active
  const [tabValue, setTabValue] = useState(0);

  /**
   * Handles tab change events
   * 
   * @param {Object} event - The event object
   * @param {number} newValue - The index of the newly selected tab
   */
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      {/* 
        Fixed AppBar with centered Tabs
        Provides main navigation for the application
      */}
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Home" />
            <Tab label="Todos" />
          </Tabs>
        </Toolbar>
      </AppBar>

      {/* 
        Main content container
        Has top margin to prevent content from being hidden under the AppBar
        Centers content horizontally and ensures minimum viewport height
      */}
      <Box
        sx={{
          mt: '80px',  // Space between AppBar and content
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {/* Home tab content - only visible when first tab is selected */}
        {tabValue === 0 && (
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to My Todo App
            </Typography>
            <Typography variant="body1">
              This is the home screen. Go see the todos tab now.
            </Typography>
          </Box>
        )}

        {/* Todos tab content - only visible when second tab is selected */}
        {tabValue === 1 && <TodoList />}
      </Box>
    </ThemeProvider>
  );
}

export default App;