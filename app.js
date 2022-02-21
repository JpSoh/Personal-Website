//Pre-requirement functions for express
let express = require('express');
let app = express();
//Database mongodb
let mongoose = require('mongoose');
//Connect to public file, tell express that public is the root folder for the client side
app.use(express.static('public'));
//Need to install multer to read binary data for image
let multer = require('multer');
//For reading cookies
let cookieParser = require('cookie-parser');
//Generate cookie for every requests
app.use(cookieParser());
//Connect to Database
mongoose.connect('mongodb+srv://jp71:266746@projects.ejscg.mongodb.net/personal-website').then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Something is wrong");
})
//Convert JSON format
app.use(express.json());
//Using ejs, first argument specifies the template engine, 
app.set('view engine', 'ejs');

//Configuration for image uploaded
let imageStorage = multer.diskStorage({
    //First Argument represent action if there is any error, second argument represent where the images have to be stored. 
    destination: (req, file, cb) => cb(null, 'public/images'), 
    filename: (req, file, cb) => cb(null, file.originalname)
})
//Convert binary data of image
app.use(multer({storage: imageStorage}).single('imageFile'));
//Connect to auth file for checking token
let auth = require('./controllers/auth');

//Import Router
activitesRouter = require('./routes/activities.route')
contact_meRouter = require('./routes/contact_me.route')
educationRouter = require('./routes/education.route')
experienceRouter = require('./routes/experience.route')
profileRouter = require('./routes/profile.route')
projectOfficialRouter = require('./routes/project_official.route')
skillsRouter = require('./routes/skills.route')
aboutRouter = require('./routes/about.route')
adminRouter = require('./routes/admin_password.route')

// Redirect Request to Router
app.use('/activities', activitesRouter);;
app.use('/contact_me', contact_meRouter);
app.use('/education', educationRouter);
app.use('/experience',experienceRouter);
app.use('/project_official', projectOfficialRouter);
app.use('/skills', skillsRouter);
app.use('/profile',profileRouter);
app.use('/about',aboutRouter);
app.use('/admin_password', adminRouter)

//Deployment on remote server
let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening ${port}`);
})

//Open admin page if there is a token and the token matches the server to see whether we logged in already
app.get('/admin', (req,resp) => {
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)){
        resp.render('admin');
    } else{
        resp.redirect('/login');
    }
    
})

app.get('/login', (req,resp) => {
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)){
        resp.redirect('/admin');
    } else{
        resp.render('login');
    }
})