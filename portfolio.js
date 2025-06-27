const text = "Web Developer | Frontend Enthusiast | Lifelong Learner";
let index = 0;
const speed = 100;
const typewriter = document.querySelector(".typewriter-text");

function typeEffect() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);
