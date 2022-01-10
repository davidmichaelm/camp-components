import React from 'react';
import ReactDOM from 'react-dom';
import {BoardApplication} from './';
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: "#0c726c"
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BoardApplication/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('board-application')
);
