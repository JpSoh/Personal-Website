//Connect to uniqid
let uniqid = require('uniqid'); 
//Import Schema
let project_official = require('../models/project_offical.model').project_offical;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to path, to display image from files. 
let path = require('path');

//Adding new project_official to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let imgPath;
    //if image URL is not empty
    if(req.body.imageURL){
        imgPath = reqBody.imageURL;
    } else{
        imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length);
    }
    let newRequest = new project_official({
        id: uniqid(),
        title: reqBody.title,
        date: new Date(), 
        description: reqBody.description,
        imageURL: imgPath,
        github_link: reqBody.github_link
    })
    await newRequest.save();
    resp.send("Accepted!");
});

//Deleting project_official
router.delete('/:id', async (req, resp) =>{
    await project_official.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all project_official from database
router.get('/', async (req, resp) =>{
    let project = await project_official.find();
    resp.send(project);
})

//Update function: Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let project = await project_official.findOne({id: id});
    resp.send(project);
})

//Update request
router.put('/:id', async (req,resp) => {
    let id = req.params.id;
    await project_official.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

//Connect router to app.js file
module.exports = router; 