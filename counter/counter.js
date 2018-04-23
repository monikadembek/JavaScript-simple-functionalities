//counter script

(function() {
	var counters = document.querySelectorAll('.counter__number'); //counter elements
	var counter = counters[0].parentNode; //counter container
	var animated = false; //holds value true or false, depending if animation already took place or not


	//function that checks if element is in viewport
	//returns true or false
	function isInViewport(el) {
		return (el.getBoundingClientRect().top >= 0 
			&& el.getBoundingClientRect().left >= 0 
			&& el.getBoundingClientRect().bottom <= window.innerHeight
			&& el.getBoundingClientRect().right <= window.innerWidth);
	}


	//function which animates counter from 0 to last number
	//and updates element on page
	//animation takes place only once
	function animateCounter (el, start, end) {

		var num = start;

		var timer = setInterval(function(){
			
			if (num <= end) {
				el.innerText = num;	
				num++;
			} else {
				clearInterval(timer);
				animated = true;
			}	
		}, 100);
	}


	//on scroll check if counter is in vieport
	//and then animate it
	window.addEventListener('scroll', function(){
		if (isInViewport(counter) && animated === false) {
			counters.forEach(function(counter) {
				var finishNum = parseInt(counter.textContent);
				animateCounter(counter, 0, finishNum);
			})
		}
	});

		
})();