import '../styles/style.scss'

const burgerBtn = document.querySelector('.header__burger-btn');
const closeIcon = document.querySelector('.icon-close');
const gamburgerIcon = document.querySelector('.icon-hamburger');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
// const navbarList = document.querySelector('.navbar__list');
burgerBtn.addEventListener('click', () => {
 navbar.classList.toggle('mobile-active');
 overlay.classList.toggle('mobile-active');
//  navbarList.classList.toggle('mobile-active');

	if  (navbar.classList.contains('mobile-active')) {
		gamburgerIcon.style.display = 'none';
		closeIcon.style.display = 'block';
		document.body.style.overflow = 'hidden';
	} else {
		closeIcon.style.display = 'none';
		gamburgerIcon.style.display = 'block';
	}
})
const menuLinks = document.querySelectorAll(".navbar__link");
menuLinks.forEach(link => link.addEventListener('click', () => {
 navbar.classList.remove('mobile-active');
 overlay.classList.remove('mobile-active');
//  navbarList.classList.remove('mobile-active');
	closeIcon.style.display = 'none';
	gamburgerIcon.style.display = 'block';
	document.body.style.overflow = 'visible';
}))



