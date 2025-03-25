/**
 * @file theme.js
 * @description Custom Material UI theme configuration.
 * Defines the dark theme used throughout the application including colors,
 * typography, and component style overrides.
 */
import { createTheme } from '@mui/material/styles';

/**
 * Custom dark theme configuration for Material UI
 * 
 * Extends the default Material UI theme with custom:
 * - Color palette (primary, secondary, background colors)
 * - Typography settings
 * - Component style overrides
 * - Spacing and breakpoint configurations
 */
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9', // Example light blue
            // ... other primary color variants
        },
        secondary: {
            main: '#f48fb1', // Example pink
            // ... other secondary color variants
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        // ... other color definitions
    },

    typography: {
        // Font family, sizes, weights, etc.
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        // ... other typography settings
    },

    components: {
        // Component-specific style overrides
        MuiButton: {
            styleOverrides: {
                // Button style customizations
            },
        },
        // ... other component overrides
    },

    // ... other theme configurations
});

export default darkTheme;