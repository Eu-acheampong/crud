const { Router } = require("express");
const {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} = require("../controllers/posts.controllers");

const postRouter = Router();

postRouter.route("/").get(getAllPosts).post(createPost);

postRouter
  .route("/:postId")
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePost);

module.exports = postRouter;
