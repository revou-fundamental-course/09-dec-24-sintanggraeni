var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 50,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
  });
});
