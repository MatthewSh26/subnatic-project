import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

console.log('🔵 AUTH MIDDLEWARE JWT_SECRET:', JWT_SECRET); // ДОБАВЬ ЭТО!

const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        console.log('TOKEN:', token);

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, JWT_SECRET);

        console.log('DECODED:', decoded);

        const user = await User.findById(decoded.userId);

        console.log('USER:', user);

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        req.user = user;

        next();
    } catch (error) {
        console.log('AUTH ERROR:', error.message);
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
}

export default authorize;