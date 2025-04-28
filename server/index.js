
//server.js
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const studentRoutes = require("./routes/studentRoutes.js");

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());


//mogodb connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log(err);
});

//routes
app.use("/api/students", studentRoutes);

//startserver
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
