import jwt from 'jsonwebtoken';

export const loggedIn = async (req, res) => {
    console.log(req.userId);
    return res.status(200).json({ message: 'Authorized' });
};
export const admin = async (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err)
            return res.status(401).json({ message: 'Token is not valid!' });
        if (!payload.isAdmin)
            return res.status(401).json({ message: `You're not an admin!` });
        return res.status(200).json({ message: 'Authorized' });
    });
};
