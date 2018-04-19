//scroll to top & scroll to section scripts

(function() {

	var nav = document.querySelector('.mainNav__list'); //navigation menu
	var btnTop = document.querySelector('.btn-top'); //btn to go to top of the page
	var animationTimer; //id used to stop setInterval function
	var distToScroll, posY;


	//function which animates scroll
	//depending on the current vertical position of scroll
	//moves up or down 
	function animateScroll(e, dist) {
		e.preventDefault();
		posY = window.scrollY; //current vertical position of scroll
		
		if (posY < dist) {
			animationTimer = setInterval(function(){
				scrollAnimDown(dist);
			}, 50);
		} else {
			animationTimer = setInterval(function(){
				scrollAnimUp(dist);
			}, 50);
		}
	}

	//scrolls down the page
	//until Y position of scroll is greater or equal to distance to scroll
	function scrollAnimDown(dist) {
		posY += 50;
		window.scrollTo(0, posY);
		if (posY >= dist) {
			clearInterval(animationTimer);
		}
	}

	//scrolls up the page
	//until Y position of scroll is less or equal to distance to scroll
	function scrollAnimUp(dist) {
		posY -= 50;
		window.scrollTo(0, posY);
		if (posY <= dist) {
			clearInterval(animationTimer);
		}
	}


	//displays btnTop button after scrolling down more than viewport height
	window.addEventListener('scroll', function(){
		if (window.scrollY >= window.innerHeight) {
			btnTop.style.display = 'block';
		} else {
			btnTop.style.display = 'none';
		}
	});


	//moves to top of page when clicking on btnTop
	btnTop.addEventListener('click', function(e) {
		animateScroll(e, 0);
	});


	//event delegation, we wait for clicks on menu links
	nav.addEventListener('click', function(e) {
		
		if (e.target.className === 'mainNav__link') {
	
			var currentLink = e.target;

			if (currentLink.hasAttribute('href') && currentLink.getAttribute('href').charAt(0) === '#' && currentLink.getAttribute('href').length > 1 ) {
				
				//section that we want to scroll to
				var sectionToScroll = document.querySelector(currentLink.hash);
				
				//distance that the page must be srolled to get to chosen section
				distToScroll = sectionToScroll.getBoundingClientRect().top + window.scrollY - (nav.offsetHeight);
				console.log('dist to scroll: ' + distToScroll);

				animateScroll(e, distToScroll);				
			}
		}
		
	});


})();