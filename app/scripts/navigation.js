//////////////////////////////////////////////////
// LOCAL VARS
//////////////////////////////////////////////////
const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".div-links-nav a");
let menuIcon = document.querySelector(".menu-icon");
let closeButton = document.querySelector(".close-menu-btn");

//////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////

// Create the menu icon
if (!menuIcon) {
  menuIcon = document.createElement("span");
  menuIcon.classList.add("menu-icon");
  menuIcon.innerHTML = "&#9776;";
  nav.prepend(menuIcon);
}

// Create the close button
if (!closeButton) {
  closeButton = document.createElement("button");
  closeButton.classList.add("close-menu-btn");
  closeButton.innerHTML = "&times;";
  nav.append(closeButton);
}

// Open the menu
function openMenu() {
  nav.classList.add("menu-opened");
  document.body.classList.add("no-scroll");
}

// Close the menu
function closeMenu() {
  nav.classList.remove("menu-opened");
  document.body.classList.remove("no-scroll");
}

// Add event listeners to open and close the menu
menuIcon.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// Add event listeners to close the menu when a link is clicked
document.querySelectorAll(".div-links-nav a, .div-links-nav-footer a")
  .forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

// Add event listener to scroll
window.addEventListener("scroll", () => {
  let current = "";

  // Get current section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class from all links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Redirect to login page
window.Login = function Login() {
  window.location.href = "./pages/authForm.html";
};

// Show product information
function showProductInformation(productName, productDescription) {
  const popupOverlay = document.createElement("div");
  popupOverlay.classList.add("popup-overlay");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("popup-close");
  closeButton.innerHTML = "✕";
  closeButton.onclick = () => document.body.removeChild(popupOverlay);

  const title = document.createElement("h3");
  title.textContent = productName;

  const description = document.createElement("p");
  description.textContent = productDescription;

  popupContent.appendChild(closeButton);
  popupContent.appendChild(title);
  popupContent.appendChild(description);
  popupOverlay.appendChild(popupContent);

  document.body.appendChild(popupOverlay);
}

// Assign events to product cards
function assignProductEvents() {
  const products = [
    {
      name: "Golden Nectar",
      description: "Miel dorada con un sabor suave y delicado.",
    },
    {
      name: "Honeycomb Bliss",
      description:
        "Miel con panal natural, perfecta para disfrutar como postre.",
    },
    {
      name: "Drip Delight",
      description: "Miel líquida ideal para endulzar tus bebidas favoritas.",
    },
    {
      name: "Bee Flight",
      description: "Una mezcla única de mieles de diferentes flores.",
    },
    {
      name: "Dark Essence",
      description: "Miel oscura con un sabor profundo y aromático.",
    },
    {
      name: "Wax Glow",
      description:
        "Cera pura para diversos usos en cosmética y cuidado personal.",
    },
  ];

  // Assign events to each product card
  const icons = document.querySelectorAll(".producto-card .rotate-icon");
  icons.forEach((icon, index) => {

    // Show product information when icon is clicked
    icon.onclick = () => {
      const { name, description } = products[index];
      showProductInformation(name, description);
    };
  });
}

// Assign events to product cards
document.addEventListener("DOMContentLoaded", assignProductEvents);