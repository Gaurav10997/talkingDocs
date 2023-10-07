const express = require("express");
const app = express();
const pdfroutes = require('./routes/docs')
const userRoutes = require('./routes/userRoutes')

const cors = require("cors");
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/talkingdocs')
.then(console.log("Mongodb Connection Succesfully"))



app.use(express.json());
app.use(cors());


app.use('/pdf' , pdfroutes)
app.use('/users', userRoutes)


app.listen(8080, () => {
  console.log("Server started successfully on port 8080");
});


