const express = require("express");
const app = express();
const pdfroutes = require('./routes/docs')
// const userRoutes = require('./routes/userRoutes')

const cors = require("cors");
app.use(express.json());
app.use(cors());


app.use('/pdf' , pdfroutes)
// app.use('/users', userRoutes)


app.listen(8080, () => {
  console.log("Server started successfully on port 8080");
});


