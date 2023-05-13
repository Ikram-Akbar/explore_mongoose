import mongoose from "mongoose";
import app from "./app"
const port:number = 5000;

//DB connection :
async function dbFunc() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
    console.log("db has been connected successfully");

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (err) {
    console.log(`field to connect db due to ${err}`);
  }
}
dbFunc();


