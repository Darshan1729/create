const PostMessage = require('../models/postMessage');
const ObjectId = require('mongoose').Types.ObjectId;


const getPost = async (req,res) =>{
    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);

    } catch (error) {
        res.status(404).json('error while retriving :' + error);
    }
}

const createPost = async (req,res) => {
    const post = req.body;

    const newPost = PostMessage(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json('error while creating a post:' + error);
    }
}


const updatePost = (req,res) => {
   
    const { id } = req.params

    if(!{_id:id}){
        return res.status(400).json('error while updating the post ') 
    }

    const post = req.body;
    PostMessage.findByIdAndUpdate(req.params.id,{post},(error,data)=>{
            if(!error) res.send(data)
            else console.log('error while updating the data' + error);
    });

}

const deletePost = async (req,res) => {
    
        
    await PostMessage.findByIdAndRemove(req.params.id,(error,data)=>{
        if(!error) res.send(data)
        else console.log('error while deleting record ' + error);
    });

};


module.exports = getPost;
module.exports = createPost;
module.exports = updatePost;
module.exports = deletePost;