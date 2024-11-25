import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createTheme } from '@mui/material/styles'; // Import createTheme from styles
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider from styles
import { CssBaseline, Button, Box } from '@mui/material'; // Keep these from @mui/material
import Clicker from './components/Clicker';

const theme = createTheme();

interface MountOptions {
    containerId: string;
}

export function init(containerId: string) {
    console.log('Initializing with container:', containerId);
    const element = document.getElementById(containerId);

    if (!element) {
        console.error('Element is required to mount the application');
        return { containerId };
    }

    const reactDOMClient = {
        createRoot: ReactDOM.createRoot,
        hydrateRoot: ReactDOM.hydrateRoot,
    };

    reactDOMClient.createRoot(element).render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Clicker onClick={() => console.log('Clicked!')} />
            </ThemeProvider>
        </React.StrictMode>
    );
}

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('root')) {
            init('root');
        }
    });
}

export { Clicker } from './components/Clicker';
