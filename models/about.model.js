let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let aboutSchema = new Schema({
   id: String,
   date: String,
   description: String
});

let about = mongoose.model('about', aboutSchema, 'about');

module.exports = { about }