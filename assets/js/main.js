---
# Front matter comment to ensure Jekyll properly reads file.
---

const navbarScroll = (scrollPosition) => {
  let navbar = document.getElementById('main-navbar');
  let icon = document.getElementById('navbar-icon');
  if (scrollPosition > 100) {
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transparent");
    icon.classList.remove("d-none");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-dark");
    icon.classList.add("d-none");
  }
};

window.addEventListener('scroll', function(e) {
  var scrollPosition = window.scrollY;
  navbarScroll(scrollPosition);
});
