const mobileNav = document.querySelector(".mobile-menu-btn");
const navbar = document.querySelector(".mobile-nav-links");
const closeBtn = document.querySelector(".close-btn");

const toggleMenu = () => {
    navbar.classList.toggle('active');
}

const closeMenu = () => {
    navbar.classList.remove('active');
}

mobileNav.addEventListener("click", () => toggleMenu());
closeBtn.addEventListener("click", () => closeMenu());

const links = document.querySelectorAll(".navigation-link");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove('active-btn'));
        this.classList.add('active-btn');
    });
});