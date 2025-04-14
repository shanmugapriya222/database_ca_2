import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes.js";

dotenv.config();
const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/users",userRoutes);

mongoose.connect(process.env.mongodb)
.then(() => console.log('db connected'))
.catch((err => console.log('failed',err)));

app.listen(PORT,() => {
    console.log(`server is running:http://localhost:${PORT}`);
});