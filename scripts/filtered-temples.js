const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/temples/aba-nigeria.webp",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/temples/manti-temple.webp",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temples/payson-temple.webp",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/temples/yigoguam-temple.webp",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temples/washington-temple.webp",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/temples/lima-temple.webp",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temples/mexico-temple.webp",
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 17299,
    imageUrl: "images/temples/argentina-temple.webp",
  },
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34127,
    imageUrl: "images/temples/cordoba-temple.webp",
  },
  {
    templeName: "Colonia Juárez Chihuahua México",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "images/temples/chihuahua-temple.webp",
  },
];

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const templeContainer = document.querySelector("#temple-container");
const pageTitle = document.querySelector("main h1");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

function getDedicationYear(dedicated) {
  return parseInt(dedicated.split(",")[0]);
}

function createTempleCard(temple) {
  return `
    <article class="temple-card">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
        width="400"
        height="250"
        >
    </article>
  `;
}

function displayTemples(filteredTemples, title) {
  pageTitle.textContent = title;
  templeContainer.innerHTML = filteredTemples.map(createTempleCard).join("");
}

document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples, "Home");
});

document.querySelector("#old").addEventListener("click", () => {
  const oldTemples = temples.filter(
    (temple) => getDedicationYear(temple.dedicated) < 1900,
  );
  displayTemples(oldTemples, "Old Temples");
});

document.querySelector("#new").addEventListener("click", () => {
  const newTemples = temples.filter(
    (temple) => getDedicationYear(temple.dedicated) > 2000,
  );
  displayTemples(newTemples, "New Temples");
});

document.querySelector("#large").addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples, "Large Temples");
});

document.querySelector("#small").addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples, "Small Temples");
});

displayTemples(temples, "Home");
