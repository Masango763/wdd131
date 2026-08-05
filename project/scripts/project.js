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

function renderThreatCards(items, targetContainer) {
    if (!targetContainer) return;

    const htmlMarkup = items.map(item => `
        <article class="card">
            <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="250">
            <div class="card-body">
                <h3>${item.title}</h3>
                <p><strong>Risk Level:</strong> ${item.riskLevel}</p>
                <p>${item.description}</p>
                <button class="btn-bookmark" data-id="${item.id}" type="button">📌 Bookmark Resource</button>
            </div>
        </article>
    `).join("");

    targetContainer.innerHTML = htmlMarkup;
}

function filterThreats(selectedCategory, targetGrid) {
    if (selectedCategory === "all") {
        renderThreatCards(threatData, targetGrid);
    } else {
        const filtered = threatData.filter(item => item.category === selectedCategory);
        renderThreatCards(filtered, targetGrid);
    }
}

function updateBookmarkDisplay() {
    const favCountSpan = document.querySelector("#fav-count");
    if (favCountSpan) {
        const count = localStorage.getItem("cyberguard_bookmarks") || 0;
        favCountSpan.textContent = count;
    }
}

function saveBookmark() {
    let count = parseInt(localStorage.getItem("cyberguard_bookmarks")) || 0;
    count += 1;
    localStorage.setItem("cyberguard_bookmarks", count);
    updateBookmarkDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Year
    const currentYearSpan = document.querySelector("#current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Dynamic Last Modified Date and Time
    const lastModifiedPara = document.querySelector("#last-modified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }

    // 3. Initial Bookmark Count
    updateBookmarkDisplay();

    // 4. Render Cards
    const featuredGrid = document.querySelector("#featured-grid");
    const threatGrid = document.querySelector("#threat-grid");

    if (featuredGrid) {
        renderThreatCards(threatData.slice(0, 3), featuredGrid);
    }

    if (threatGrid) {
        renderThreatCards(threatData, threatGrid);
    }

    // 5. Navigation Menu Toggle
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const primaryNav = document.querySelector("#primary-nav");
    if (hamburgerBtn && primaryNav) {
        hamburgerBtn.addEventListener("click", () => {
            primaryNav.classList.toggle("open");
        });
    }

    // 6. Category Filter
    const categoryFilter = document.querySelector("#category-filter");
    if (categoryFilter && threatGrid) {
        categoryFilter.addEventListener("change", (e) => {
            filterThreats(e.target.value, threatGrid);
        });
    }

    // 7. Click Event for Bookmark Buttons
    document.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("btn-bookmark")) {
            saveBookmark();
            const originalText = e.target.textContent;
            e.target.textContent = "✅ Bookmarked!";
            e.target.style.backgroundColor = "#10b981";
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = "";
            }, 1200);
        }
    });

    // 8. Contact Form
    const securityForm = document.querySelector("#security-form");
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
