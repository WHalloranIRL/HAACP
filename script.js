function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex" || menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Function to toggle submenu visibility
function toggleSubmenu(element) {
  var submenuContent = element.querySelector(".submenu-content");
  submenuContent.classList.toggle("show-submenu");
}

// Function to load a page into the iframe
function loadPage(url) {
  var iframe = document.getElementById("contentFrame");
  iframe.src = url;
}

function loadPage(url) {
  const frame = document.getElementById("contentFrame");
  frame.src = url;
  frame.style.display = "block";
  const landingPage = document.getElementById("landingPage");
  landingPage.style.display = "none";
  const menu = document.getElementById("menu");
  if (window.innerWidth < 600) {
    menu.style.display = "none";
  }
}
