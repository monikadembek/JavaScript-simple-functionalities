//accordion script
(function() {

  var headers = document.querySelectorAll('.accordion__header');
 
  //hide content of all accordion elements 
  headers.forEach(function(header){
    header.nextElementSibling.classList.add('hide');
  });

  //add eventListener to all accordion headers which respond to click event
  for (var i = 0; i < headers.length; i++) {
    
  	headers[i].addEventListener('click', function() {
  		
      var currentEl = this;
      //show or hide content of currently clicked item
  		currentEl.nextElementSibling.classList.toggle('hide');

      //hide content of rest of the items
  		for (var j = 0; j < headers.length; j++) {
  			if (headers[j] !== currentEl) {
  				if (!headers[j].nextElementSibling.classList.contains('hide')) {
  					headers[j].nextElementSibling.classList.add('hide');
  				}
  			}
  		}
  	});
  
  }


  //first accordion element is open when you open the page
  //click() method simulates clicking on the element
  headers[0].click();

})();