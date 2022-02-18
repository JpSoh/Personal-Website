//Import Schema
let admin_password = require('../models/admin_password.model').adminPassword;
//Pre-requirement functions for express
let express = require('express');
//Redirect request from one file to another
let router = express.Router();
//Import token functions
let auth = require('../controllers/auth');


//Sign In Tab
router.post('/login', async (req,resp)=>{
    let email = req.body.email;
    let password = req.body.password;
    //Find User based on email and password, returns an array
    let user = await admin_password.find()
    if ((email === user[0].email) && (password === user[0].password)){
        let token = auth.generateToken(user);
        //Store Token on cookie storage
        resp.cookie('auth_token', token);
        resp.send({
            redirectURL: '/admin',
            message: 'Success'
        });
    } else{
        resp.send({message: 'Rejected!'});
    }
})

//Connect router to app.js file
module.exports = router; 