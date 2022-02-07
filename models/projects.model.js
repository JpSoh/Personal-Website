let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = new Schema({
    id: String,
    title: String,
    date: Date,
    description: String,
    imageURL: String,
    github_link: String
});

let projects = mongoose.model('projects', projectSchema, 'project');

module.exports = { projects }