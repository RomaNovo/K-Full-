/*========================= General function =======================*/

function _q(node) {
	return document.querySelector(node);
}

function _qA(node) {
	return document.querySelectorAll(node);
}

/*========================= General setting End====================*/

/*$('.slider').slick({
	autoplay: true,
	autoplaySpeed: 3000
});*/

/*======================= Brg-btn action ===========================*/

let hamburger = document.getElementById('js-brg-header'),
	sNavigation = _q('#js-section-navigation'),
	sNavBrgBut = _q('#js-brg-section-navigation');

hamburger.addEventListener('click', function() {
	hamburger.classList.add('brg_is-active');

	setTimeout(function() {
		sNavigation.classList.add('section-navigation_active');	
	}, 700);

	setTimeout(function() {
		sNavBrgBut.classList.add('brg_is-active');
		document.body.style.overflow='hidden';
	}, 1200);								
});

function hideNav() {
	/*if(e.detail === 1) { alert('good')}*/
	document.body.style.overflow = '';
	sNavBrgBut.classList.remove('brg_is-active');
	setTimeout(function() {
		sNavigation.classList.remove('section-navigation_active');	
	}, 500);
	setTimeout(function() {
		hamburger.classList.remove('brg_is-active');
	}, 900);
}


sNavBrgBut.addEventListener('click', hideNav);
window.addEventListener('resize', hideNav);
window.addEventListener('keydown', function(e)  {
	if(e.key === 'Escape') {
		hideNav()
	}
});

window.onkeydown = function() {
	if(event.key === 'Esc') {
		hideNav()
	}
}

/*======================= Brg-btn action End=======================*/		

/*======================= Scrolling action ========================*/

let sShipment  = _q('#js-section-shipment'),
	sTransport = _q('#js-section-transport'),
	sAdvantage = _q('#js-section-advantage'),
	sAbove     = _q('#js-section-above'),
	sContact   = _q('#js-section-contact');

var linkHeader = _qA('.nav-menu__link'),
	linkHidden = _qA('.menu__link');

var header = _q('.header');




function my_scrollDown() {

	var headerHeight = header.getBoundingClientRect().height;
	if(scroll < blockHeight) {
		window.scrollTo(blockHeight - headerHeight, scroll);
		scroll = scroll + 40;
		timer = setTimeout(my_scrollDown, 5);
	}
	else {
		clearTimeout(timer);
		window.scrollTo(0, blockHeight - headerHeight);
	}
	
}

function my_scrollUp() {
var headerHeight = header.getBoundingClientRect().height;
 	if(scroll > blockHeight) {
 		window.scrollTo(blockHeight - headerHeight , scroll );
		scroll = scroll - 50;
		timer = setTimeout(my_scrollUp, 5);
 	}
 	else {
 		clearTimeout(timer);
 		window.scrollTo(0,blockHeight - headerHeight);
 	}
 	
}

/*function scrolling(array) {

	function my_scrollDown() {

		if(scroll < blockHeight) {
			window.scrollTo(blockHeight, scroll);
			scroll = scroll + 40;
			timer = setTimeout(my_scrollDown, 5);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0, blockHeight);
		}
	}

	function my_scrollUp() {

	 	if(scroll > blockHeight) {
	 		window.scrollTo(blockHeight, scroll );
			scroll = scroll - 50;
			timer = setTimeout(my_scrollUp, 5);
	 	}
	 	else {
	 		clearTimeout(timer);
	 		window.scrollTo(0,blockHeight);
	 	}
	}

	for(var i = 0; i < array.length; i++) {
		var scroll, blockHeight;

		array[i].addEventListener('click', function() {
			event.preventDefault();
			scroll = window.pageYOffset;
			blockHeight = _q(this.getAttribute('href')).offsetTop;

			if(scroll < blockHeight) {
					my_scrollDown();
			} else if(scroll > blockHeight) {
					my_scrollUp();
			}		
		});
	}
}

scrolling(linkHeader);
scrolling(linkHidden);*/

for(var i = 0; i < linkHeader.length; i++) {
	var scroll, blockHeight;

	linkHeader[i].addEventListener('click', function(event) {
		event.preventDefault();
		scroll = window.pageYOffset;
		blockHeight = _q(this.getAttribute('href')).offsetTop;

		if(scroll < blockHeight) {
				my_scrollDown();
		} else if(scroll > blockHeight) {
				my_scrollUp();
		}		
	});
}

for(var i = 0; i < linkHidden.length; i++) {
	var scroll, blockHeight;

	linkHidden[i].addEventListener('click', function(event) {
		event.preventDefault();
		scroll = window.pageYOffset;
		blockHeight = _q(this.getAttribute('href')).offsetTop;
		hideNav();

		setTimeout(function() {
			if(scroll < blockHeight) {
				my_scrollDown();
			} else if(scroll > blockHeight) {
				my_scrollUp();
			}
		},1200);
				
	});
}
/*navMenu.addEventListener('click', function(event) {

	var scroll, blockHeight;
	event.preventDefault();
	scroll = window.pageYOffset;
	blockHeight = _q(event.target.getAttribute('href')).offsetTop;
	
	if(scroll < blockHeight) {
			my_scrollDown();
	} else if(scroll > blockHeight) {
			my_scrollUp();
	}

	function my_scrollDown() {

		if(scroll < blockHeight) {
			window.scrollTo(blockHeight, scroll);
			scroll = scroll + 50;
			timer = setTimeout(my_scrollDown, 5);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0, blockHeight);
		}
	}

	function my_scrollUp() {

	 	if(scroll > blockHeight) {
	 		window.scrollTo(blockHeight, scroll );
			scroll = scroll - 50;
			timer = setTimeout(my_scrollUp, 5);
	 	}
	 	else {
	 		clearTimeout(timer);
	 		window.scrollTo(0,blockHeight);
	 	}
	}
})*/


/*======================= Scrolling action End=====================*/

/*======================= Transport Block =========================*/

let transportBlock = _qA('.section-transport__element'),
	sTransportOffSetTop = sTransport.offsetTop;
var scroll = document.documentElement.scrollTop || window.pageYOffset;	
	if(scroll >= sTransportOffSetTop - 750) {
		/*transportBlock.forEach(function(v) {
			v.style.transform = 'translateX(0px)';
		})*/
		for(var i = 0; i < transportBlock.length; i++ ) {
			transportBlock[i].style.transform = 'translateX(0px)';
		}
	}
	
	window.addEventListener('scroll', function() {
		var scroll = window.pageYOffset;
		
console.log(scroll, sTransport.offsetTop);
		if(scroll >= sTransportOffSetTop - 750) {
			for(var i = 0; i < transportBlock.length; i++ ) {
				transportBlock[i].style.transform = 'translateX(0px)';
			}
			/*transportBlock.forEach(function(v) {
				v.style.transform = 'translateX(0px)';
			})*/
		}
	})
	

/*======================= Transport Block End =====================*/