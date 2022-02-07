let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let aboutSchema = new Schema({
   description: String
});

let about = mongoose.model('about', aboutSchema, 'about');

module.exports = { about }