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
mongoose.connect('mongodb://localhost/personal-website').then(() => {
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

//Import Router
activitesRouter = require('./routes/activities.route');
contact_meRouter = require('./routes/contact_me.route')
educationRouter = require('./routes/education.route')
experienceRouter = require('./routes/experience.route')
profileRouter = require('./routes/profile.route')
projectsRouter = require('./routes/projects.route')
skillsRouter = require('./routes/skills.route')
aboutRouter = require('./routes/about.route')

// Redirect Request to Router
app.use('/activities', activitesRouter);;
app.use('/contact_me', contact_meRouter);
app.use('/education', educationRouter);
app.use('/experience',experienceRouter);
app.use('/projects', projectsRouter);
app.use('/skills', skillsRouter);
app.use('/profile',profileRouter);
app.use('/profile',profileRouter);
app.use('/about',aboutRouter);

app.listen(3000, ()=>{
    console.log("Listening 3000");
})
