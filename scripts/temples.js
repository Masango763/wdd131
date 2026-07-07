// Target DOM Elements
const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#animate-nav");

// 1. Footer Date Operations
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// 2. Mobile Responsive Hamburg Button Interface Toggle
if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
}