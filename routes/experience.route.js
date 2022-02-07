//Connect to uniqid
let uniqid = require('uniqid'); 
//Import Schema
let experience = require('../models/experience.model').experience;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to path, to display image from files. 
let path = require('path');

//Adding new experience to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let imgPath;
    //if image URL is not empty
    if(req.body.imageURL){
        imgPath = reqBody.imageURL;
    } else{
        imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length);
    }
    let newRequest = new experience({
        id: uniqid(),
        title: reqBody.title,
        organization: reqBody.organization,
        period: reqBody.period, 
        description: reqBody.description,
        location: reqBody.location,
        imageURL: imgPath,
        testimonial_link: reqBody.testimonial_link
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Deleting experience
router.delete('/:id', async (req, resp) =>{
    await experience.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all experience from database
router.get('/', async (req, resp) =>{
    let experiences = await experience.find();
    resp.send(experiences);
})

//Update function: Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let experiences = await experience.findOne({id: id});
    resp.send(experiences);
})

//Update request
router.put('/:id', async (req,resp) => {
    let id = req.params.id;
    await experience.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

//Connect router to app.js file
module.exports = router; 