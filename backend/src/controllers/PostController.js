const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
    async createPost(req, res){
        const {username, bloodtype, urgency, city, hospital, phone} = req.body;
        const post = await Post.create({username, bloodtype, urgency, city, hospital, phone});
        return res.json(post);
    },
 
    async viewPosts(req, res){
        const filter = [];
        let post = await Post.find(filter);
        return res.json(post);
    },

    async deletePost(req, res){
        const {postId} = req.body;
        const post = await Post.findById(postId);
        if(post){
            await Post.findByIdAndDelete(postId);
            return res.json({message: "Post Deletado"});
        }else{
            return res.json({message: "Post nao encontrado"});
        }
    }
}