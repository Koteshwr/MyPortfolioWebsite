window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.transition = "0.5s ease"
    const scrolled = window.scrollY > 0;
    
    if (scrolled) {
        navbar.style.backgroundColor = "black";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
  });