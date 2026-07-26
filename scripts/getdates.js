// Set current year in copyright
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Set last modified date in footer
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}
