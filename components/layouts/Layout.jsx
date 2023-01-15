import { Box } from '@mui/material';
import { padding } from '@mui/system';
import Head from 'next/head';

export const Layout = ({ title = 'Initial Project', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{ title }</title>
            </Head>

            {/* Navbar */}

            <Box sx={{ padding: '10px 20px' }}>
                { children }
            </Box>
        </Box>
    );
};
