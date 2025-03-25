/**
 * @file theme.js
 * @description Custom Material UI theme configuration for the Todo application.
 * Implements a dark theme with consistent styling across all components.
 * Includes overrides for form elements, buttons, and date picker components
 * to ensure a cohesive dark mode experience.
 */
import { createTheme } from '@mui/material/styles';

/**
 * Custom dark theme configuration
 * 
 * Extends Material UI's default theme with:
 * - Dark mode color palette
 * - Custom component styling overrides
 * - Consistent styling for form inputs and date pickers
 */
const darkTheme = createTheme({
    /**
     * Color palette configuration
     * Sets overall color scheme for the application
     */
    palette: {
        mode: 'dark',                  // Enable MUI's built-in dark mode
        primary: { main: '#ccc' },     // Light gray as primary color
        background: {
            default: '#222',           // Dark gray page background
            paper: '#222'              // Matching component background for consistency
        },
        text: {
            primary: '#ccc'            // Light gray text for better readability on dark backgrounds
        }
    },

    /**
     * Component-specific style overrides
     * Customizes individual MUI components to match our dark theme
     */
    components: {
        /**
         * Button customization
         * Creates a more subtle button style that fits the dark theme
         */
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',  // Preserve original text case for better readability
                }
            }
        },

        /**
         * TextField input styling (OutlinedInput variant)
         * Maintains consistent dark styling for text input fields
         */
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',       // Match background to theme
                    '& fieldset': {
                        borderColor: '#666',       // Subtle border for default state
                    },
                    '&:hover fieldset': {
                        borderColor: '#aaa',       // Lighter border on hover for better visibility
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#aaa',       // Consistent border color when focused
                    }
                },
                input: {
                    color: '#ccc'                  // Ensure input text is visible on dark background
                }
            }
        },

        /**
         * Input label styling
         * Ensures labels remain visible and consistent with other text elements
         */
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#ccc'                  // Match text color for consistency
                },
                shrink: {
                    color: '#ccc'                  // Keep consistent color when label floats
                }
            }
        },

        /**
         * Icon styling for form elements
         * Ensures all icons (calendar, dropdown, etc.) match the theme
         */
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#ccc'                  // Match icons to text color
                }
            }
        },

        /**
         * Date picker calendar day styling
         * Custom styling for the date picker's calendar view
         */
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: '#ccc',                 // Calendar day text color
                    backgroundColor: '#222'        // Calendar day background
                },
                today: {
                    borderColor: '#ccc'            // Highlight today's date with a border
                },
                selected: {
                    backgroundColor: '#444',       // Darker background for selected date
                    color: '#fff'                  // White text for better contrast on selected date
                }
            }
        },

        /**
         * Calendar container styling
         * Ensures the popup calendar maintains the dark theme
         */
        MuiCalendarOrClockPicker: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222'        // Match calendar background to theme
                }
            }
        }
    }
});

export default darkTheme;