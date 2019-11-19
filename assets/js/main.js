const navbarScroll = (scrollPosition) => {
  let navbar = document.getElementById('main-navbar');
  if (scrollPosition > 100) {
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-dark");
  }
};

window.addEventListener('scroll', function(e) {
  var scrollPosition = window.scrollY;
  navbarScroll(scrollPosition);
});
