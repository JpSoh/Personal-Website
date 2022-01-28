let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let contactSchema = new Schema({
    name: String,
    email: String,
    message: String
});

let contact = mongoose.model('contact', contactSchema, 'contact_me');

module.exports = { contact }