import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const FriendsList = () => {
    const persons = [
        {
            name: 'Raj',
            amount: 100000
        },
        {
            name: 'Rahul',
            amount: 100000
        }
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {persons.map((value, index) => (
                    <>
                        <Grid item xs={6} md={8}>
                            <Item
                                key={`${index}-name`}
                                style={{
                                    backgroundColor: '#CDE8E5'
                                }}
                            >
                                {value.name}
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Item
                                key={`${index}-amount`}
                                style={{
                                    backgroundColor: '#CDE8E5'
                                }}
                            >
                                {value.amount}
                            </Item>
                        </Grid>
                    </>
                ))}
            </Grid>
        </Box>
    );
};

export default FriendsList;
