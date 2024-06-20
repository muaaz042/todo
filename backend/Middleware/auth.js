const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

exports.requireLogin = async (req, res, next) => {
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token, "notes");
            const user = await User.findById(decode._id);
            req.user = user;
            next();
        }
        else return res.status(400).json({error: 'Unauthorized'})
    } catch (error) {
        console.log("Somthing went wrong.");
    }
}
