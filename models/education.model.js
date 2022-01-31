let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let educationSchema = new Schema({
    id: String,
    title: String,
    organization: String,
    period: String, 
    description: String,
    location: String,
    imageURL: String,
    certification_link: String
});

let education = mongoose.model('education', educationSchema, 'education');

module.exports = { education }