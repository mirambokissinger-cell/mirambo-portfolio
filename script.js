/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* Close mobile menu when a link is clicked */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


/* ================= TYPING EFFECT ================= */

const words = [
    "Software Engineer",
    "Cybersecurity Enthusiast",
    "Web Developer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= CONTACT FORM ================= */

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for your message! " +
            "I will get back to you soon."
        );

        this.reset();

    });