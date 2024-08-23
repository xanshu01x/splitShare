import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

console.log('Heya!');
app.listen(8800, () => {
    console.log('Server is running on port 8800');
});
