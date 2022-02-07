//Working with contect me form
let contactRequestForm = document.querySelector('.email-request-form');

contactRequestForm.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email')
    let message = document.querySelector('#message')
    fetch('http://localhost:3000/contact_me', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            email:email.value,
            message:message.value
        })
    }).then((resp) => resp.text())
    .then(() => console.log("Submitted!"))
})


//Displayng activties on the main page, not working with admin functions, Runs only after page is loaded.
async function getActivties() {
    return await fetch("http://localhost:3000/activties")
                .then((response) => response.json())
                .then((data) => data);
}

document.addEventListener("DOMContentLoaded",async function(){
    let activties = await getActivties();
    let activitiyList = document.querySelector('.activity-list');
    activitiyList.innerHTML = '';
    activties.forEach((activity) => {
        let activityHTML = `
        <div class="card col-md-4  me-md-3 mb-3">
            <div class="card-body">
                <h5 class="card-title">${activity.title}</h5>
                <p class="activity-date fw-light fst-italic">${activity.period}</p>
                <p class="card-text">${activity.description}.</p>
                <a href="${activity.link}" class="text-decoration-underline">See Certifications</a>
            </div>
        </div>`
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        activitiyList.insertAdjacentHTML('beforeend', activityHTML);
    })
})



//Displayng experience on the main page, not working with admin functions, Runs only after page is loaded.
async function getExperiences() {
    return await fetch("http://localhost:3000/experience")
                .then((response) => response.json())
                .then((data) => data);
}

document.addEventListener("DOMContentLoaded",async function(){
    let experiences = await getExperiences();
    let experienceList = document.querySelector('.experience-list');
    experienceList.innerHTML = '';
    experiences.forEach((experience) => {
        let experienceHTML = `
        <div class="individual-experience d-flex">
            <div class="experience-left vw-20">
                <img src="${experience.imageURL}" class="adjust-education-pic" alt="Profile Pic">
            </div>
            <div class="experience-right vw-80">
                <h5 class="experience-title m-0">${experience.title}</h5>
                <p class="experience-organization m-0">${experience.organization}</p>
                <p class="experience-period fw-light fst-italic m-0">${experience.period}</p>
                <p class="experience-location fw-light fst-italic">${experience.location}e</p>
                <p class="experience-description">${experience.description}</p>
                <a href="${experience.testimonial_link}" class="text-decoration-underline">See Testimonials</a>
            </div>
         </div>
        `
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        experienceList.insertAdjacentHTML('beforeend', experienceHTML);
    })
})


//Displayng education on the main page, not working with admin functions, Runs only after page is loaded.
async function getEducation() {
    return await fetch("http://localhost:3000/education")
                .then((response) => response.json())
                .then((data) => data);
}

document.addEventListener("DOMContentLoaded",async function(){
    let educations = await getEducation();
    let educationList = document.querySelector('.education-list');
    educationList.innerHTML = '';
    educations.forEach((education) => {
        let educationHTML = `
        <div class="individual-educaion d-flex">
            <div class="education-left vw-20">
                <img src="${education.imageURL}" class="adjust-education-pic" alt="Profile Pic">
            </div>
            <div class="education-right vw-80">
                <h5 class="education-title m-0">${education.title}</h5>
                <p class="education-organization m-0">${education.organization}</p>
                <p class="education-period fw-light fst-italic m-0">${education.period}</p>
                <p class="education-location fw-light fst-italic">${education.location}</p>
                <p class="education-description">${education.description}</p>
                <a href="${education.certification_link}" class="text-decoration-underline">See Certifications</a>
            </div>
      </div>
        `
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        educationList.insertAdjacentHTML('beforeend', educationHTML);
    })
})

//Displayng skills on the main page, not working with admin functions, Runs only after page is loaded.
async function getSkills() {
    return await fetch("http://localhost:3000/skills")
                .then((response) => response.json())
                .then((data) => data);
}
//Node rejection error in this code
document.addEventListener("DOMContentLoaded",async function(){
    let skills = await getSkills();
    let skillList = document.querySelector('.skills-list');
    skillList.innerHTML = '';
    skills.forEach((skill) => {
        let skillHTML = `
        <div class="p-3 me-2 mb-2 bg-secondary bg-gradient text-white col-md-3 col-xs-6">${skill.name}</div>
        `
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        skillList.insertAdjacentHTML('beforeend', skillHTML);
    })
})

//Displayng profile on the main page, not working with admin functions, Runs only after page is loaded.
async function getprofile() {
    return await fetch("http://localhost:3000/profile")
                .then((response) => response.json())
                .then((data) => data);
}

document.addEventListener("DOMContentLoaded",async function(){
    let profile = await getprofile();
    let profilePara = document.querySelector('.profile-paragraph');
    profilePara.innerHTML = '';
    profilePara.textContent = profile.description;
})
