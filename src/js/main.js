const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 100,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});
const swiperFeedback = new Swiper('.swiper-feedback', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 100,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	zoom: {
		maxRatio: 5,
	},
});

const swiperCertificate = new Swiper('.swiper-certificate', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 6,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	zoom: {
		maxRatio: 5,
	},
});

$(".work__item").not(":first").hide();
$(".work__tab").click(function () {
	$(".work__tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".work__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");