const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://hema:hema%40123@cluster0.mgexlut.mongodb.net/IMS?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
