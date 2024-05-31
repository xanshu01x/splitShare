import { useState } from 'react';
import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/reducers/counterSlice';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'black',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const count = useSelector((state) => state.value);
    const [currency, setCurrency] = useState('inr');
    const [amount, setAmount] = useState(0);
    const [numOFPeople, setNumOfPeople] = useState(2);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handleNumOfPeopleChange = (event) => {
        setAmount(event.target.value);
    };

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const dispatch = useDispatch();

    return (
        <div>
            Count: {count}
            <Button
                sx={{ m: 1, minWidth: 120 }}
                variant='contained'
                color='primary'
                onClick={handleOpen}
            >
                Add an Expense
            </Button>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant='h5' color='primary'>
                    Total Expenses Overview
                </Typography>
                <Typography variant='h3' color='secondary'>
                    ₹1,234.00
                </Typography>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        Add the expense
                    </Typography>

                    <Box sx={{ minWidth: 120 }}>
                        <TextField
                            label='Amount'
                            value={amount}
                            onChange={handleAmountChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        ₹
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            label='No. Of people'
                            value={numOFPeople}
                            onChange={handleNumOfPeopleChange}
                        />
                    </Box>
                    <Typography variant='h6' component='h2'></Typography>
                    <Button
                        sx={{ m: 1, minWidth: 120 }}
                        variant='contained'
                        color='primary'
                        onClick={() => {}}
                    >
                        Split
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Dashboard;
