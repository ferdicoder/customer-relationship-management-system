const customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || []

const addCustomerButton = document.querySelector('.add-button'); 
// form buttons
const closeFormButton = document.querySelector('.close-button'); 
const saveCustomerButton = document.querySelector('.save-button'); 


// form data
const customerForm = document.querySelector('.add-customer-form');
const customerName = document.querySelector('.js-customer-name');
const customerAge = document.querySelector('.js-customer-age');
const customerContact = document.querySelector('.js-customer-contact'); 
const customerAddress = document.querySelector('.js-customer-address'); 
const customerRole = document.querySelector('.js-customer-role'); 
const customerCompany = document.querySelector('.js-customer-company'); 

// customer card buttons
const viewButton = document.querySelectorAll('.view-button');
const editButton = document.querySelectorAll('.edit-button'); 
const deleteButton = document.querySelectorAll('.delete-button'); 



// for rendering
let customerProfileContainer = document.querySelector('.customer-profiles'); 

// render from the start
renderCustomerProfiles(); 

function popCustomerForm(){
  addCustomerButton.addEventListener('click', ()=>{
    customerForm.style.visibility = 'visible'; 
  }); 
}
popCustomerForm(); 

function closeCustomerForm(){
  closeFormButton.addEventListener('click', ()=>{
    customerForm.style.visibility = 'hidden'; 
  }); 
}
closeCustomerForm(); 


function addCustomer(){
  customerForm.addEventListener('submit', (event)=>{
    event.preventDefault();  

    // save new contact
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
    
    resetForm(); // reset form
    clearList(); 
    // rerender list of profiles
    renderCustomerProfiles();
  });
}
addCustomer(); 

function renderCustomerProfiles(){
  if(customerDetails.length === 0){
    customerProfileContainer.innerHTML = '<h1>NO CUSTOMER</h1>'
    return customerProfileContainer; 
  }
  let profileContainer = ''; 

  customerDetails.forEach((customer, index)=>{
    profileContainer += ` 
      <div class="profile-card" data-index="${index}">
        <div class="customer-profile-pic">
          <img src="/assets/account-profile.svg">
        </div>
        <div class="customer-info">
          <p class="customer-name">${customer.name}</p>
          <p class="customer-role">${customer.role}</p>
          <p class="customer-company">${customer.company}</p>
        </div>
        <div class="customer-button-option">
          <button class="view-button">View</button>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
      </div>
    `
  });
  customerProfileContainer.innerHTML = profileContainer; 
}
// for rerendering purposes
function clearList(){
  customerProfileContainer.innerHTML = ''; 
}
function resetForm(){
  customerName.value = ''; 
  customerAge.value = '';
  customerContact.value = '';
  customerAddress.value = '';
  customerRole.value = ''; 
  customerCompany.value = ''; 
}


function deleteCustomer(){
  customerProfileContainer.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-button')){
      const card = event.target.closest('.profile-card'); 
      //const allCards = [...customerProfileContainer.querySelectorAll('.profile-card')]; 
      const index = Number(card.dataset.index); 
      customerDetails.splice(index, 1); 
      localStorage.setItem('customerDetails', JSON.stringify(customerDetails))
      
      clearList(); 
      renderCustomerProfiles(); 
    }
  }); 
}
deleteCustomer(); 

function editCustomerDetails(){
  customerProfileContainer.addEventListener('click', (event)=>{
    if(event.target.classList.contains('edit-button')){
      const card = event.target.closest('.profile-card'); 
      const index = Number(card.dataset.index); 

      customerName.value = customerDetails[index].name; 
      customerAge.value = customerDetails[index].age; 
      customerContact.value = customerDetails[index].contact; 
      customerAddress.value = customerDetails[index].address;
      customerRole.value = customerDetails[index].role; 
      customerCompany.value = customerDetails[index].company;       
      
      customerForm.style.visibility = 'visible'; 
      saveCustomerButton.style.display = 'none'; 
      saveEdit(index); 
    }
  }); 
}
editCustomerDetails(); 

const saveEditButton = document.createElement('button'); 
  saveEditButton.textContent = 'Save Edit';
  saveEditButton.type = 'submit'; 
  customerForm.insertBefore(saveEditButton, closeFormButton); 
function saveEdit(index){
  saveEditButton.addEventListener('click', (event)=>{
    event.preventDefault(); 
    
    customerDetails[index].name = customerName.value; 
    customerDetails[index].age = customerAge.value;
    customerDetails[index].contact = customerContact.value; 
    customerDetails[index].address = customerAddress.value; 
    customerDetails[index].role = customerRole.value; 
    customerDetails[index].company = customerCompany.value;
      
    localStorage.setItem('customerDetails', JSON.stringify(customerDetails)); 
    customerForm.style.visibility = 'hidden'; 
    renderCustomerProfiles(); 
  }); 
}
