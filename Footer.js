
const footerEmail = document.getElementById('support-email');
const footerError = document.getElementById('footer_email_error');
const footerBtn = document.getElementById('footer-btn');

// Email validation pattern
const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

footerBtn.addEventListener('click', function(e) {
  if (!footerEmail.value.match(email_check)) {
    e.preventDefault();
    footerError.innerHTML = "Valid email is required";
  } else {
    footerError.innerHTML = "";
  }

  if (footerEmail.value.match(email_check)) {
  footerError.innerHTML = "";
  footerEmail.value = ""; 
}

});
