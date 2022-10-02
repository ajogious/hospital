// Disable form submissions if there are invalid fields
(function() {
   'use strict';
   window.addEventListener('load', function() {
     // Get the forms we want to add validation styles to
     var forms = document.getElementsByClassName('needs-validation');
     // Loop over them and prevent submission
     var validation = Array.prototype.filter.call(forms, function(form) {
       form.addEventListener('submit', function(event) {
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
         }
         form.classList.add('was-validated');
       }, false);
     });
   }, false);
 })();

//  body background
const body = document.body;
const headPart = document.getElementById('headPart');
const navBar = document.getElementById('navBar');

headPart.addEventListener('click', function(){
  body.style.backgroundColor = 'darkgray';
});
headPart.addEventListener('blur', function(){
  body.style.backgroundColor = ''
});
navBar.addEventListener('click', function(){
  let name = window.prompt('Hello! Your name');
  let result = 'You are welcome to University Hospital ' + name;
  alert(result)
})