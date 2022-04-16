import React from 'react';
import {createRoot} from 'react-dom/client';
import {BoardApplication} from './';
import {createTheme, ThemeProvider} from '@mui/material'

const container = document.getElementById('board-application');

const theme = createTheme({
    palette: {
        primary: {
            main: "#0c726c"
        },
        background: {
            paper: container.getAttribute('data-backgroundColor')
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "white"
                }
            }
        }
    }
});

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BoardApplication/>
        </ThemeProvider>
    </React.StrictMode>
);
