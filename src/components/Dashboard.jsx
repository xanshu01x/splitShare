import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FriendsList from './FriendsList';
import { Button } from '@mui/material';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

const Dashboard = (props) => {
    const handleAddExpense = () => {};
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    position='static'
                    style={{ backgroundColor: '#7AB2B2' }}
                >
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            SplitShare
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container
                style={{ backgroundColor: '#EEF7FF', minHeight: '700px' }}
            >
                <Box sx={{ my: 2 }}>
                    <FriendsList />
                </Box>
            </Container>
            <Button
                variant='contained'
                fullWidth
                onClick={() => handleAddExpense()}
            >
                Add Expense
            </Button>
        </React.Fragment>
    );
};
export default Dashboard;
