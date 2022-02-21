{
//Update Education
    //Disable one of the function: the image file function or the image URL function
    function disableInput(input1, input2){
        if(input1.value){
            input2.disabled = true;
        } else{
            input2.disabled = false;
        }
    }
    //Event Delegation, since the posts are stored in the database before loading the HTML
    let educationBlock = document.querySelector('.admin-education-list');
    let updateEducationBtn = document.querySelector('#update-education-btn');
    let updateEducationForm = document.querySelector('.update-admin-education-form')
    let edu_id;

    let educationTitleInput = document.querySelector('#update-admin-education-title');
    let educationOrganizationInput = document.querySelector('#update-admin-education-organization');
    let educationPeriodInput = document.querySelector('#update-admin-education-period');
    let educationLocationInput = document.querySelector('#update-admin-education-location');
    let educationDescriptionInput = document.querySelector('#update-admin-education-description');
    let educationImageURLInput = document.querySelector('#update-admin-education-imageURL');
    let educationImageFileInput = document.querySelector('#update-admin-education-image-file');
    let educationCertificationInput = document.querySelector('#update-admin-education-certification-link');

    //Display information on update form
    educationBlock.addEventListener('click', async function(e){
        if(e.target.classList.contains('edit-btn')){
            edu_id = e.target.parentNode.parentNode.querySelector('.id').value; 
            let educationPostInfo = await fetch('/education/'+edu_id)
                .then((response) => response.json())
                .then((data) => data)

            educationTitleInput.value = educationPostInfo.title;
            educationOrganizationInput.value = educationPostInfo.organization;
            educationPeriodInput.value = educationPostInfo.period;
            educationLocationInput.value = educationPostInfo.location;
            educationDescriptionInput.value = educationPostInfo.description;
            educationCertificationInput.value = educationPostInfo.certification_link;
            updateEducationBtn.click();
        }
    })

    //Update when press submit
    updateEducationForm.addEventListener('submit', async function(e){
        e.preventDefault();

        let data = new FormData(); 
        data.append('title', educationTitleInput.value);
        data.append('organization', educationOrganizationInput.value);
        data.append('period', educationPeriodInput.value);
        data.append('description', educationDescriptionInput.value);
        data.append('location', educationLocationInput.value);
        data.append('certification_link',  educationCertificationInput.value);

        await fetch('/education/'+edu_id, {
            method: 'PUT',
            body: data
        }).then((response) => response.text()).then((data) => window.history.go())
    })
    educationImageURLInput.addEventListener('change', () => disableInput(educationImageURLInput, educationImageFileInput));
    educationImageFileInput.addEventListener('change', () =>  disableInput(educationImageFileInput, educationImageURLInput));





//Update Experience
    //Event Delegation, since the posts are stored in the database before loading the HTML
    let experienceBlock = document.querySelector('.admin-experience-list');
    let updateexperienceBtn = document.querySelector('#update-experience-btn');
    let updateexperienceForm = document.querySelector('.update-admin-experience-form')
    let exp_id;

    let experienceTitleInput = document.querySelector('#update-admin-experience-title');
    let experienceOrganizationInput = document.querySelector('#update-admin-experience-organization');
    let experiencePeriodInput = document.querySelector('#update-admin-experience-period');
    let experienceLocationInput = document.querySelector('#update-admin-experience-location');
    let experienceDescriptionInput = document.querySelector('#update-admin-experience-description');
    let experienceImageURLInput = document.querySelector('#update-admin-experience-imageURL');
    let experienceImageFileInput = document.querySelector('#update-admin-experience-image-file');
    let experienceTestimonialInput = document.querySelector('#update-admin-experience-testimonial-link');

    //Display information on update form
    experienceBlock.addEventListener('click', async function(e){
        if(e.target.classList.contains('edit-btn')){
            exp_id = e.target.parentNode.parentNode.querySelector('.id').value; 
            let experiencePostInfo = await fetch('/experience/'+exp_id)
                .then((response) => response.json())
                .then((data) => data)

            experienceTitleInput.value = experiencePostInfo.title;
            experienceOrganizationInput.value = experiencePostInfo.organization;
            experiencePeriodInput.value = experiencePostInfo.period;
            experienceLocationInput.value = experiencePostInfo.location;
            experienceDescriptionInput.value = experiencePostInfo.description;
            experienceTestimonialInput.value = experiencePostInfo.testimonial_link;
            updateexperienceBtn.click();
        }
    })

    //Update when press submit
    updateexperienceForm.addEventListener('submit', async function(e){
        e.preventDefault();

        let data = new FormData(); 
        data.append('title', experienceTitleInput.value);
        data.append('organization', experienceOrganizationInput.value);
        data.append('period', experiencePeriodInput.value);
        data.append('description', experienceDescriptionInput.value);
        data.append('location', experienceLocationInput.value);
        data.append('testimonial_link',  experienceTestimonialInput.value);

        await fetch('/experience/'+exp_id, {
            method: 'PUT',
            body: data
        }).then((response) => response.text()).then((data) => window.history.go())
    })
    experienceImageURLInput.addEventListener('change', () => disableInput(experienceImageURLInput, experienceImageFileInput));
    experienceImageFileInput.addEventListener('change', () =>  disableInput(experienceImageFileInput, experienceImageURLInput));


//Update Activities
    //Event Delegation, since the posts are stored in the database before loading the HTML
    let activitiesBlock = document.querySelector('.admin-activities-table');
    let updateActivitiesBtn = document.querySelector('#update-activities-btn');
    let updateActivitiesForm = document.querySelector('.update-admin-activities-form')
    let acv_id;

    let activitiesTitleInput = document.querySelector('#update-admin-activities-title');
    let activitiesPeriodInput = document.querySelector('#update-admin-activities-period');
    let activitiesDescriptionInput = document.querySelector('#update-admin-activities-description');
    let activitiesLinkInput = document.querySelector('#update-admin-activities-link');

    //Display information on update form
    activitiesBlock.addEventListener('click', async function(e){
        if(e.target.classList.contains('edit-btn')){
            acv_id = e.target.parentNode.parentNode.querySelector('.id').value; 
            let activitiesPostInfo = await fetch('/activities/'+acv_id)
                .then((response) => response.json())
                .then((data) => data)

            activitiesTitleInput.value = activitiesPostInfo.title;
            activitiesPeriodInput.value = activitiesPostInfo.period;
            activitiesDescriptionInput.value = activitiesPostInfo.description;
            activitiesLinkInput.value = activitiesPostInfo.link;
            updateActivitiesBtn.click();
        }
    })

    //Update when press submit
    updateActivitiesForm.addEventListener('submit', async function(e){
        e.preventDefault();

        let data = new FormData(); 
        data.append('title', activitiesTitleInput.value);
        data.append('period', activitiesPeriodInput.value);
        data.append('description', activitiesDescriptionInput.value);
        data.append('link', activitiesLinkInput.value);

        await fetch('/activities/'+acv_id, {
            method: 'PUT',
            body: data
        }).then((response) => response.text()).then((data) => window.history.go())
    })


//Update Projects
    //Event Delegation, since the posts are stored in the database before loading the HTML
    let projectsBlock = document.querySelector('.admin-projects-table');
    let updateProjectsBtn = document.querySelector('#update-projects-btn');
    let updateprojectsForm = document.querySelector('.update-admin-projects-form')
    let pro_id;

    let projectsTitleInput = document.querySelector('#update-admin-projects-title');
    let projectsDescriptionInput = document.querySelector('#update-admin-projects-description');
    let projectsLinkInput = document.querySelector('#update-admin-projects-github-link');

    //Display information on update form
    projectsBlock.addEventListener('click', async function(e){
        if(e.target.classList.contains('edit-btn')){
            pro_id = e.target.parentNode.parentNode.querySelector('.id').value; 
            let projectsPostInfo = await fetch('/project_official/'+pro_id)
                .then((response) => response.json())
                .then((data) => data)

            projectsTitleInput.value = projectsPostInfo.title;
            projectsDescriptionInput.value = projectsPostInfo.description;
            projectsLinkInput.value = projectsPostInfo.github_link;
            updateProjectsBtn.click();
        }
    })

    //Update when press submit
    updateprojectsForm.addEventListener('submit', async function(e){
        e.preventDefault();

        let data = new FormData();
        data.append('title', projectsTitleInput.value);
        data.append('description', projectsDescriptionInput.value);
        data.append('github_link', projectsLinkInput.value);
        data.append('date', new Date()); //Updated date

        await fetch('/project_official/'+pro_id, {
            method: 'PUT',
            body: data
        }).then((response) => response.text()).then((data) => window.history.go())
    })


}