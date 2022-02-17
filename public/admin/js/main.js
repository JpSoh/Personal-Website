async function getActivities() {
    return await fetch("http://localhost:3000/activities")
                .then((response) => response.json())
                .then((data) => data);
}

// Display activties as a table on admin page
async function addActivities() {
    let activities = await getActivities();
    let activityBlock = document.querySelector(".admin-activities-table tbody");
    activityBlock.innerHTML = '';
    let i = 1;
    activities.forEach((activity) => {
        let activityHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${activity.id}"></td>
            <td class="title">${activity.title}</td>
            <td class="period">${activity.period}</td>
            <td class="link">${activity.link}</td>
            <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>`;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        activityBlock.insertAdjacentHTML('beforeend', activityHTML);
    })
}

async function getContact() {
    return await fetch("http://localhost:3000/contact_me")
                .then((response) => response.json())
                .then((data) => data);
}

// Display contact requests as a table on admin page
async function showContact() {
    let contacts = await getContact();
    let contactBlock = document.querySelector("#v-pills-contacts tbody");
    contactBlock.innerHTML = '';
    let i = 1;
    contacts.forEach((contact) => {
        let contactHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${contact.id}"></td>
            <td class="name">${contact.name}</td>
            <td class="period">${contact.email}</td>
            <td class="message">${contact.date}</td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>
        <tr>
            <td colspan="5" class="text">${contact.message}</td>
        </tr>
        `;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        contactBlock.insertAdjacentHTML('beforeend', contactHTML);
    })
}

async function getExperiences() {
    return await fetch("http://localhost:3000/experience")
                .then((response) => response.json())
                .then((data) => data);
}

// Display experience as a table on admin page
async function addExperiences() {
    let experiences = await getExperiences();
    let experienceBlock = document.querySelector(".admin-experience-list tbody");
    experienceBlock.innerHTML = '';
    let i = 1;
    experiences.forEach((experience) => {
        let experienceHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${experience.id}"></td>
            <td class="title">${experience.title}</td>
            <td class="organization">${experience.organization}</td>
            <td class="period">${experience.period}</td>
            <td class="location">${experience.location}</td>
            <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>`;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        experienceBlock.insertAdjacentHTML('beforeend', experienceHTML);
    })
}

async function getEducation() {
    return await fetch("http://localhost:3000/education")
                .then((response) => response.json())
                .then((data) => data);
}

// Display education as a table on admin page
async function addEducation() {
    let educations = await getEducation();
    let educationBlock = document.querySelector(".admin-education-list tbody");
    educationBlock.innerHTML = '';
    let i = 1;
    educations.forEach((education) => {
        let educationHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${education.id}"></td>
            <td class="title">${education.title}</td>
            <td class="organization">${education.organization}</td>
            <td class="period">${education.period}</td>
            <td class="location">${education.location}</td>
            <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>`;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        educationBlock.insertAdjacentHTML('beforeend', educationHTML);
    })
}

async function getSkills() {
    return await fetch("http://localhost:3000/skills")
                .then((response) => response.json())
                .then((data) => data);
}

// Display skills as a table on admin page
async function addSkills() {
    let skills = await  getSkills();
    let skillBlock = document.querySelector(".admin-skills-list tbody");
    skillBlock.innerHTML = '';
    let i = 1;
    skills.forEach((skill) => {
        let skillHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${skill.id}"></td>
            <td class="name">${skill.name}</td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>`;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        skillBlock.insertAdjacentHTML('beforeend', skillHTML);
    })
}

async function getProjects() {
    return await fetch("http://localhost:3000/project_official")
                .then((response) => response.json())
                .then((data) => data);
}
// Display projects as a table on admin page
async function addProjects() {
    let projects = await getProjects();
    let projectBlock = document.querySelector(".admin-projects-table tbody");
    projectBlock.innerHTML = '';
    let i = 1;
    projects.forEach((project) => {
        let projectHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${project.id}"></td>
            <td class="title">${project.title}</td>
            <td class="date">${project.date}</td>
            <td class="link">${project.github_link}</td>
            <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>`;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        projectBlock.insertAdjacentHTML('beforeend',projectHTML);
    })
}

async function getProfile() {
    return await fetch("http://localhost:3000/profile")
                .then((response) => response.json())
                .then((data) => data);
}
// Display profile changes as a table on admin page
async function editProfile() {
    let profiles = await getProfile();
    let profileBlock = document.querySelector(".admin-profile-table tbody");
    profileBlock.innerHTML = '';
    let i = 1;
    profiles.forEach((profile) => {
        let profileHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${profile.id}"></td>
            <td class="date">${profile.date}</td>
        </tr>
        <tr>
            <td colspan="5" class="description">${profile.description}</td>
        </tr>
        `;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        profileBlock.insertAdjacentHTML('beforeend',profileHTML);
    })
}

async function getAbout() {
    return await fetch("http://localhost:3000/about")
                .then((response) => response.json())
                .then((data) => data);
}
// Display profile changes as a table on admin page
async function editAbout() {
    let abouts = await getAbout();
    let aboutBlock = document.querySelector(".admin-about-table tbody");
    aboutBlock.innerHTML = '';
    let i = 1;
    abouts.forEach((about) => {
        let aboutHTML = `
        <tr>
            <td>${i++} <input class="id" type="hidden" value="${about.id}"></td>
            <td class="date">${about.date}</td>
        </tr>
        <tr>
            <td colspan="5" class="description">${about.description}</td>
        </tr>
        `;
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        aboutBlock.insertAdjacentHTML('beforeend',aboutHTML);
    })
}


//Runs only after page is loaded, 
document.addEventListener("DOMContentLoaded",async function(){
    addActivities();
    showContact();
    addExperiences();
    addEducation();
    addSkills();
    editAbout();
    editProfile();
    addProjects();
})