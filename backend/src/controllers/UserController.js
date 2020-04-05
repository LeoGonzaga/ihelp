const User = require("../models/User");

module.exports = {
    async createUser(req, res) {
        const { username, bloodtype, email, password, birthday, phone, height, weight, orientation } = req.body;

        let user = await User.findOne({ email });

        if(user){
            return res.json({ message: 'Email já cadastrado' });
        }

        user = await User.create({ username, bloodtype, email, password, birthday, phone, height, weight, orientation });
        return res.json(user);
    }
}