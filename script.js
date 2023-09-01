'use strict';
const nextBtn = document.querySelector('.personal-info-btn');
let mailField = document.querySelector('.email-field');
let numberField = document.querySelector('.number-field');
let nameField = document.querySelector('.name-field');

// ERROR MEESAGE
let noErrMessage = document.querySelector('.no-err-message');
let mailErrMessage = document.querySelector('.mail-err-message');
let nameErrMessage = document.querySelector('.name-err-message');

//
  const inView0 = document.querySelector('.in-view--0');
  const inView1 = document.querySelector('.in-view--1');
  const inView2 = document.querySelector('.in-view--2');
  const inView3 = document.querySelector('.in-view--3');

//SWITCHING PLAN TOGGLE BTN
  const switchBtn = document.querySelector('.switch');
  const switchToggle = document.querySelector('.switch-toggle');
  const monthPlan = document.querySelector('.month-plan');
  const yearPlan = document.querySelector('.year-plan');
  const monthAddOns = document.querySelector('.month-adds-on');
  const yearAddOns = document.querySelector('.year-adds-on');
  const finishMonth = document.querySelector('.month-finish');
  const finishYear = document.querySelector('.year-finish');


// WORKING WITH NAME FILED INPUT
const hasNumber = /\d/.test(nameField.value);



// WORKING WITH MOBILE NUMBER
// WORKING WITH FILL PAGE
// Move to next step if;
// All input field is field correctly
// Move to the next step
// change active icon to 2
//Adding an eventListener to Next Step

nextBtn.addEventListener('click', (e) => {
  //NAME-FIELD
  if(!nameField.value) {
    nameErrMessage.textContent = 'This field is required';
    nameField.style.border = '1px solid hsl(354, 84%, 57%)'
  }  else {
    nameErrMessage.textContent = '';
    nameField.style.border = '1px solid hsl(229, 24%, 87%)';
    // Providing the Full Name
  }

  if(nameField.value.includes(' ')) {
    nameErrMessage.textContent = '';
    nameField.style.border = '1px solid hsl(229, 24%, 87%)';
  } else {
    nameErrMessage.textContent = 'Provide full name';
  }

  if(hasNumber) {
    nameErrMessage.textContent = 'Name should not contain number';
    nameField.style.border = '1px solid hsl(354, 84%, 57%)';
    console.log('damn')
  } else if(!hasNumber){
    nameErrMessage.textContent = '';
    nameField.style.border = '1px solid hsl(229, 24%, 87%)';
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
  const mobilePhonePattern1 = /^(\+234\s?7\d{4}|\(?070\d{2}\)?)\s?\d{3}\s?\d{3}$/;
  const mobilePhonePattern2 = /^(\+234\s?7\d{4}|\(?081\d{2}\)?)\s?\d{3}\s?\d{3}$/;
  const mobilePhonePattern3 = /^(\+234\s?7\d{3}|\(?090\d{2}\)?)\s?\d{3}\s?\d{3}$/;

  if(!numberField.value) {
    console.log('no no');
    noErrMessage.textContent = 'This field is required';
    numberField.style.border = '1px solid hsl(354, 84%, 57%)';
  } else if (numberField.value && mobilePhonePattern1.test(numberField.value) || mobilePhonePattern2.test(numberField.value) || mobilePhonePattern3.test(numberField.value)) {
    noErrMessage.textContent = '';
    numberField.style.border = '1px solid hsl(229, 24%, 87%)';
    console.log('yes yes')

  }



  // IF ALL VALUE IS INPUTED
  // If all input value field is filled move the step No. 2

  if(nameField.value.includes(' ') && mailField.value.match(emailPattern)  && mobilePhonePattern1.test(numberField.value)) {
    inView0.classList.remove('active-view')
    inView1.classList.add('active-view')
    console.log('yep')
  } else {
    console.log('nop')
  }



  // WORKING WITH PLAN PAGE
  const plans = document.querySelectorAll('.plan');


  // MONTH PLAN
  document.querySelector('.month-plan').addEventListener('click', e => {
    const clicked = e.target.closest('.plan')

    plans.forEach(plan => {
      plan.classList.remove('active-plan')
    })

    if(clicked) {
      clicked.classList.add('active-plan');
      console.log(clicked)
    }
  })


  // YEAR PLAN
  document.querySelector('.year-plan').addEventListener('click', e => {
    const clicked = e.target.closest('.plan')
    console.log(clicked)
    plans.forEach(plan => {
      plan.classList.remove('active-plan')
    })

    if(clicked) {
      clicked.classList.add('active-plan');
    }
  })
  


  // SWITCHING TOGGLES
  switchBtn.addEventListener('click', e =>{
    switchToggle.classList.toggle('active-toggle')
    
    // CHANGING OF PLAN
    monthPlan.classList.toggle('active-toggle-plan');
    yearPlan.classList.toggle('active-toggle-plan');

    // CHANGING OF ADDS ON
    monthAddOns.classList.toggle('active-add-ons')
    yearAddOns.classList.toggle('active-add-ons')

    // CHANGING OF FINISH UP PLAN
    finishMonth.classList.toggle('active-finish');
    finishYear.classList.toggle('active-finish');

  })

})


// LINKING FILL PAGE WITH THE PLANS PAGE WITH THE GO BACK BUTTON
const fillPagePrev = document.querySelector('.to-fill-page');

// GO BACK TO PREVIOUS PAGE
fillPagePrev.addEventListener('click', function(){
  inView0.classList.add('active-view')
  inView1.classList.remove('active-view')
})


// LINKING PLAN PAGE TO ADD ON
const planBtn = document.querySelector('.plan-btn');

planBtn.addEventListener('click', function(){
  inView1.classList.remove('active-view')
  inView2.classList.add('active-view')
})


// LINKING ADD ONS PAGE TO FINISHING UP
const addsBtn = document.querySelector('.adds-btn');

addsBtn.addEventListener('click', function(){
  inView2.classList.remove('active-view');
  inView3.classList.add('active-view');
})

// GO BACK TO PREVIOUS PAGE
const prevPlanPage = document.querySelector('.prev-plan-page')

prevPlanPage.addEventListener('click', function(){
  inView1.classList.add('active-view');
  inView2.classList.remove('active-view');
})
// WORKING ON TOP ICON
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
  })
})


// WORKING ON THE TEXT CONTENT IN FINISH UP PAGE
const change = document.querySelector('.change');
let finalPlan = document.querySelector('.final-plan');
let finalAmount = document.querySelector('.final-amount');
const activePlan = document.querySelector('.active-plan');
let planPrice = document.querySelector('.plan-price')

change.addEventListener('click', e => {
  e.preventDefault();

  //Activating the Plan page to change plan(optional)
  // inView1.classList.add('active-view');
  // inView3.classList.remove('active-view');

  // CHANGING OF FINISH UP PLAN
    finishMonth.classList.toggle('active-finish');
    // finishYear.classList.toggle('active-finish');

})


