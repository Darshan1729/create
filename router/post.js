const express = require('express');
const router = express.Router();
const getPost = require('../controller/postController');
const createPost = require('../controller/postController');
const updatePost = require('../controller/postController');
const deletePost = require('../controller/postController');

router.get('/',getPost);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);

module.exports = router
