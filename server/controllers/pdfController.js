const fs = require('fs');
const pdf = require('pdf-parse');
// const User = require('../models/user');


exports.extractpdf = async(req, res) => {
    try {
      const dataBuffer = fs.readFileSync('./uploads/docs.pdf');
      const data = await pdf(dataBuffer);
  
      res.status(200).json({
        status: "Successful",
        data: data.text
      });
    } catch (error) {
      // Handle any unexpected errors here
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
    // const userId = req.params.userId;
    // const newPicture = req.body.pictureUrl;
    // const user = await User.findById(userId);
   try{
        // if (!user) {
        //   return res.status(404).json({ error: 'User  not found' });
        // }
        // if(!req.file){
        //   return res.status(404).json({ error: 'File is not found' });
        // }
        // user.yourDocuments.push(newPicture);
        // await user.save(req.file.originalname);
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