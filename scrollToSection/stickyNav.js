//sticky nav script

(function(){

	var nav = document.querySelector('.mainNav');
	var navTopPos = nav.offsetTop; //navigation positiom from top of page

	function addStickyNav() {
		//check if page has been scrolled more than navigation positiom from top of page
		//if yes add stickyNav class to make the nav fixed
		//positioned at the top of the page
		if (window.scrollY >= navTopPos) {
			document.body.classList.add('stickyNav');

			//to remove 'jump' of content when nav is removed from 
			//normal flow of the document
			//add padding top to body which equals height of nav
			document.body.style.paddingTop = nav.offsetHeight + 'px';
		} else {
			document.body.classList.remove('stickyNav');
			document.body.style.paddingTop = 0;
		} 
	}

	window.addEventListener('scroll', addStickyNav);


})();