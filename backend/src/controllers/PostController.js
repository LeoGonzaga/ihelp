const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
    async createPost(req, res){
        const {username, bloodtype, urgencia, cidade, hospital, phone} = req.body;
        const post = await Post.create({username, bloodtype, urgencia, cidade, hospital, phone});
        return res.json(post);
    },
 
    async viewPosts(req, res){
        await Post.find({}, function(err, posts){
            if(err){
                return res.json({message: 'Nenhum Post Encontrado'});
            }else{
                var postMap = {};
                posts.forEach(function(post){
                    postMap[post._id] = post;
                });
                return res.json(postMap);
            }
        }); 
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