export function contactSavings(event, form) {
    event.preventDefault();
    
    const staff = +form.elements['staff'].value;
    const calls = +form.elements['calls'].value;
    const travels = +form.elements['travels'].value;
    const rate = +form.elements['rate'].value;

    const savedDailyCalls = rate * calls * staff * .5;
    const saveDailyTravel =  rate * travels * staff * .5;

    setValue('js-staff',staff);
    setValue('js-calls',calls);
    setValue('js-travels',travels);
    setValue('js-rate', rate);

    setCurrencyValue('js-calls-d',savedDailyCalls);
    setCurrencyValue('js-calls-m',savedDailyCalls * 30);
    setCurrencyValue('js-calls-y',savedDailyCalls * 365);

    setCurrencyValue('js-travels-d',saveDailyTravel);
    setCurrencyValue('js-travels-m',saveDailyTravel * 30);
    setCurrencyValue('js-travels-y',saveDailyTravel * 365);

    setCurrencyValue('js-total-d', saveDailyTravel + savedDailyCalls); 
    setCurrencyValue('js-total-m', (saveDailyTravel + savedDailyCalls) * 30); 
    setCurrencyValue('js-total-y', (saveDailyTravel + savedDailyCalls) * 365); 
 
    const newEl =  document.querySelector('.popup-savings__background');
    const backGround =  document.querySelector('.popup-savings__content');

    if(newEl.classList.contains('hidden')) {
        newEl.classList.remove('hidden');
        backGround.classList.remove('hidden');
    }
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  });

function setCurrencyValue(id: string, value: number) {
    document.getElementById(id).innerText = formatter.format(value);
}

function setValue(id: string, value: number) {
    document.getElementById(id).innerText = value.toString();
}


