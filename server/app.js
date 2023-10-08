const express = require("express");
const app = express();
const pdfroutes = require('./routes/docs')
const mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes')

const cors = require("cors");
app.use(express.json());
app.use(cors());
//talkdocs
mongoose.connect('mongodb+srv://avdhika:talkdocs@cluster0.lsjg2hk.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Connection to the database successful");
  })
  .catch((e) => {
    console.log('Something went wrong with the connection:', e);
  });




app.use('/pdf' , pdfroutes)
app.use('/users', userRoutes)


app.listen(8080, () => {
  console.log("Server started successfully on port 8080");
});


// console.log("dfsd")