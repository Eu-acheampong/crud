const Post = require("../models/post.models");

const getAllPosts = async (req, res) => {
  const post = await Post.find({});
  res.status(200).json(post);
  res.send("All Post");
};

const getSinglePost = async (req, res) => {
  res.send("All Post");
};

const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

const updatePost = async (req, res) => {
  const postId = req.params.postId;
const post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }

  await post.findByIdAndDelete(postId);
  res.status(200).json({ msg: "Post deletePost." });
};
module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
