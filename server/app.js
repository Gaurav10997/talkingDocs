const express = require("express");
const app = express();

const cors = require("cors");

const multer = require("multer")
const {extractpdf,checkingTheServer,uploadYourPdf} = require("./controllers")


app.use(express.json());
app.use(cors());




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, 'docs.pdf');
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
  
  console.log(extractpdf)

app.get("/", checkingTheServer);
app.post('/upload', upload.single('avatar'),uploadYourPdf );
app.get("/getYourPdfText", extractpdf);



app.listen(8080, () => {
  console.log("Server started successfully on port 8080");
});


