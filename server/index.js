const express = require("express");
const mongoose = require("mongoose");
 
const app = express();
const UserModel = require("./models/Users");
const cors = require('cors');


mongoose.connect("mongodb+srv://jubairshaikh9999:EGD2YLGeuRqNUqgf@love.zup5jmy.mongodb.net/?retryWrites=true&w=majority")

app.use(cors());
app.use(express.json())


const PORT = 5000;

app.get("/", (req, res) => {
  res.send("MERN IN 60 MIN");
});

app.get("/getUsers", async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
});
  
app.post("/createUser", async (req, res) => {
     const user = req.body
     const newUser = new UserModel(user);
     await newUser.save();
     res.json(user)
});
  
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});










// create a Good Password 
// MongoCompass 
// copy strigId in Compass  
// open in terminal ----
