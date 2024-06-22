import mongoose from "mongoose";
import { DB_Name } from "./DBName";

const isConnected = false;

const connectDatabase = async () => {
  if (isConnected) {
    console.log("Mongodb already connected");
    return isConnected;
  }
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_Name}`
    );
    console.log(`Database Connected ${connectionInstance.connection.host}`);
    return true;
  } catch (error: any) {
    console.log("Database Connection failed", error);
    process.exit(1);
  }
};

export { connectDatabase };
