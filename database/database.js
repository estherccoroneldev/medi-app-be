import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/medDB");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Connected to database successfully");
});

export default db;
