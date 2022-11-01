export function estimatedSavings(event, form) {
  
    event.preventDefault();

    const physicianCountEl= document.getElementById('es-p-count');
    const hourlyWagePEl= document.getElementById('es-p-wage');
    const nursesCountEl= document.getElementById('es-n-count');
    const hourlyWageNEl= document.getElementById('es-n-wage');

    const physicianCount = +form.elements['physiciansCount'].value;
    const hourlyWageP = +form.elements['physiciansWage'].value;
    const nursesCount = +form.elements['nursesCount'].value;
    const hourlyWageN = +form.elements['nursesWage'].value;
    const familyCommunication = +form.elements['time'].value;
    const percentSavings=+form.elements['percent'].value;

    const currentRequiredFields = (value: number, element: HTMLElement)=> {

      if(value !== 0) {
        element.setAttribute("required", "");
        if (!form.checkValidity()) {
          form.reportValidity();
          }
     }
  
      else {
        element.removeAttribute("required");
      }
   }

   if (physicianCount ===0 && hourlyWageP===0 && nursesCount===0 && hourlyWageN===0 ) {
    return
   }

   currentRequiredFields(physicianCount, hourlyWagePEl);
   currentRequiredFields(hourlyWageP, physicianCountEl);
   currentRequiredFields(nursesCount, hourlyWageNEl);
   currentRequiredFields(hourlyWageN, nursesCountEl);
   

   if (!form.checkValidity()) {
    return
   }
 

const result = (((physicianCount*hourlyWageP*familyCommunication*365) + (nursesCount* hourlyWageN*familyCommunication*365 ))* percentSavings/100) - (50*(physicianCount+nursesCount)*12);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  });

(document.getElementById('result-block-value') as HTMLInputElement).innerText =
  `Projected Annual Cost Savings: ${formatter.format(result)}`;

}




