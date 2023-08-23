const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connection established");
});

const excersiseRouter = require("./routes/excersices");
const userRouter = require("./routes/users");

app.use('/api/excersise',excersiseRouter);
// for users
app.use('/api/user',userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
