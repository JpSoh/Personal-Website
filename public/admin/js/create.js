//Connect to admin page for education
let createEducationForm = document.querySelector('.admin-education-form');
let educationTitle = document.querySelector('#admin-education-title');
let educationOrganization = document.querySelector('#admin-education-organization');
let educationPeriod = document.querySelector('#admin-education-period');
let educationLocation = document.querySelector('#admin-education-location');
let educationDescription = document.querySelector('#admin-education-description');
let educationImageURL = document.querySelector('#admin-education-imageURL');
let educationImageFile = document.querySelector('#admin-education-image-file');
let educationCertificationLink = document.querySelector('#admin-education-certification-link');

//Disable one of the function: the image file function or the image URL function
function disableInput(input1, input2){
    if(input1.value){
        input2.disabled = true;
    } else{
        input2.disabled = false;
    }
}

//Education POST request 
createEducationForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData(); 
    data.append('title', educationTitle.value);
    data.append('organization', educationOrganization.value);
    data.append('period', educationPeriod.value);
    data.append('description', educationDescription.value);
    data.append('location',  educationLocation.value);
    data.append('certification_link',  educationCertificationLink.value);
    data.append('imageURL',  educationImageURL.value);
    data.append('imageFile', educationImageFile.files[0]); 

    fetch('http://localhost:3000/education', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})
educationImageURL.addEventListener('change', () => disableInput(educationImageURL, educationImageFile));
educationImageFile.addEventListener('change', () =>  disableInput(educationImageFile, educationImageURL));


//Connect to admin pages for experience
let createExperienceForm = document.querySelector('.admin-experience-form');
let experienceTitle = document.querySelector('#admin-experience-title');
let experienceOrganization = document.querySelector('#admin-experience-organization');
let experiencePeriod = document.querySelector('#admin-experience-period');
let experienceLocation = document.querySelector('#admin-experience-location');
let experienceDescription = document.querySelector('#admin-experience-description');
let experienceImageURL = document.querySelector('#admin-experience-imageURL');
let experienceImageFile = document.querySelector('#admin-experience-image-file');
let experienceTestimonialLink = document.querySelector('#admin-experience-testimonial-link');

//Experience POST request 
createExperienceForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData(); 
    data.append('title', experienceTitle.value);
    data.append('organization', experienceOrganization.value);
    data.append('period', experiencePeriod.value);
    data.append('description', experienceDescription.value);
    data.append('location',  experienceLocation.value);
    data.append('testimonial_link',  experienceTestimonialLink.value);
    data.append('imageURL',  experienceImageURL.value);
    data.append('imageFile', experienceImageFile.files[0]); 

    fetch('http://localhost:3000/experience', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})
experienceImageURL.addEventListener('change', () => disableInput(experienceImageURL, experienceImageFile));
experienceImageFile.addEventListener('change', () =>  disableInput(experienceImageFile, experienceImageURL));


//Connect to admin pages for skills
let createSkillsForm = document.querySelector('.admin-skills-form');
let SkillsName = document.querySelector('#admin-skills-name');
//Skills POST request 
createSkillsForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData(); 
    data.append('name', SkillsName.value);
    fetch('http://localhost:3000/skills', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})


//Connect to admin pages for activities
let createactivitiesForm = document.querySelector('.admin-activities-form');
let activitiesTitle = document.querySelector('#admin-activities-title');
let activitiesPeriod = document.querySelector('#admin-activities-period');
let activitiesDescription = document.querySelector('#admin-activities-description');
let activitiesLink = document.querySelector('#admin-activities-link');
//Activities POST request 
createactivitiesForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData(); 
    data.append('title', activitiesTitle.value);
    data.append('period', activitiesPeriod.value);
    data.append('description', activitiesDescription.value);
    data.append('link', activitiesLink.value);

    fetch('http://localhost:3000/activities', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})


//Connect to admin pages for profile
let profileForm = document.querySelector('.admin-profile-form');
let profileDescription = document.querySelector('#admin-profile-description');
//Profile POST request 
profileForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData(); 
    data.append('description', profileDescription.value);
    fetch('http://localhost:3000/profile', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})

//Connect to admin pages for about-me
let aboutForm = document.querySelector('.admin-about-form');
let aboutDescription = document.querySelector('#admin-about-description');
//About POST request 
aboutForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData(); 
    data.append('description', aboutDescription.value);
    fetch('http://localhost:3000/about', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})


//Connect to admin pages for projects
let createProjectsForm = document.querySelector('.admin-projects-form');
let projectsTitle = document.querySelector('#admin-projects-title');
let projectsDescription = document.querySelector('#admin-projects-description');
let projectsImageURL = document.querySelector('#admin-projects-imageURL');
let projectsImageFile = document.querySelector('#admin-projects-image-file');
let projectsGithubLink = document.querySelector('#admin-projects-github-link');
//projects POST request 
createProjectsForm.addEventListener('submit',function(e){
    e.preventDefault();
    let data = new FormData();
    data.append('title', projectsTitle.value);
    data.append('description', projectsDescription.value);
    data.append('imageURL',  projectsImageURL.value);
    data.append('imageFile', projectsImageFile.files[0]); 
    data.append('github_link', projectsGithubLink.value);

    fetch('http://localhost:3000/project_official', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})
projectsImageURL.addEventListener('change', () => disableInput(projectsImageURL, projectsImageFile));
projectsImageFile.addEventListener('change', () =>  disableInput(projectsImageFile, projectsImageURL));



