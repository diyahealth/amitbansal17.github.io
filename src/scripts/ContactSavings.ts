export function contactSavings(event, form) {
    event.preventDefault();
    
    const staff = +form.elements['staff'].value;
    const calls = +form.elements['calls'].value;
    const travels = +form.elements['travels'].value;
    const rate = +form.elements['rate'].value;

    const savedDailyCalls = rate * calls * staff * .5;
    const saveDailyTravel =  rate * travels * staff * .5;

    (document.getElementById('calculation-params') as HTMLInputElement).value =
         `Number of Staff = ${staff}; Hourly Rate = $${rate}; Hours Spent per Day, Phone Calls = ${calls}; Hours Spent per Day, Travel = ${travels}`;

    setValue('js-staff',staff);
    setValue('js-calls',calls);
    setValue('js-travels',travels);
    setValue('js-rate', rate);


    

    setCurrencyValue(['js-calls-d', 'js-calls-d-tablet'],savedDailyCalls);
    setCurrencyValue(['js-calls-m', 'js-calls-m-tablet'],savedDailyCalls * 30);
    setCurrencyValue(['js-calls-y', 'js-calls-y-tablet'],savedDailyCalls * 365);

    setCurrencyValue(['js-travels-d','js-travels-d-tablet'],saveDailyTravel);
    setCurrencyValue(['js-travels-m','js-travels-m-tablet'],saveDailyTravel * 30);
    setCurrencyValue(['js-travels-y','js-travels-y-tablet'],saveDailyTravel * 365);

    setCurrencyValue(['js-total-d','js-total-d-tablet'], saveDailyTravel + savedDailyCalls); 
    setCurrencyValue(['js-total-m','js-total-m-tablet'], (saveDailyTravel + savedDailyCalls) * 30); 
    setCurrencyValue(['js-total-y','js-total-y-tablet'], (saveDailyTravel + savedDailyCalls) * 365); 

}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  });

function setCurrencyValue(ids:string[], value: number) {
ids.forEach(x=> document.getElementById(x).innerText = formatter.format(value))
}

function setValue(id: string, value: number) {
    document.getElementById(id).innerText = value.toString();
}


