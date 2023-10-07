const express = require("express")
const Router = express.Router();
const {uploadYourPdf,extractpdf} = require('../controllers/pdfController')


const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}.pdf`);
    }
  });
  
  
  const upload = multer({
      storage: storage,
      fileFilter: function (req, file, cb) {
        if (file.mimetype === 'application/pdf') {
          cb(null, true);
        } else {
          cb(new Error('Only PDF files are allowed.'));
        }
      }
    });

Router.post('/upload',  upload.single('avatar'), uploadYourPdf );
Router.get("/getYourPdfText", extractpdf);






module.exports = Router