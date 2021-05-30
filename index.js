const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const postRouter = require('./router/post');

app.use(bodyParser.json());



CONNECTION_URL = 'mongodb+srv://darshan:darshan1729@cluster0.r6sbq.mongodb.net/myDB?retryWrites=true&w=majority'

app.use('/posts',postRouter);
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then( () => app.listen(PORT, ()=> console.log(`server running on port: ${PORT} `)))
    .catch( (error) => console.log(error.message));


mongoose.set('useFindAndModify',false);