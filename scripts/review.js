let reviewCount = Number(window.localStorage.getItem("reviewCounter-ls")) || 0;
reviewCount++;
window.localStorage.setItem("reviewCounter-ls", reviewCount);

document.getElementById("reviewCounter").textContent = reviewCount;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
