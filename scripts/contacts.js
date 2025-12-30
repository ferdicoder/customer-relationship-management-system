const customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || []

const addCustomerButton = document.querySelector('.add-button'); 
// form buttons
const closeFormButton = document.querySelector('.close-button'); 
//const saveCustomerButton = document.querySelector('.save-button'); 

const customerForm = document.querySelector('.add-customer-form');
const customerName = document.querySelector('.js-customer-name');
const customerRole = document.querySelector('.js-customer-role'); 
const customerCompany = document.querySelector('.js-customer-company'); 

addCustomerButton.addEventListener('click', ()=>{
  customerForm.style.visibility = 'visible'; 
}); 
closeFormButton.addEventListener('click', ()=>{
  customerForm.style.visibility = 'hidden'; 
}); 
customerForm.addEventListener('submit', (event)=>{
  event.preventDefault();  

  const newContact = {
    name: customerName.value, 
    role: customerRole.value, 
    company: customerCompany.value
  }
  
  customerDetails.push(newContact); 
  localStorage.setItem('customerDetails', JSON.stringify(customerDetails)); 
  console.log(customerDetails); 
  
  customerName.value = ''; 
  customerRole.value = ''; 
  customerCompany.value = ''; 
});
