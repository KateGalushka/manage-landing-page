import '../styles/style.scss';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';


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
		document.body.style.overflow = 'auto';
	}
})
const menuLinks = document.querySelectorAll(".navbar__link");
menuLinks.forEach(link => link.addEventListener('click', () => {
	navbar.classList.remove('mobile-active');
	overlay.classList.remove('mobile-active');
//  navbarList.classList.remove('mobile-active');
	closeIcon.style.display = 'none';
	gamburgerIcon.style.display = 'block';
	document.body.style.overflow = 'auto';
}))

//***************Slider******************************* */

const swiper = new Swiper('.swiper', {
	// loop: true,
	autoHeight: true,
	// slidesPerView: 2.5,
	spaceBetween: 20,
	// slidesPerGroup: 1,
	centeredSlides: true,
	initialSlide: 1,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1280: {
			slidesPerView: 3,
		},
	},

	modules: [Pagination],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true


	}
})

//*****Animation *************** */


function onEntry(entry) {
	entry.forEach(el => {
		if (el.isIntersecting) {
			el.target.classList.add('show');
		} else {
			el.target.classList.remove('show');
		}
	});
}

let options = {
	// threshold: [1],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animate');
elements.forEach(el=>observer.observe(el));

