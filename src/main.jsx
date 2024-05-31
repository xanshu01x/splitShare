import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#3672d4'
        },
        secondary: {
            main: '#f1065a'
        },
        error: {
            main: '#ef4236'
        },
        warning: {
            main: '#ff9900'
        },
        info: {
            main: '#50a9de'
        },
        success: {
            main: '#4aad4e'
        }
    },
    typography: {
        h1: {
            fontSize: '3rem',
            fontWeight: 600
        },
        h2: {
            fontSize: '1. 75rem',
            fontWeight: 600
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
