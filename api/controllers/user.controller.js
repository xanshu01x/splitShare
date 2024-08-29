import prisma from '../lib/prisma.js';

export const getUsersInfo = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUserInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const tokenUserId = req.userId;
        const { newPassword, id: _id, ...userInfo } = req.body;
        let updatedPassword = null;

        if (userInfo.password) {
            updatedPassword = await bcrypt.hash(userInfo.password, 10);
        }
        if (tokenUserId !== id) {
            return res.status(403).json({ message: 'Access denied' });
        }
        const { password, ...updatedUser } = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                ...userInfo,
                ...(updatedPassword && { password: updatedPassword })
            }
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const tokenUserId = req.userId;
        if (tokenUserId !== id)
            return res.status(403).json({ message: 'Access denied' });

        await prisma.user.delete({
            where: {
                id: id
            }
        });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
