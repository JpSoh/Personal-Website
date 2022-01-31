//Connect to uniqid
let uniqid = require('uniqid'); 
//Import Schema
let activties = require('../models/activities.model').activities;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();

//Adding new activities to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let newRequest = new activties({
        id: uniqid(),
        title: reqBody.title,
        period: reqBody.period,
        description: reqBody.description,
        link: reqBody.link
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Deleting activties
router.delete('/:id', async (req, resp) =>{
    await activties.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all activities from database
router.get('/', async (req, resp) =>{
    let posts = await activties.find();
    resp.send(posts);
})

//Update function: Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let post = await activties.findOne({id: id});
    resp.send(post);
})

//Update request
router.put('/:id', async (req,resp) => {
    let id = req.params.id;
    await activties.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

//Connect router to app.js file
module.exports = router; 