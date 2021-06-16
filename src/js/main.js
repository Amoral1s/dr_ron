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

$(".types__item").not(":first").hide();
$(".types__tab").click(function () {
	$(".types__tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".types__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
	// Создание карты.
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчнию: «широта, долгота».
		center: [55.806843, 37.488297],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 13,
		// Элементы управления
		// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
		controls: [

			'zoomControl', // Ползунок масштаба
			'rulerControl', // Линейка
			'routeButtonControl', // Панель маршрутизации
			'trafficControl', // Пробки
			'typeSelector', // Переключатель слоев карты
			'fullscreenControl', // Полноэкранный режим

			// Поисковая строка
			new ymaps.control.SearchControl({
				options: {
					// вид - поисковая строка
					size: 'large',
					// Включим возможность искать не только топонимы, но и организации.
					provider: 'yandex#search'
				}
			})

		]
	});

	// Добавление метки
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
	var myPlacemark = new ymaps.Placemark([55.806687, 37.542949], {
		// Хинт показывается при наведении мышкой на иконку метки.
		hintContent: 'DR RON Cosmetology',
		// Балун откроется при клике по метке.
		balloonContent: 'г. Москва, м. Аэропорт Кочновский проезд, 4к1'
	});

	// После того как метка была создана, добавляем её на карту.
	myMap.geoObjects.add(myPlacemark);

}

