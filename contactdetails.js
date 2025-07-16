// Contact form validation
const name = document.getElementById('sign-na');
const email = document.getElementById('sign-em');
const message = document.getElementById('sign-ps');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');

// Footer form validation
const footerEmail = document.getElementById('support-email');
const footerError = document.getElementById('footer_email_error');
const footerBtn = document.getElementById('footer-btn');

// Email regex pattern
const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Contact Form Submission
form.addEventListener('submit', (e) => {
  let message_check = /^.{10,}$/; 

  if (name.value.trim() === '') {
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  } else {
    name_error.innerHTML = "";
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = "Valid email is required";
  } else {
    email_error.innerHTML = "";
  }

  if (!message.value.match(message_check)) {
    e.preventDefault();
    pass_error.innerHTML = "Message must be at least 10 characters";
  } else {
    pass_error.innerHTML = "";
  }
});

// Footer Email Submit Validation
footerBtn.addEventListener('click', (e) => {
  if (!footerEmail.value.match(email_check)) {
    e.preventDefault();
    footerError.innerHTML = "Valid email is required";
  } else {
    footerError.innerHTML = "";
  }

  if (footerEmail.value.match(email_check)) {
  footerError.innerHTML = "";
  footerEmail.value = ""; // clear input field
}

});

