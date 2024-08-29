import express from 'express';
import {
    getUsersInfo,
    getUserInfo,
    updateUserInfo,
    deleteUser
} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, getUsersInfo);
router.get('/:id', verifyToken, getUserInfo);
router.put('/:id', verifyToken, updateUserInfo);
router.delete('/:id', verifyToken, deleteUser);

export default router;
