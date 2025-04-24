//mobile navigation menu
const mobileNav = document.querySelector(".mobile-menu-btn");
const navbar = document.querySelector(".mobile-nav-links");
const closeBtn = document.querySelector(".close-btn");

const toggleMenu = () => {
  navbar.classList.toggle("active");
};

const closeMenu = () => {
  navbar.classList.remove("active");
};

mobileNav.addEventListener("click", () => toggleMenu());
closeBtn.addEventListener("click", () => closeMenu());

const links = document.querySelectorAll(".navigation-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active-btn"));
    this.classList.add("active-btn");
  });
});

//slider
const slider = $(".slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".btn-next").on("click", function () {
  slider.slick("slickNext");
});

$(".btn-prev").on("click", function () {
  slider.slick("slickPrev");
});

//accordion
function toggleAccordion(header) {
  const icon = header.querySelector('.icon');
  const content = header.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.textContent = '➕';
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.textContent = '➖';
  }
}

//display monthly/yearly plan
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.plan-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    })
  })
})

const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");
const monthlyPlan = document.getElementById("monthPlan");
const yearlyPlan = document.getElementById("yearPlan");

const displayMonthlyPlan = () => {
  monthlyPlan.style.display = "flex";
  yearlyPlan.style.display = "none";

  if(window.screen.width >= 576) {
    monthlyPlan.style.display = "row";
  }
};

const displayYearlyPlan = () => {
  yearlyPlan.style.display = "flex";
  monthlyPlan.style.display = "none";

  if(window.screen.width >= 576) {
    yearlyPlan.style.display = "row";
  }
};

monthlyBtn.addEventListener("click", displayMonthlyPlan);
yearlyBtn.addEventListener("click", displayYearlyPlan);