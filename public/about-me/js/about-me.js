let contactRequestForm = document.querySelector('.email-request-form');

contactRequestForm.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email')
    let message = document.querySelector('#message')
    if(name.value && email.value && message.value){
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
        .then(() => alert("Form successfully submitted!"));
    } else{
        alert("Incomplete form. Please ensure all fields are filled in!");
    }
})

//Displayng profile on the main page, not working with admin functions, Runs only after page is loaded.
async function getAbout() {
    return await fetch("http://localhost:3000/about")
                .then((response) => response.json())
                .then((data) => data);
}

document.addEventListener("DOMContentLoaded",async function(){
    let abouts = await getAbout();
    let aboutPara = document.querySelector('.about-me-writing');
    aboutPara.innerHTML = '';
    abouts.forEach((about) => {
        let aboutHTML = `
        <p class="profile-paragraph">${about.description}</p>
        `
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        aboutPara.insertAdjacentHTML('beforeend', aboutHTML);
    })
})
