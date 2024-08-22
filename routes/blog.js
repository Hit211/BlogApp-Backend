const express = require('express');
const router = express.Router();


const { createComment } = require('../controller/CommentController');
const { createPost, allPosts } = require('../controller/PostController');
const { likePost, unlikePost } = require('../controller/LikeController');

router.post("/comments/create/:postId",createComment);
router.post("/posts/create",createPost);
router.get("/posts",allPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);


module.exports = router;
