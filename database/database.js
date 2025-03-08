import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/medDB"); // connect to database

const db = mongoose.connection; // get default connection

db.on("error", console.error.bind(console, "connection error:")); // add error handler

db.once("open", () => {
  console.log("Connected to database successfully"); // log success message
}); // add open handler

export default db; // export default connection
