//Connect to uniqid
let uniqid = require('uniqid'); 
//Import Schema
let activities = require('../models/activities.model').activities;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();

//Adding new activities to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let newRequest = new activities({
        id: uniqid(),
        title: reqBody.title,
        period: reqBody.period,
        description: reqBody.description,
        link: reqBody.link
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Deleting activities
router.delete('/:id', async (req, resp) =>{
    await activities.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all activities from database
router.get('/', async (req, resp) =>{
    let activitiy = await activities.find();
    resp.send(activitiy);
})

//Update function: Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let activitiy = await activities.findOne({id: id});
    resp.send(activitiy);
})

//Update request
router.put('/:id', async (req,resp) => {
    let id = req.params.id;
    await activities.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

//Connect router to app.js file
module.exports = router; 