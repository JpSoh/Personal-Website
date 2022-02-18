//Import Schema
let profile = require('../models/profile.model').profile;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to uniqid
let uniqid = require('uniqid'); 

//Adding profile 
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let newRequest = new profile({
        id: uniqid(),
        date: new Date(),
        description: reqBody.description,
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Send latest profile
router.get('/', async (req, resp) =>{
    let profiles = await profile.find().sort({ _id: -1 }).limit(1)
    resp.send(profiles);
})

//Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let profiles = await profile.findOne({id: id});
    resp.send(profiles);
})


//Connect router to app.js file
module.exports = router; 