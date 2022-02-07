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
        let acitivityHTML = `
        <div class="col">
            <div class="card" >
                <img src="${post.imageURL}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <a href="/landmark?id=${post.id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`
        //Insert HTML, there are 4 values we can choose for insertAdjacentHTML
        articles.insertAdjacentHTML('beforeend', postHTML);
    })
})