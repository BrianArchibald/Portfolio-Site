const nav = document.querySelector('.nav-sticky');
const socialContainer = document.querySelector('#socialContainer');
const navTop = nav.offsetTop;
const mobileNavIcon = document.querySelector('#menu-icon');
const mobileNavList = document.querySelector('#mobile-nav');
const closeMenu = document.querySelector('#close-menu');

function changeMobileNav() {
	if (nav.style.display != "none") {
		mobileNavIcon.style.display = "none";
		nav.style.display = "none";
		mobileNavList.style.display = "block";
	} else {
		mobileNavIcon.style.display = "inline-block";
		nav.style.display = "grid";
		mobileNavList.style.display = "none";
	}
}
mobileNavIcon.addEventListener('click', changeMobileNav);
closeMenu.addEventListener('click', changeMobileNav);