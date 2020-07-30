console.log("Hello friends");
let name=document.getElementById("userName");
let email=document.getElementById("email");
let phoneNumber=document.getElementById("phoneNumber");

validName=false;
validEmail=false;
validPhone=false;

// valid your username

name.addEventListener("blur",()=>{
  console.log("name is blurred")
  let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,12}$/;
  str=name.value;
  if (regex.test(str)) {
    console.log("your name is valid");
    name.classList.remove("is-invalid");
    validName=true;

  } else {
    console.log("your name is  not valid");
    name.classList.add("is-invalid");
    validName=false;
  }
})

// valid your email

email.addEventListener("blur",()=>{
  console.log("email is blurred")
  let regex=/^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]{2,7})$/;
  str=email.value;
  if (regex.test(str)) {
    console.log("your email is valid");
    email.classList.remove("is-invalid");
    validEmail=true;

  } else {
    console.log("your email is  not valid");
    email.classList.add("is-invalid");
    validEmail=false;
  }
})

// valid your phone

phoneNumber.addEventListener("blur",()=>{
  console.log("phone is blurred")
  let regex=/^([0-9]){10}$/;
  str=phoneNumber.value;
  if (regex.test(str)) {
    console.log("your phone number is valid");
    phoneNumber.classList.remove("is-invalid");
    validPhone=true;

  } else {
    console.log("your phone number is  not valid");
    phoneNumber.classList.add("is-invalid");
    validPhone=false;
  }
})

// validation for submitting your form
submit=document.getElementById("submit")
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log("you clicked on submit button");
  if (validName&&validEmail&&validPhone) {
    let failure=document.getElementById("failure");
    console.log("phone,user,name are valid.Submitting the form");
    let success=document.getElementById("success");
    success.classList.add('show');
    $('#failure').hide();
    $('#success').show();
  } else {
    console.log("phone,user,name are not valid.Hence not submitting the form");
     let failure=document.getElementById("failure");
     failure.classList.add('show');
     $('#success').hide();
      $('#failure').show();
  }
})
