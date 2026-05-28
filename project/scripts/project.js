const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

const products = [
  {
    name: "Almendras",
    category: "Frutos Secos",
    description: "Fruto seco nutritivo, ideal para colaciones, desayunos y recetas saludables.",
    image: "images/frutos-secos.webp"
  },
  {
    name: "Semillas de Chía",
    category: "Semillas",
    description: "Semillas ricas en fibra, perfectas para yogures, licuados y preparaciones naturales.",
    image: "images/semillas.webp"
  },
  {
    name: "Yerba Mate",
    category: "Yerba Mate",
    description: "Producto tradicional argentino para disfrutar en cualquier momento del día.",
    image: "images/yerba-mate.webp"
  },
  {
    name: "Especias Naturales",
    category: "Especias",
    description: "Condimentos ideales para dar sabor a tus comidas de forma simple y natural.",
    image: "images/especias.webp"
  }
];

const categories = [
  {
    title: "Frutos Secos",
    description: "Opciones prácticas y nutritivas para todos los días.",
    image: "images/frutos-secos.webp"
  },
  {
    title: "Semillas",
    description: "Ideales para sumar fibra y nutrientes a tus comidas.",
    image: "images/semillas.webp"
  },
  {
    title: "Yerba Mate",
    description: "Variedades para acompañar una tradición argentina.",
    image: "images/yerba-mate.webp"
  }
];

function updateFooter() {
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = `Última modificación: ${document.lastModified}`;
  }
}

function setupNavigation() {
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      menuButton.classList.toggle("open");
    });
  }
}

function createCard(item) {
  return `
    <article class="card">
      <img src="${item.image}" alt="${item.title || item.name}" loading="lazy">
      <div class="card-content">
        <h3>${item.title || item.name}</h3>
        <p>${item.description}</p>
        ${item.category ? `<p><strong>Categoría:</strong> ${item.category}</p>` : ""}
      </div>
    </article>
  `;
}

function displayFeaturedCategories() {
  const container = document.querySelector("#featured-categories");

  if (container) {
    container.innerHTML = categories.map((category) => createCard(category)).join("");
  }
}

function displayProducts(productList) {
  const container = document.querySelector("#products-container");

  if (container) {
    container.innerHTML = productList.map((product) => createCard(product)).join("");
  }
}

function setupProductFilters() {
  const buttons = document.querySelectorAll(".filter-buttons button");

  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;

        localStorage.setItem("favoriteCategory", selectedCategory);

        if (selectedCategory === "all") {
          displayProducts(products);
        } else {
          const filteredProducts = products.filter(
            (product) => product.category === selectedCategory
          );

          displayProducts(filteredProducts);
        }
      });
    });
  }
}

function displayWelcomeMessage() {
  const welcomeMessage = document.querySelector("#welcome-message");
  const favoriteCategory = localStorage.getItem("favoriteCategory");

  if (welcomeMessage && favoriteCategory && favoriteCategory !== "all") {
    welcomeMessage.textContent = `Vimos que te interesan los productos de la categoría ${favoriteCategory}. Te invitamos a visitar nuestra sección de productos.`;
  } else if (welcomeMessage) {
    welcomeMessage.textContent = "Explorá nuestras categorías destacadas y conocé más sobre nuestros productos.";
  }
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const response = document.querySelector("#form-response");

  if (form && response) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const interest = document.querySelector("#interest").value;

      if (name !== "") {
        localStorage.setItem("customerName", name);
        localStorage.setItem("customerInterest", interest);

        response.textContent = `Gracias, ${name}. Recibimos tu mensaje sobre ${interest}.`;
        form.reset();
      } else {
        response.textContent = "Por favor, ingresá tu nombre antes de enviar el formulario.";
      }
    });
  }
}

updateFooter();
setupNavigation();
displayFeaturedCategories();
displayProducts(products);
setupProductFilters();
displayWelcomeMessage();
setupContactForm();