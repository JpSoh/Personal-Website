let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let educationSchema = new Schema({
    title: String,
    description: String,
    period: String
});

let education = mongoose.model('education', educationSchema, 'education');

module.exports = { education }