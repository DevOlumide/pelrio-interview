const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();


const PORT = process.env.PORT || 4001
const MONGODB_URLS = "mongodb+srv://DevOlumide:olumide16@cluster0.w0bv7.mongodb.net/users?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || MONGODB_URLS, {useNewUrlParser: true}, () => {
 console.log("Mongoose connected to database successfully");
  
});

app.use(express.json());
app.use(cors());
app.use("/auth", routes);


 app.listen(PORT, () => console.log("Server started successfully at localhost: " + PORT));