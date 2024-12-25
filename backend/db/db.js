import mongoose from "mongoose";

function connectToDb() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDB Connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connectToDb;
