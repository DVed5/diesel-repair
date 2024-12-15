


$(function () {

	$('.header__menu-item').on('click', function (e) {
		e.stopPropagation(); // Останавливаем всплытие клика
		$('.header__submenu').not($(this).find('.header__submenu')).removeClass('active');
		$(this).find('.header__submenu').toggleClass('active');
	});

	// Закрываем подменю при клике вне меню
	$(document).on('click', function () {
		$('.header__submenu').removeClass('active');
	});


	// Открыть/закрыть меню при клике на кнопку
	$('.header__menu-btn').on('click', function (event) {
		event.stopPropagation(); // Останавливаем всплытие события
		$('.header__menu-list').toggleClass('active');
	});

	// Предотвратить закрытие меню при клике внутри него
	$('.header__menu-list').on('click', function (event) {
		event.stopPropagation(); // Останавливаем всплытие события
	});

	// Закрыть меню при клике вне его области
	$(document).on('click', function () {
		$('.header__menu-list').removeClass('active');
	});


	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= 40.5) {
			$('.header__wrapper').addClass('fixed');
			$('.top').css('margin-top', '65px');  // Добавляем отступ для .top
		} else {
			$('.header__wrapper').removeClass('fixed');
			$('.top').css('margin-top', '0');  // Убираем отступ, если прокрутка меньше 40.5px
		}
	});

	$('.services__item').on('click', function () {
		$(this).toggleClass('fixed');
	});



});

let map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
}


const swiper = new Swiper('.swiper', {

	autoplay: {
		delay: 6500,
		disableOnInteraction: false,
	},
	speed: 600,
	loop: true,
});