import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connection successfull");
  } catch (err) {
    console.log("connection failed");
    throw new Error("Connection failed!");
  }
};

export default connect;
