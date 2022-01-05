//Pre-requirement functions for express
let express = require('express');
let app = express();
//Database mongodb
let mongoose = require('mongoose');
//Connect to public file, tell express that public is the root folder for the client side
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log("Listening 3000");
})
