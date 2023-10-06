
const fs = require('fs');
const pdf = require('pdf-parse');

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

  exports.uploadYourPdf = function (req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({
          status: 'Error',
          message: 'No file uploaded.'
        });
      }
  
      res.status(201).json({
        status: 'Success',
        message: 'File uploaded successfully.'
      });
    } catch (error) {
      // Handle any unexpected errors here
      res.status(500).json({
        status: 'Error',
        message: 'An error occurred while processing the request.'
      });
    }
  }