const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const reviewCount = document.querySelector("#review-count");

let count = Number(localStorage.getItem("reviewCount")) || 0;
count += 1;

localStorage.setItem("reviewCount", count);

reviewCount.textContent = count;
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;