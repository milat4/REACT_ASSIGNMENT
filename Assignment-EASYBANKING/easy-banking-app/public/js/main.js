var ham = document.querySelector('.hamburger')
  var close = document.querySelector('.close')
  var nav = document.querySelector('nav')
  var overlay = document.querySelector('.overlay')

  overlay.style.zIndex = "-1";

  ham.addEventListener("click", () => {
    nav.classList.remove("mobile-menu");
    nav.classList.add("mobile-menu-in");
    overlay.style.opacity = "1";
    // overlay.style.display = "block"
    // ham.style.display = "none";
    close.classList.remove('d-none');
    ham.classList.add('d-none');
    overlay.style.zIndex = "10";
  })

  close.addEventListener("click", () => {
    nav.classList.add("mobile-menu");
    nav.classList.remove("mobile-menu-in");
    overlay.style.opacity = "0";
    // overlay.style.display = "none";
    // ham.style.display = "block";
    close.classList.add('d-none');
    ham.classList.remove('d-none');
  })