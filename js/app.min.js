document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},

		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
		  // when window width is >= 320px
		  320: {
			slidesPerView: 1,
			spaceBetween: 20
		  },
		  // when window width is >= 480px
		  480: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  // when window width is >= 640px
		  640: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  992: {
			slidesPerView: 4,
			spaceBetween: 20
		  },
		  1600: {
			slidesPerView: 6,
			spaceBetween: 20
		  }
		}
	  });

})
