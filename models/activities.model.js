let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let activitiesSchema = new Schema({
    title: String,
    period: String, 
    description: String,
    link: String
});

let activities = mongoose.model('activities', activitiesSchema, 'activities');

module.exports = { activities }