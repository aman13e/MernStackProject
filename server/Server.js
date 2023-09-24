import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = 4000;
const app = express();
app.use(cors);
await mongoose.connect(
  "mongodb+srv://aman:aman9160@cluster0.ymiq0zu.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection successufull");
app.get("/", (req, res) => {
  res.send("Hellow World");
});
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
