let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = new Schema({
    title: String,
    date: Date,
    description: String,
    imageURL: String,
    github_link: String
});

let projects = mongoose.model('projects', projectsSchema, 'project');

module.exports = { projects }