const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");
    // awiat mongoose.connect("mongodb://127.0.0.1:27017/blog",); {
    // dbName: "blog"
    // });
    console.log("Database connected sucessfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  dbConnect,
};
