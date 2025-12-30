const customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || []

const addCustomerButton = document.querySelector('.add-button'); 
// form buttons
const closeFormButton = document.querySelector('.close-button'); 
//const saveCustomerButton = document.querySelector('.save-button'); 

// form data
const customerForm = document.querySelector('.add-customer-form');
const customerName = document.querySelector('.js-customer-name');
const customerAge = document.querySelector('.js-customer-age');
const customerContact = document.querySelector('.js-customer-contact'); 
const customerAddress = document.querySelector('.js-customer-address'); 
const customerRole = document.querySelector('.js-customer-role'); 
const customerCompany = document.querySelector('.js-customer-company'); 

// for rendering
let customerProfileContainer = document.querySelector('.customer-profiles'); 

renderCustomerProfiles(); 

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
    age: customerAge.value,
    contact: customerContact.value, 
    address: customerAddress.value,
    role: customerRole.value, 
    company: customerCompany.value
  }
  customerDetails.push(newContact); 
  localStorage.setItem('customerDetails', JSON.stringify(customerDetails)); 
  console.log(customerDetails); 
  
  customerName.value = ''; 
  customerAge.value = '';
  customerContact.value = '';
  customerAddress.value = '';
  customerRole.value = ''; 
  customerCompany.value = ''; 
  customerProfileContainer.innerHTML = ''; 
  renderCustomerProfiles();
});

function renderCustomerProfiles(){
  if(customerDetails.length === 0){
    customerDetails.innerHTML = '<h1>No Customer</h1>'
  }
  let profileContainer = ''; 
  customerDetails.forEach((customer)=>{
    profileContainer += `
      <div class="profile-card">
        <div class="customer-profile-pic">
          <img src="/assets/account-profile.svg">
        </div>
        <div class="customer-info">
          <p class="customer-name">${customer.name}</p>
          <p class="customer-role">${customer.role}</p>
          <p class="customer-company">${customer.company}</p>
        </div>
      </div>
    `
  });
  customerProfileContainer.innerHTML = profileContainer; 
}
