//Import Schema
let about = require('../models/about.model').about;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to uniqid
let uniqid = require('uniqid'); 

//Get About Me from database
router.get('/', async (req, resp) =>{
    let aboutMe = await about.find();
    resp.send(aboutMe);
})

//Update request
router.put('/', async (req,resp) => {
    await about.updateMany({}, req.body);
    resp.send('Updated!');
})


//Connect router to app.js file
module.exports = router; 