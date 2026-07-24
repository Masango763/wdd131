// Sample Threat Objects Array
const threats = [
  {
    name: "DDoS Infrastructure Flooding",
    severity: "High",
    category: "Network",
    description: "Volumetric traffic designed to exhaust ISP link capacities."
  },
  {
    name: "Credential Phishing",
    severity: "Medium",
    category: "Social Engineering",
    description: "Targeted campaigns aimed at compromising administrative access."
  },
  {
    name: "BGP Route Hijacking",
    severity: "High",
    category: "Routing",
    description: "Malicious redirection of Internet traffic prefixes."
  }
];

// Navigation Toggle for Mobile
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector(".navigation");
if (menuBtn && nav) {
  menuBtn.innerHTML = "&#9776;"; // Hamburger menu icon
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Function to Render Threat Cards using Template Literals
function renderThreats(filteredList) {
  const container = document.querySelector("#threat-cards");
  if (!container) return;
  
  container.innerHTML = "";
  filteredList.forEach((threat) => {
    const card = document.createElement("figure");
    card.className = "card";
    card.innerHTML = `
      <h3>${threat.name}</h3>
      <p><strong>Severity:</strong> <span class="badge ${threat.severity.toLowerCase()}">${threat.severity}</span></p>
      <p><strong>Category:</strong> ${threat.category}</p>
      <p>${threat.description}</p>
    `;
    container.appendChild(card);
  });
}

// Risk Calculator Handler
const calcForm = document.querySelector("#calc-form");
if (calcForm) {
  calcForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firewall = document.querySelector("#firewall").value;
    const patching = document.querySelector("#patching").value;
    
    let score = "Moderate Risk";
    if (firewall === "basic" && patching === "monthly") {
      score = "High Risk";
    } else if (firewall === "ngfw" && patching === "automated") {
      score = "Low Risk";
    }

    const resultDiv = document.querySelector("#calc-result");
    if (resultDiv) {
      resultDiv.innerHTML = `<p class="result-box"><strong>Assessed Risk Rating:</strong> ${score}</p>`;
    }
    
    // Save to LocalStorage
    localStorage.setItem("lastRiskScore", score);
  });
}

// Display LocalStorage Data on Home Page
const scoreDisplay = document.querySelector("#score-display");
if (scoreDisplay) {
  const lastScore = localStorage.getItem("lastRiskScore");
  if (lastScore) {
    scoreDisplay.innerHTML = `<p class="result-box">Your last recorded assessment: <strong>${lastScore}</strong></p>`;
  }
}

// Incident Form Handler
const incidentForm = document.querySelector("#incident-form");
if (incidentForm) {
  incidentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const responseDiv = document.querySelector("#form-response");
    if (responseDiv) {
      responseDiv.innerHTML = `<p class="result-box">Report successfully submitted and logged locally.</p>`;
    }
  });
}

// Safe Filter Event Listeners
document.querySelector("#filter-all")?.addEventListener("click", () => renderThreats(threats));
document.querySelector("#filter-high")?.addEventListener("click", () => {
  renderThreats(threats.filter(t => t.severity === "High"));
});
document.querySelector("#filter-medium")?.addEventListener("click", () => {
  renderThreats(threats.filter(t => t.severity === "Medium"));
});

// Footer Metadata
const yearEl = document.querySelector("#currentyear");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modEl = document.querySelector("#lastModified");
if (modEl) modEl.textContent = `Last Modification: ${document.lastModified}`;

// Initial Render
renderThreats(threats);
