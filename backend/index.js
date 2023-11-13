const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const { dbConnection } = require("./configs/db");
const { recipeRouter } = require("./routes/recipeRouter");
const { userRouter } = require("./routes/userRouter");
const { userModel } = require("./models/userModel");
const favoriteRouter = require("./routes/favoriteRouter");

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// app.use("/",(req,res)=>{
//     res.send("Home Page")
// })
app.get("/login", (req, res) => {
  res.sendFile("../frontend/src/pages/auth/Login");
});


app.get("/auth/github", async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIEND_SECRET,
        code,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const user=await axios.get(`https://api.github.com/user`,{
        headers:{
            Authorization:`Bearer ${response.data.access_token}`
        }
    })
    const savedUser = await userModel.create({
       
        name: user.data.login,
      
        // Add other relevant user details
      });
    
    console.log("user",savedUser);
    res.send("Sign in with Github Successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/api/auth", userRouter);
app.use("/api/food", recipeRouter);
app.use("/api/fav",favoriteRouter)

app.listen(port, async () => {
  try {
    await dbConnection;
    console.log(`server is connected DB`);
  } catch (error) {
    console.log("error while connecting to DB");
  }
  console.log(`server is running on ${port}`);
});
