import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
            <App />
        </React.StrictMode>
    );

    return {
        unmount: () => {
            root.unmount();
        },
    };
}

export { App };

const devRoot = document.getElementById('root');
if (devRoot) {
    init({ element: devRoot });
}
