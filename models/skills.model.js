let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let skillsSchema = new Schema({
   
});

let skills = mongoose.model('skills', skillsSchema, 'skills');

module.exports = { skills }