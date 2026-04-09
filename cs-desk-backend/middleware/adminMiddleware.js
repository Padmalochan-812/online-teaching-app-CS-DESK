const isAdmin = (req, res, next) => {
    if(req.role  !== "admin") {
        return res.status(403).json({
            message: "Admin access only" 
        });
        
    }
    next();
};

module.exports= isAdmin;