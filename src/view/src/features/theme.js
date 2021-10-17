import {createTheme, responsiveFontSizes} from "@mui/material";

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            common: {
                black: '#000',
                white: '#fff',
            },
            primary: {
                light: '#7986cb',
                main: '#3f51b5',
                dark: '#303f9f',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff4081',
                main: '#f50057',
                dark: '#c51162',
                contrastText: '#fff',
            },
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff'
            },
            warning: {
                light: '#ffb74d',
                main: '#ff9800',
                dark: '#f57c00',
                contrastText: 'rgba(0, 0, 0, 0.87)'
            },
            info: {
                light: '#64b5f6',
                main: '#2196f3',
                dark: '#1976d2',
                contrastText: '#fff',
            },
            success: {
                light: '#81c784',
                main: '#4caf50',
                dark: '#388e3c',
                contrastText: 'rgba(0, 0, 0, 0.87)'
            },
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            }
        },
        shape: {
            borderRadius: 4,
        }
    }));

export default theme
