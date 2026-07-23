const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Harare Zimbabwe",
    location: "Harare, Zimbabwe",
    dedicated: "2026, March, 1",
    area: 17250,
    imageUrl: "images/harare.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "images/johannesburg.jpg"
  }
];

const container = document.querySelector("#temple-cards");
const filterTitle = document.querySelector("#filter-title");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

function createTempleCards(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach((temple) => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;
    container.appendChild(card);
  });
}

function getYear(dedicatedString) {
  return parseInt(dedicatedString.split(",")[0].trim());
}

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Home";
  createTempleCards(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Old Temples (Built before 1900)";
  const oldTemples = temples.filter((t) => getYear(t.dedicated) < 1900);
  createTempleCards(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "New Temples (Built after 2000)";
  const newTemples = temples.filter((t) => getYear(t.dedicated) > 2000);
  createTempleCards(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Large Temples (Over 90,000 sq ft)";
  const largeTemples = temples.filter((t) => t.area > 90000);
  createTempleCards(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  filterTitle.textContent = "Small Temples (Under 10,000 sq ft)";
  const smallTemples = temples.filter((t) => t.area < 10000);
  createTempleCards(smallTemples);
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

createTempleCards(temples);
