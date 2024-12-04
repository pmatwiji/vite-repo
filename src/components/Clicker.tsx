import React from 'react';
import { Box, Card, Typography, Button, Grid } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

export interface ClickerProps {
    onClick?: () => void;
}

export const Clicker = ({ onClick }: ClickerProps) => {
    return (
        <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Grid2
                container
                spacing={3}
            >
                {/* Current Balance Card */}
                <Grid2 columns={4}>
                    <Card
                        sx={{
                            p: 3,
                            backgroundColor: '#0027F9',
                            opacity: 0.6,
                            width: '412px',
                            height: '362px',
                            borderRadius: '20px',
                        }}
                    >
                        <Typography
                            color='white'
                            variant='h6'
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                fontSize: '22px',
                                lineHeight: '24.2px',
                                letterSpacing: '-2%',
                                fontFamily: 'Arial',
                            }}
                        >
                            Current Balance
                        </Typography>

                        {/* Add balance breakdown */}
                        <Box sx={{ my: 2 }}>
                            <Grid2
                                container
                                spacing={1}
                            >
                                <Grid2>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                    >
                                        Top-ups
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                    >
                                        Available balance
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                    >
                                        Rolling Reserve balance
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                    >
                                        Withdrawals Pending
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                    >
                                        Processing Balance
                                    </Typography>
                                </Grid2>
                                <Grid2>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                        align='right'
                                    >
                                        -R$ 0.01
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                        align='right'
                                    >
                                        R$ 1,377,981.81
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                        align='right'
                                    >
                                        R$ 0.00
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                        align='right'
                                    >
                                        R$ 0.00
                                    </Typography>
                                    <Typography
                                        color='white'
                                        variant='body2'
                                        align='right'
                                    >
                                        R$ 10,100.00
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Box>

                        <Typography
                            color='white'
                            variant='h4'
                            sx={{ mt: 3, mb: 1, fontWeight: 'bold' }}
                        >
                            R$ 1,388,081.82
                        </Typography>

                        {/* Add USD conversion */}
                        <Typography
                            color='white'
                            variant='body2'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 2,
                            }}
                        >
                            <span style={{ fontSize: '1.2em' }}>↻</span> $
                            250,093.65*
                        </Typography>

                        <Button
                            variant='contained'
                            size='small'
                            sx={{
                                backgroundColor: 'rgba(0,0,0,0.1)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                },
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            See more
                        </Button>
                    </Card>
                </Grid2>

                {/* Available Balance Card */}
                <Grid2 columns={4}>
                    <Card sx={{ p: 3 }}>
                        <Typography
                            variant='subtitle2'
                            gutterBottom
                        >
                            Available Balance
                        </Typography>
                        <Typography
                            variant='h4'
                            sx={{ mt: 2 }}
                        >
                            R$ 1,377,981.81
                        </Typography>
                        <Button
                            variant='contained'
                            size='small'
                            sx={{ mt: 2 }}
                        >
                            See more
                        </Button>
                    </Card>
                </Grid2>

                {/* Processing Balance Card */}
                <Grid2 columns={4}>
                    <Card sx={{ p: 3 }}>
                        <Typography
                            variant='subtitle2'
                            gutterBottom
                        >
                            Processing Balance
                        </Typography>
                        <Typography
                            variant='h4'
                            sx={{ mt: 2 }}
                        >
                            R$ 10,100.00
                        </Typography>
                        <Button
                            variant='contained'
                            size='small'
                            sx={{ mt: 2 }}
                        >
                            See more
                        </Button>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Clicker;
