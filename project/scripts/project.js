const threatData = [
    {
        id: 1,
        title: "Phishing Scams & Social Engineering",
        category: "social",
        riskLevel: "High",
        description: "Deceptive emails, texts, or websites designed to trick users into handing over login credentials or sensitive info.",
        image: "https://picsum.photos/id/1018/400/250"
    },
    {
        id: 2,
        title: "Password Reuse & Weak Hashes",
        category: "auth",
        riskLevel: "Critical",
        description: "Using identical passwords across multiple services makes all accounts vulnerable if a single database breaches.",
        image: "https://picsum.photos/id/1074/400/250"
    },
    {
        id: 3,
        title: "Ransomware & Malicious Downloads",
        category: "malware",
        riskLevel: "Critical",
        description: "Malicious software that encrypts user files and demands payment to restore access.",
        image: "https://picsum.photos/id/1060/400/250"
    },
    {
        id: 4,
        title: "Missing Multi-Factor Auth (MFA)",
        category: "auth",
        riskLevel: "Medium",
        description: "Relying on single-factor passwords without secondary authenticator apps or physical security keys.",
        image: "https://picsum.photos/id/1015/400/250"
    }
];

const hamburgerBtn = document.querySelector("#hamburger-btn");
const primaryNav = document.querySelector("#primary-nav");
const featuredGrid = document.querySelector("#featured-grid");
const threatGrid = document.querySelector("#threat-grid");
const categoryFilter = document.querySelector("#category-filter");
const favCountSpan = document.querySelector("#fav-count");
const currentYearSpan = document.querySelector("#current-year");
const securityForm = document.querySelector("#security-form");

function renderThreatCards(items, targetContainer) {
    if (!targetContainer) return;

    const htmlMarkup = items.map(item => `
        <article class="card">
            <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="250">
            <div class="card-body">
                <h3>${item.title}</h3>
                <p><strong>Risk Level:</strong> ${item.riskLevel}</p>
                <p>${item.description}</p>
                <button class="btn-bookmark" data-id="${item.id}">Bookmark Resource</button>
            </div>
        </article>
    `).join("");

    targetContainer.innerHTML = htmlMarkup;
}

function filterThreats(selectedCategory) {
    if (selectedCategory === "all") {
        renderThreatCards(threatData, threatGrid);
    } else {
        const filtered = threatData.filter(item => item.category === selectedCategory);
        renderThreatCards(filtered, threatGrid);
    }
}

function saveBookmark() {
    let count = parseInt(localStorage.getItem("cyberguard_bookmarks")) || 0;
    count += 1;
    localStorage.setItem("cyberguard_bookmarks", count);
    loadBookmarkDisplay();
}

function loadBookmarkDisplay() {
    const savedCount = localStorage.getItem("cyberguard_bookmarks") || 0;
    if (favCountSpan) {
        favCountSpan.textContent = savedCount;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    loadBookmarkDisplay();

    if (featuredGrid) {
        renderThreatCards(threatData.slice(0, 3), featuredGrid);
    }

    if (threatGrid) {
        renderThreatCards(threatData, threatGrid);
    }

    if (hamburgerBtn && primaryNav) {
        hamburgerBtn.addEventListener("click", () => {
            primaryNav.classList.toggle("open");
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", (e) => {
            filterThreats(e.target.value);
        });
    }

    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-bookmark")) {
            saveBookmark();
        }
    });

    if (securityForm) {
        securityForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const feedback = document.querySelector("#form-feedback");
            if (feedback) {
                feedback.textContent = "Report logged successfully. Our team will review your submission!";
                securityForm.reset();
            }
        });
    }
});
