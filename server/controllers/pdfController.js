const fs = require('fs');
const pdf = require('pdf-parse');
// const User = require('../models/user');


exports.extractpdf = async(req, res) => {
    try {
      const dataBuffer = fs.readFileSync(`./uploads/${req.currentuser._id}docs.pdf`);
      const data = await pdf(dataBuffer);
  
      res.status(200).json({
        status: "Successful",
        data: data.text,
        username:req.currentuser.username
      });
    } catch (error) {
      res.status(500).json({
        status: 'Error',
        message: 'An error occurred while processing the request.'
      });
    }
  }



  exports.checkingTheServer = (req, res) => {
    res.status(201).json({
      status: "Success",
      message: "Server is running."
    });
  }


  async (req, res) => {
    const userId = req.params.userId;
    const newPicture = req.body.pictureUrl;
  
    try {
      res.status(200).json({ message: 'Picture added successfully' });
    } catch (err) {
      console.error('Error adding picture:', err);
      res.status(500).json({ error: 'Failed to add picture' });
    }
  }

  exports.uploadYourPdf = async function (req, res) {
  
   try{
        res.status(201).json({
          status: 'Success',
          message: 'File uploaded successfully.',
        });
   }catch(e){
    res.status(404).json({
      status: 'failed',
      message: 'Something Went Very Wrong',
    });
   }
  }