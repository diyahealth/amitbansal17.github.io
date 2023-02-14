var element = document.getElementById('burger');
var getNavElement = document.getElementById('burger-menu');
var main  = document.querySelector('body');

main.addEventListener('click', (e) => {
   
 var result = e.target.closest('.general-nav') || e.target.closest('#burger') ;

 if(result == null) {
  getNavElement.classList.add('hide-mobile-header');
  return;
 }

 if(e.target.closest('.general-nav')) {
  return;
 }
  getNavElement.classList.toggle('hide-mobile-header')
})