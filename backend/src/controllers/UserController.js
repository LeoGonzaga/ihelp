const User = require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

module.exports = {
    async createUser(req, res) {
        const { username, email, password } = req.body;

        if(!username || !email || !password){
            return res.json({ message: 'Campo Vazio' });
        }

        let user = await User.findOne({ email });

        if(user){
            return res.json({ message: 'Email já cadastrado' });
        }
 
        user = await User.create({ username, email, password });
        return res.json(user);
    },

    async login(req, res) {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            return res.json({ message: 'Usuário não encontrado' });
        }else{
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return res.json({ message: 'Logado'});
                } else {
                    return res.json({ message: 'Senha incorreta'});
                }
            })
        }  
    },

    async recoveryPassword(req, res){
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if(!user){
            return res.json({ message: 'Usuário não encontrado' });
        }else{  
            user.resetPassToken = crypto.randomBytes(20).toString('hex');
            user.resetPassTimer = Date.now() + 3600000;
            user.save();
            console.log(user.resetPassToken);

            const mail = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'ihelpunifei@gmail.com',
                    pass: 'Bl00dh3lp'
                }
            });
            const mailOptions = {
                to: user.email,
                from: 'ihelpunifei@gmail.com',
                subject: 'Recuperação de Senha IHelp',
                text: 'Você está recebendo esse email pois você ou alguem requisitou '+
                'um pedido de recuperação de senha. Caso você não tenha pedido, apenas '+
                'ignore esse email.\n\n'+'http://'+ req.headers.host + '/reset/' + user.resetPassToken + '\n\n'
            };
            mail.sendMail(mailOptions, function(err) {
                res.json(user);
            })
        }
    },

    async changePassword(req, res) {
        let user = await User.findOne({ resetPassToken: req.params.token, resetPassTimer: {$gt: Date.now()}});
        
        if(!user){
            res.json({message: 'Token invalido ou espirado'})
        }else{
            const { pass, confirmPass } = req.body;

            if(pass != confirmPass){
                res.json({ message: 'Senhas diferentes'})
            }else{
                user.password = pass;
                user.resetPassToken = undefined;
                user.resetPassTimer = undefined;
                user.save();

                res.json(user);
            }
        }
    }
}