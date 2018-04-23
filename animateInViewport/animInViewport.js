//script that animates elements with the class of .anim which are visible in viewport

(function() {
	
	//function that checks if element is in viewport
	//returns true or false
	function isInViewport(el) {
		if (el.getBoundingClientRect().top >= 0) {
			return true;
		} else if (el.getBoundingClientRect().top > window.innerHeight) {
			return false;
		}
	}


	//function that looks for elements with class .anim
	//then checks if those elements are in the viewport to animate them
	//by adding class .anim-start
	function animate() {
		var elsToAnim = document.querySelectorAll('.anim'); 

		elsToAnim.forEach(function(elToAnim) {
			if (isInViewport(elToAnim)) {
				elToAnim.classList.add('anim-start');
				console.log('add anim');
			} else {
				elToAnim.classList.remove('anim-start');
				console.log('remove anim');
			}	
		})
	}

	//on scroll invoke function responsible for animating elements
	window.addEventListener('scroll', animate);

		
})();