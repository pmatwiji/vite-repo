import React from 'react';
import { Box, Button } from '@mui/material';

export interface ClickerProps {
    onClick?: () => void;
}

export const Clicker = ({ onClick }: ClickerProps) => {
    console.log('Clicker component rendering');

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
                onClick={() => {
                    console.log('Button clicked');
                    onClick?.();
                }}
            >
                Click Me
            </Button>
        </Box>
    );
};

export default Clicker;
