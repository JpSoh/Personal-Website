//Import Schema
let profile = require('../models/profile.model').profile;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to uniqid
let uniqid = require('uniqid'); 

//Get profile from database
router.get('/', async (req, resp) =>{
    let profile = await profile.find();
    resp.send(profile);
})

//Update request
router.put('/', async (req,resp) => {
    await profile.updateMany({}, req.body);
    resp.send('Updated!');
})


//Connect router to app.js file
module.exports = router; 