<<<<<<< HEAD
// Dynamically set the current year for the copyright notice
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date of the document
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
=======
const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
>>>>>>> d9bfdc3d2108aa113295e80c3a21d5eb91fe3fd1
