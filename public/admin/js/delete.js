{
//Delete contact requests when clicked remove button
  let contactsBlock = document.querySelector('#v-pills-contacts');
  contactsBlock.addEventListener('click', function(e){
      //We delete the post if we press the remove btn
      if(e.target.classList.contains('remove-btn')){
          //Jump 2 levels from remove btn to td to tr
          let id = e.target.parentNode.parentNode.querySelector('.id').value; 
          //Connect to server
          fetch('/contact_me/' +id, {
              method: 'DELETE'
          }).then((response) => response.text())
          .then(() => window.history.go())
      }
  })


//Delete activities when clicked remove button
 let adminBlock = document.querySelector('.admin-activities-table');
 adminBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('/activities/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })

 //Delete education when clicked remove button
 let educationBlock = document.querySelector('.admin-education-list');
 educationBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('/education/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })

 //Delete experience when clicked remove button
 let experienceBlock = document.querySelector('.admin-experience-list');
 experienceBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('/experience/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })

 //Delete projects when clicked remove button
 
 let projectsBlock = document.querySelector('.admin-projects-table');
 projectsBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('/project_official/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })
 
 //Delete skills when clicked remove button
 let skillsBlock = document.querySelector('.admin-skills-list');
 skillsBlock.addEventListener('click', function(e){
     //We delete the post if we press the remove btn
     if(e.target.classList.contains('remove-btn')){
         //Jump 2 levels from remove btn to td to tr
         let id = e.target.parentNode.parentNode.querySelector('.id').value; 
         //Connect to server
         fetch('/skills/' +id, {
             method: 'DELETE'
         }).then((response) => response.text())
         .then(() => window.history.go())
     }
 })
}