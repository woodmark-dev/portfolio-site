const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const mobileNavBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");
const heroSection = document.getElementById("hero");
const header = document.getElementById("header");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  lightModeBtn.classList.remove("hidden");
} else {
  darkModeBtn.classList.remove("hidden");
}

darkModeBtn.addEventListener("click", function () {
  darkModeBtn.classList.add("hidden");
  lightModeBtn.classList.remove("hidden");

  document.documentElement.classList.add("dark");
  localStorage.setItem("color-theme", "dark");
});

lightModeBtn.addEventListener("click", function () {
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
  document.documentElement.classList.remove("dark");
  localStorage.setItem("color-theme", "light");
});

//toggle

const toggleNav = () => {
  mobileNavBtn.classList.toggle("open");
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
};

mobileNavBtn.addEventListener("click", toggleNav);

mobileMenu.addEventListener("click", toggleNav);

// reveal section

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

//Sticky Navigation

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) header.classList.add("sticky");
  if (entry.isIntersecting) header.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(heroSection);
