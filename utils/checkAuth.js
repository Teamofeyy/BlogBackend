import jwt from "jsonwebtoken";

export default (req, res, next) =>{
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];
        res.send(token);
    } else {
        res.status(401).json({ message: 'Authorization token missing or invalid' });
    }
};