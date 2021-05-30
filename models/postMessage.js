const mongoose = require('mongoose');

//creating a structure of database 
const postSchema = mongoose.Schema({
    title:String,
    message:String,
});

//converting the schema into model ...
const PostMessage = mongoose.model('PostMessage',postSchema);

module.exports = PostMessage;