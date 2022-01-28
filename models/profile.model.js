let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let profileSchema = new Schema({
   description: String
});

let profile = mongoose.model('profile', profileSchema, 'profile');

module.exports = { profile }