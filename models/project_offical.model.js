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

let project_offical = mongoose.model('project_offical', projectSchema, 'project_offical');

module.exports = { project_offical }