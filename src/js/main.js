
import '../css/style.css';
import './project.js';

const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const menuClose = document.querySelector("#menu-close");

if (menuToggle && mobileMenu && menuClose) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const typingText = document.querySelector("#typing-text");

if (typingText) {
  const words = [
    "Omar Alm",
    "Front-End",
    "Problem Solver"
  ];

  let wordIndex = 0;
  let charIndex = words[0].length;
  let deleting = true;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingText.textContent = currentWord.slice(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (charIndex === 0 && deleting) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    } else if (charIndex === words[wordIndex].length && !deleting) {
      deleting = true;
      delay = 1500;
    }

    setTimeout(typeEffect, delay);
  }

  setTimeout(typeEffect, 2000);
}
