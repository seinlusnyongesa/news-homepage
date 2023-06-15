let openNavBtn = document.querySelector("#nav_open");
let mobileMenu = document.querySelector("#mobile_menu");
openNavBtn.addEventListener("click", () => {
	mobileMenu.classList.add("show");
});

let navCloseBtn = document.querySelector("#nav_close");
navCloseBtn.addEventListener("click", () => {
	mobileMenu.classList.remove("show");
});
