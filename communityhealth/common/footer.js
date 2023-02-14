(function(){
	var footer=document.querySelector('footer');
	var lastScroll = 0;
	window.addEventListener('scroll', function(event) {
		var currentScroll = window.pageYOffset;
		var isEnd = window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight;
		footer.style.opacity = isEnd || currentScroll < lastScroll ? '1' : '0';
		lastScroll = currentScroll;
	});
})();
