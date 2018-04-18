//scroll to top & scroll to section scripts

(function() {

	var btnTop = document.querySelector('.btn-top');
	var btnTopPos; //btnTop position from top of page
	var animationTimer;

	//displays btnTop button after scrolling down more than viewport height
	window.addEventListener('scroll', function(){
		if (window.scrollY > window.innerHeight) {
			btnTop.style.display = 'block';
		} else {
			btnTop.style.display = 'none';
		}
	});


	function scrollToTop(e) {
		e.preventDefault();
		btnTopPos = window.scrollY; 
		animationTimer = setInterval(scrollAnimate, 50);
	}

	function scrollAnimate() {
		btnTopPos -= 50;
		window.scrollTo(0, btnTopPos);

		if (btnTopPos <= 0) {
			clearInterval(animationTimer);
		}
	}

	//moves to top of page when clicking on btnTop
	btnTop.addEventListener('click', scrollToTop);

})();