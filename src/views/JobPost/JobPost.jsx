import React from 'react';
import { Typography, Container } from '@mui/material';

const JobPost = (props) => {
    return (
        <>
            <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h1">JobPost Page here</Typography>;
            </Container>
        </>
    );
};

export default JobPost;
