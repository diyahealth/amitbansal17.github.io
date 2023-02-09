(function(){
	var bg =  document.querySelector('.popup-welcome__background');
	var key = 'gh-demo-popup';
   
    window.addEventListener("load", function() {
		var result = localStorage.getItem(key);
		if(result === 'false' || result == null)  {
			bg.classList.remove('hidden');
		}
	});
	
	var form = document.querySelector('#welcome');
    form.addEventListener("submit", function(e) {
		e.preventDefault();
		localStorage.setItem(key, form.elements.check.checked);
		bg.classList.add('hidden');
	});
})()