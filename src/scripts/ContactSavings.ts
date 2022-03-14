export function contactSavings() {

    console.log('eeee');
    

    const newEl =  document.querySelector('.popup-savings__background');
    const backGround =  document.querySelector('.popup-savings__content');

    if(newEl.classList.contains('hidden')) {
        newEl.classList.remove('hidden');
        backGround.classList.remove('hidden');
    }
   
}