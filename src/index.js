import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config();

/*
////first approach
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("error :", error);
    throw err;
  }
})();
*/

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed :", err);
  });
