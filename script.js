'use strict';
const nextBtn = document.querySelector('.nxt-btn');
let mailField = document.querySelector('.email-field');
let numberField = document.querySelector('.number-field');
let nameField = document.querySelector('.name-field');

// ERROR MEESAGE
let noErrMessage = document.querySelector('.no-err-message');
let mailErrMessage = document.querySelector('.mail-err-message');
let nameErrMessage = document.querySelector('.name-err-message')




// Move to next step if;
// All input field is field correctly
// Move to the next step
// change active icon to 2

//Adding an eventListener to Next Step
nextBtn.addEventListener('click', () => {

 //NAME-FIELD
 //Check if the Name field has a Number(if it has, then give an error message)
 let hasNumber = /\d/.test(nameField.value);

 if(!nameField.value) {
  nameErrMessage.textContent = 'This field is required';
  nameField.style.border = '1px solid hsl(354, 84%, 57%)'
  
 } else if(hasNumber) {
  nameErrMessage.textContent = 'Name should not contain number';
  nameField.style.border = '1px solid hsl(354, 84%, 57%)'
 } else if(nameField.value) {
  nameErrMessage.textContent = '';
  nameField.style.border = '1px solid hsl(229, 24%, 87%)'
 }

 // //EMAIL FIELD
 // Check if mail is in correct form
 let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

 if(!mailField.value) {
  mailErrMessage.textContent = 'This field is required'
  mailField.style.border = '1px solid hsl(354, 84%, 57%)'
 }

 if (mailField.value && mailField.value.match(emailPattern)) {
  mailErrMessage.textContent = '';
  mailField.style.border = '1px solid hsl(229, 24%, 87%)'
 } else {
  mailErrMessage.textContent = 'Email not valid'
 }

 // NUMBER FIELD
 //validation of phone number
 if(!numberField.value) {
  noErrMessage.textContent = 'This field is required';
  numberField.style.border = '1px solid hsl(354, 84%, 57%)'

 }else if(numberField.value.length === 10) {
  console.log('done')
 }
  else {
  noErrMessage.textContent = '';
  numberField.style.border = '1px solid hsl(229, 24%, 87%)'
 }
})