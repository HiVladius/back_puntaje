import mongoose from "mongoose";
import { parse } from "jsr:@std/dotenv";

const env = parse(Deno.readTextFileSync(".env"));

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_DB);
    console.log("DB connected");
  } catch (error) {
    console.log("Error: ", error);
  }
};
