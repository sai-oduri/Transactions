const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});


//  /api/v1/user/signup
//  /api/v1/user/signin
//  /api/v1/user/chnagePassword

//  /api/v1/account/tranferMooney
//  /api/v1/account/balance