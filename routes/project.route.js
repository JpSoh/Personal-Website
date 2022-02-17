let uniqid = require('uniqid'); 
//Import Schema
let project = require('../models/projects.model').projects;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Connect to path, to display image from files. 
let path = require('path');

//Adding new projects to database
router.post('/', async (req, resp) =>{
    let reqBody = req.body;
    let imgPath;
    //if image URL is not empty
    if(req.body.imageURL){
        imgPath = reqBody.imageURL;
    } else{
        imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length);
    }
    let newRequest = new project({
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

//Deleting projects
router.delete('/:id', async (req, resp) =>{
    await project.deleteOne({id: req.params.id})
    resp.send("Deleted!")
});

//Get all projects from database
router.get('/', async (req, resp) =>{
    let projects = await project.find();
    resp.send(projects);
})

//Update function: Get details from the database by ID to be displayed on form
router.get('/:id', async (req, resp) =>{
    let id = req.params.id;
    let projects = await project.findOne({id: id});
    resp.send(projects);
})

//Update request
router.put('/:id', async (req,resp) => {
    let id = req.params.id;
    await project.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

//Connect router to app.js file
module.exports = router; 