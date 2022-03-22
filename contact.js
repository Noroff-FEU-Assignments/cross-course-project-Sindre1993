const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const details = document.querySelector("#details");
const detailsError = document.querySelector("#detailsError");

function validateForm(form) {
  form.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
    fullName.classList.remove("invalidFeedback");
  } else {
    fullNameError.style.display = "block";
    fullName.classList.add("invalidFeedback");
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
    subject.classList.remove("invalidFeedback");
  } else {
    subjectError.style.display = "block";
    subject.classList.add("invalidFeedback");
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.classList.remove("invalidFeedback");
  } else {
    emailError.style.display = "block";
    email.classList.add("invalidFeedback");
  }

  if (checkLength(address.value, 9) === true) {
    addressError.style.display = "none";
    address.classList.remove("invalidFeedback");
  } else {
    addressError.style.display = "block";
    address.classList.add("invalidFeedback");
  }

  if (checkLength(details.value, 14) === true) {
    detailsError.style.display = "none";
    details.classList.remove("invalidFeedback");
  } else {
    detailsError.style.display = "block";
    details.classList.add("invalidFeedback");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, characters) {
  if (value.trim().length > characters) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
