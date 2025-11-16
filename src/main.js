import './style.css' 
import "iconify-icon";

const menuToggle = document.getElementById("menu-toggle");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
}

function closeSidebarFunc() {
  sidebar.classList.add("-translate-x-full");
}

menuToggle.addEventListener("click", openSidebar);
closeSidebar.addEventListener("click", closeSidebarFunc);

