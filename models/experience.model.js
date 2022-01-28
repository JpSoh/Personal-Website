let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let experienceSchema = new Schema({
    title: String,
    organization: String,
    period: String, 
    description: String,
    location: String,
    imageURL: String,
    testimonial_link: String
});

let experience = mongoose.model('experience', experienceSchema, 'experience');

module.exports = { experience }