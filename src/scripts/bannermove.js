const messages = ["Welcome to our site", "Explore the stars", "Join our community"];
const el = document.querySelector(".rotating-text");
let index = 0;

setInterval(() => {

  el.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % messages.length;
    el.textContent = messages[index];
   
    el.style.opacity = 1;
  }, 500); 
}, 3000); 