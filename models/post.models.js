const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  author: {
    type: String,
    required: true,
  },
});

module.exports = model("Post", postSchema);
