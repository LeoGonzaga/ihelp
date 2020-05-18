const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const authConfig = require("../config/authConfig");

module.exports = {
    async auth (req, res, next){
        const token = req.body.token;
        if(!token){
             return res.status(401).json({error: 'Token not provided'});
        }
        try{
            const decoded = await promisify(jwt.verify)(token, authConfig.secret);
            req.userId = decoded.id;
            return next();
        }catch(err){
            return res.status(401).json({ error: 'Token Invalid'});
        }
    }
}