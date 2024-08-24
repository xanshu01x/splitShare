import express from 'express';

const router = express.Router();

router.get('/info', (req, res) => {
    res.send('Hello Worldssss!');
});

export default router;
