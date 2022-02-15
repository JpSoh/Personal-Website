//Update Education
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

    //Get current details
    educationBlock.addEventListener('click', async function(e){
        if(e.target.classList.contains('edit-btn')){
            edu_id = e.target.parentNode.parentNode.querySelector('.id').value; 
            let educationPostInfo = await fetch('http://localhost:3000/education/'+edu_id)
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

        let data = new FormData(); //By using the form format, we can work with files
        data.append('title', educationTitleInput.value);
        data.append('organization', educationOrganizationInput.value);
        data.append('period', educationPeriodInput.value);
        data.append('description', educationDescriptionInput.value);
        data.append('location', educationLocationInput.value);
        data.append('certification_link',  educationCertificationInput.value);

        await fetch('http://localhost:3000/education/'+edu_id, {
            method: 'PUT',
            body: data
        }).then((response) => response.text()).then((data) => window.history.go())
    })
    educationImageURLInput.addEventListener('change', () => disableInput(educationImageURLInput, educationImageFileInput));
    educationImageFileInput.addEventListener('change', () =>  disableInput(educationImageFileInput, educationImageURLInput));
}