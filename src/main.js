import "iconify-icon";

const menuToggle = document.getElementById("menu-toggle");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  backdrop.classList.remove("hidden");
}

function closeSidebarFunc() {
  sidebar.classList.add("-translate-x-full");
  backdrop.classList.add("hidden");
}

menuToggle.addEventListener("click", openSidebar);
closeSidebar.addEventListener("click", closeSidebarFunc);
backdrop.addEventListener("click", closeSidebarFunc);
