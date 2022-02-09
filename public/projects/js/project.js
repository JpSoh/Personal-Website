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

//Displayng Projects on the project page, not working with admin functions, Runs only after page is loaded.
async function getProjects() {
    return await fetch("http://localhost:3000/projects")
                .then((response) => response.json())
                .then((data) => data);
}

//Transform Date to look for last updated time
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let lastUpdate = function(date){
    let now = new Date();
    let diff = now - date;
    let days = Math.floor(diff / day)
    let hours = Math.floor(diff / hour);
    let minutes = Math.floor(diff / minute);
    let seconds = Math.floor(diff / second);
    let projectStatement;
    if (days > 1){
        projectStatement = `Last updated ${days} days ago`
    } else if (hours > 1){
        projectStatement = `Last updated ${hours} hours ago`
    } else if (minutes > 1){
        projectStatement = `Last updated ${minutes} minutes ago`
    } else {
        projectStatement = `Last updated ${seconds} seconds ago`
    }
    return projectStatement;
}



document.addEventListener("DOMContentLoaded",async function(){
    let projects = await getProjects();
    let projectList = document.querySelector('.project-list');
    projectList.innerHTML = '';
    projects.forEach((project) => {
        projectDateStatement = lastUpdate(project.date);
        let projectHTML = `
        <div class="project col-5 shadow mb-5">
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${project.imageURL}" class="img-fluid rounded-start project-img" alt="${project.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.github_link}" class="btn btn-primary mb-5">Further Details</a>
                            <p class="card-text"><small class="text-muted">${projectDateStatement}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        projectList.insertAdjacentHTML('beforeend', projectHTML);
    })

})

//Display more results when pressing read more btn, note that this might have error since class project will not be dispayed till results are received from database 
async function moreProjects(){
    let projects = document.querySelector('.project-list .project:nth-child(n+5)');
    let readMoreBtn = document.querySelector('.read-more-button');
    readMoreBtn.addEventListener('click', function(){
        if (projects.style.display === "none"){
            projects.style.display = "block";
        } else {
            projects.style.display = "none";
        }
    })

}