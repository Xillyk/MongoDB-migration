import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(Bun.env.DATABASE_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
