let contactRequestForm = document.querySelector('.email-request-form');

//Send contact form details to server 
contactRequestForm.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email')
    let message = document.querySelector('#message')
    if(name.value && email.value && message.value){
        fetch('/contact_me', {
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
        .then(() => alert("Form successfully submitted!"));
    } else{
        alert("Incomplete form. Please ensure all fields are filled in!");
    }
})

async function getAbout() {
    return await fetch("/about")
                .then((response) => response.json())
                .then((data) => data);
}
//Displayng about me details on the main page, Runs only after page is loaded.
document.addEventListener("DOMContentLoaded",async function(){
    let abouts = await getAbout();
    let aboutPara = document.querySelector('.about-me-writing');
    aboutPara.innerHTML = '';
    abouts.forEach((about) => {
        let aboutHTML = `
        <p class="profile-paragraph">${about.description}</p>
        `
        aboutPara.insertAdjacentHTML('beforeend', aboutHTML);
    })
})
