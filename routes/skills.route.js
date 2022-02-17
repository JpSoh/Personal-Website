//Connect to uniqid
let uniqid = require('uniqid'); 
//Import Schema
let skills = require('../models/skills.model').skills;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();


//Adding new skills to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let newRequest = new skills({
        id: uniqid(),
        name: reqBody.name,
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Deleting skills
router.delete('/:id', async (req, resp) =>{
    await skills.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all skills from database
router.get('/', async (req, resp) =>{
    let skill= await skills.find();
    resp.send(skill);
})

//Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let skill = await skills.findOne({id: id});
    resp.send(skill);
})

//Connect router to app.js file
module.exports = router; 