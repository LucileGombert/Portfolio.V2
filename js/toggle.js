// Navbar responsive
let navToggle = document.querySelector('.nav_toggle');
let nav = document.querySelector('.nav_bloc');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  nav.classList.toggle('active')
})
