import React from 'react';
import { Button, Box } from '@mui/material';

console.log('App.tsx is loaded');

function App() {
    console.log('App component rendered');
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Button
                variant='contained'
                color='error'
                size='large'
            >
                Click Me pls
            </Button>
        </Box>
    );
}

export default App;
