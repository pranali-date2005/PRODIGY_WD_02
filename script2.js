// Contact form message (just demo logic)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".message-status").textContent = "Message sent! Thank you.";
  this.reset();
});
