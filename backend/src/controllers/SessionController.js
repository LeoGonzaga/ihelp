const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }else{
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    const {id, username} = user;
                    return res.json({
                        user: {
                            id,
                            username,
                            email
                        },
                        token: jwt.sign({id}, 'e4763f089cc9f4d12db9a9a9f667cf81', {expiresIn: '7d'})
                    })
                } else {
                    return res.status(401).json({ message: 'Senha incorreta'});
                }
            })
        }  
    }
}