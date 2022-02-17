//Import Schema
let about = require('../models/about.model').about;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to uniqid
let uniqid = require('uniqid'); 

//Adding about 
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let newRequest = new about({
        id: uniqid(),
        date: new Date(),
        description: reqBody.description,
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Send latest about detaild
router.get('/', async (req, resp) =>{
    let abouts = await about.find().sort({ _id: -1 }).limit(1)
    resp.send(abouts);
})

// Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let abouts = await about.findOne({id: id});
    resp.send(abouts);
})


//Connect router to app.js file
module.exports = router; 