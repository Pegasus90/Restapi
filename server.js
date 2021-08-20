const express = require("express");

//Init express and body parsing
const app = express();
app.use(express.json());

//Connecting server to DB
const connectDB = require("./config/connectDB");
connectDB();

//Using dotenv dependency for port
require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT;

//Using express routing
app.use("/User", require("./routes/userRoute"));

//Listening to server
app.listen(PORT, (err, msg) => {
  if (err) throw err;
  else console.log(`Server is running on port ${PORT}`);
});
