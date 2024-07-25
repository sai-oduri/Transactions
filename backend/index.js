const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1", mainRouter);

app.listen(3000);


//  /api/v1/user/signup
//  /api/v1/user/signin
//  /api/v1/user/chnagePassword

//  /api/v1/account/tranferMooney
//  /api/v1/account/balance