import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
        console.log(newUser);
        return res.status(201).json({ message: 'User Created Successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Failed to create user' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { password: userPassword, ...userInfo } =
            await prisma.user.findUnique({
                where: {
                    email
                }
            });

        if (!userInfo) {
            return res
                .status(404)
                .json({ message: 'Email is not registered!' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, userPassword);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid Credentials!' });
        }

        const tokenAge = 1000 * 60 * 60;
        const jwtToken = jwt.sign(
            { id: userInfo.id, isAdmin: false },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: tokenAge
            }
        );
        return res
            .cookie('token', jwtToken, {
                httpOnly: true,
                maxAge: tokenAge
            })
            .status(200)
            .json({ message: 'Login Successfully', userInfo });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Failed to login' });
    }
};

export const logout = async (req, res) => {
    res.clearCookie('token')
        .status(200)
        .json({ message: 'Logout Successfully' });
};
