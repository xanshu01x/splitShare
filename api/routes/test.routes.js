import express from 'express';
import { admin, loggedIn } from '../controllers/test.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/loggedIn', verifyToken, loggedIn);
router.get('/admin', admin);

export default router;
