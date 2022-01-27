let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let adminPasswordSchema = new Schema({
    email: String,
    password: String
});

let adminPassword = mongoose.model('adminPassword', adminPasswordSchema, 'admin_password');

module.exports = { adminPassword }