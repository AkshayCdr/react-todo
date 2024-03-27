import mongoose from "mongoose";

import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.DB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

export default mongoose.connection;
