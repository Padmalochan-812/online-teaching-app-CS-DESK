const jwt = require("jsonwebtoken");

// Middleware to protect routes
const protect = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.status(401).json({ message: "Not authorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.id;
        req.role = decoded.role;
        
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token " });
    }
};

module.exports = protect;