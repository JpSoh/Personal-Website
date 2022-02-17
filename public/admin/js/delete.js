{
//Delete contact requests when clicked remove button
  //Event Delegation, since the posts are stored in the database before loading the HTML
  let contactsBlock = document.querySelector('#v-pills-contacts');
  //e stands for event, target stores properties of the click 
  contactsBlock.addEventListener('click', function(e){
      //We delete the post if we press the remove btn
      if(e.target.classList.contains('remove-btn')){
          //Jump 2 levels from remove btn to td to tr
          let id = e.target.parentNode.parentNode.querySelector('.id').value; 
          //Connect to server
          fetch('http://localhost:3000/contact_me/' +id, {
              method: 'DELETE'
          }).then((response) => response.text())
          .then(() => window.history.go())
      }
  })


//Delete activities when clicked remove button
 //Event Delegation, since the posts are stored in the database before loading the HTML
 let adminBlock = document.querySelector('.admin-activities-table');
 //e stands for event, target stores properties of the click 
 adminBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('http://localhost:3000/activities/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })

 //Delete education when clicked remove button
 //Event Delegation, since the posts are stored in the database before loading the HTML
 let educationBlock = document.querySelector('.admin-education-list');
 //e stands for event, target stores properties of the click 
 educationBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('http://localhost:3000/education/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })

 //Delete experience when clicked remove button
 //Event Delegation, since the posts are stored in the database before loading the HTML
 let experienceBlock = document.querySelector('.admin-experience-list');
 //e stands for event, target stores properties of the click 
 experienceBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('http://localhost:3000/experience/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })

 //Delete projects when clicked remove button
 //Event Delegation, since the posts are stored in the database before loading the HTML
 let projectsBlock = document.querySelector('.admin-projects-table');
 //e stands for event, target stores properties of the click 
 projectsBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('http://localhost:3000/project_official/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })
 
 //Delete skills when clicked remove button
 //Event Delegation, since the posts are stored in the database before loading the HTML
 let skillsBlock = document.querySelector('.admin-skills-list');
 //e stands for event, target stores properties of the click 
 skillsBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('http://localhost:3000/skills/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })
}