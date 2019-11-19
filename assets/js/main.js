const navbarScroll = (scrollPosition) => {
  let bannerHeight = document.getElementById('main-banner').offsetHeight;
  let navbar = document.getElementById('main-navbar');
  let navbarHeight = navbar.offsetHeight;
  if (scrollPosition > bannerHeight - navbarHeight) {
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
