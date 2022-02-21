let signInForm = document.querySelector('.sign-in-form');


signInForm.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.querySelector('#sign-in-email').value;
    let password = document.querySelector('#sign-in-password').value;
    fetch('/admin_password/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => resp.json()).then((data) => {
        let redirectURL= data.redirectURL;
        //Redirect to admin page if login is successful
        if(redirectURL){
            window.location.href = redirectURL; 
        } else{
            alert("Login failed. Please try again!");
        }
    });
})