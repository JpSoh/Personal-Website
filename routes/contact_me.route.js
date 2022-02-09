//Connect to uniqid
let uniqid = require('uniqid'); 
//Import Schema
let contact = require('../models/contact_me.model').contact
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();

//Adding new requests to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let newRequest = new contact({
        id: uniqid(),
        date:new Date(), 
        name: reqBody.name,
        email: reqBody.email,
        message: reqBody.message,
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Deleting requests
router.delete('/:id', async (req, resp) =>{
    await contact.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all requests from database
router.get('/', async (req, resp) =>{
    let contacts = await contact.find();
    resp.send(contacts);
})

//Connect router to app.js file
module.exports = router; 