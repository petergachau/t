// Import packages
import express from 'express'
import tourRouter from "./routes/tour.js";
import cors from 'cors'
import dotenv from "dotenv";
import mongoose from "mongoose";
// Middlewares
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
app.use("/project", tourRouter);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to tour API");
  });
  

// connection
const port = process.env.PORT || 5000;


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
