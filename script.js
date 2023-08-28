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
    // Providing the Full Name
    if(nameField.value.includes(' ')) {
      nameErrMessage.textContent = '';
      nameField.style.border = '1px solid hsl(229, 24%, 87%)';
    } else {
      nameErrMessage.textContent = 'Provide full name';
    }
  }
  
  // //EMAIL FIELD
  // Check if mail is in correct form
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if (mailField.value && mailField.value.match(emailPattern)) {
    mailErrMessage.textContent = '';
    mailField.style.border = '1px solid hsl(229, 24%, 87%)'
  } else if(!mailField.value.match(emailPattern)) {
    mailErrMessage.textContent = 'Email not valid'
  }
  
  if(!mailField.value) {
    mailErrMessage.textContent = 'This field is required'
    mailField.style.border = '1px solid hsl(354, 84%, 57%)'
  }
  
  // NUMBER FIELD
  //validation of phone number
  const mobilePhonePattern1 = /^(\+234\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  const mobilePhonePattern2 = /^(\+234\s?7\d{3}|\(?08\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  const mobilePhonePattern3 = /^(\+234\s?7\d{3}|\(?09\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  // const landLinePhonePattern = /\s^\(?(0[1-6]{1}[0-9]{3}\)?[0-9]{6})\s*/;
  // console.log(mobilePhonePattern.test(numberField.value))

  if(numberField.value && numberField.value.length === 11 && mobilePhonePattern1 || mobilePhonePattern2 || mobilePhonePattern3) {
    console.log('okay')
    noErrMessage.textContent = '';
    numberField.style.border = '1px solid hsl(229, 24%, 87%)';
  }

  if(!numberField.value) {
    noErrMessage.textContent = 'This field is required';
    numberField.style.border = '1px solid hsl(354, 84%, 57%)'
  }



  // IF ALL VALUE IS INPUTED
  // If all input value field is filled move the step No. 2
  // if(nameField.value && mailField.value && numberField.value) {

  // }
})