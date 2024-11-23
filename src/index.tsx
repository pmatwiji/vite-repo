import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Clicker from './components/Clicker';

const theme = createTheme();

interface MountOptions {
    element: HTMLElement;
}

export function init(options: MountOptions) {
    const { element } = options;

    if (!element) {
        throw new Error('Element is required to mount the application');
    }

    const root = ReactDOM.createRoot(element);
    root.render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Clicker onClick={() => console.log('Clicked!')} />
            </ThemeProvider>
        </React.StrictMode>
    );

    return {
        unmount: () => {
            root.unmount();
        },
    };
}

export { Clicker };

// Auto-init for development
if (typeof window !== 'undefined' && document.getElementById('root')) {
    init({ element: document.getElementById('root')! });
}
