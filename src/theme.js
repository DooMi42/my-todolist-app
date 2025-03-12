import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#ccc' },
        background: {
            default: '#222', // Page background
            paper: '#222'    // Component background
        },
        text: {
            primary: '#ccc'
        }
    },
    components: {
        // 1) OutlinedInput (TextField's default variant)
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    '& fieldset': {
                        borderColor: '#666', // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: '#aaa', // Hover border color
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#aaa', // Focused border color
                    }
                },
                input: {
                    color: '#ccc' // Gray text inside the input
                }
            }
        },

        // 2) InputLabel (the floating label above the input)
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#ccc' // Gray label
                },
                shrink: {
                    color: '#ccc' // Gray label when focused
                }
            }
        },

        // 3) SvgIcon (calendar icon, etc.)
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#ccc' // Gray icons (e.g., calendar)
                }
            }
        },

        // 4) MUI X Date Pickers day cells
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: '#ccc',       // Day numbers in the calendar
                    backgroundColor: '#222'
                },
                today: {
                    borderColor: '#ccc'  // Outline for "today"
                },
                selected: {
                    backgroundColor: '#444', // Selected day background
                    color: '#fff'            // Selected day text
                }
            }
        },

        // 5) Calendar/Clock container background
        MuiCalendarOrClockPicker: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222'
                }
            }
        }
    }
});

export default darkTheme;
