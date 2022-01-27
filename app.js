//Pre-requirement functions for express
let express = require('express');
let app = express();
//Database mongodb
let mongoose = require('mongoose');
//Connect to public file, tell express that public is the root folder for the client side
app.use(express.static('public'));
//Need to install multer to read binary data for image
let multer = require('multer');
//For reading cookies
let cookieParser = require('cookie-parser');
//Generate cookie for every requests
app.use(cookieParser());
//Connect to Database
mongoose.connect('mongodb://localhost/personal-website');
//Convert JSON format
app.use(express.json());
//Using ejs, first argument specifies the template engine, 
app.set('view engine', 'ejs');

//Configuration for image uploaded
let imageStorage = multer.diskStorage({
    //First Argument represent action if there is any error, second argument represent where the images have to be stored. 
    destination: (req, file, cb) => cb(null, 'public/images'), 
    filename: (req, file, cb) => cb(null, file.originalname)
})
//Convert binary data of image
app.use(multer({storage: imageStorage}).single('imageFile'));

//Import Router



//Impot models







app.listen(3000, ()=>{
    console.log("Listening 3000");
})
