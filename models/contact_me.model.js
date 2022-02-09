let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let contactSchema = new Schema({
    id: String,
    name: String,
    email: String,
    date: Date,
    message: String
});

let contact = mongoose.model('contact', contactSchema, 'contact_me');

module.exports = { contact }