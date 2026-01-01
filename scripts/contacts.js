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
let editingIndex = null; 

// customer card buttons
const viewButton = document.querySelectorAll('.view-button');
const editButton = document.querySelectorAll('.edit-button'); 
const deleteButton = document.querySelectorAll('.delete-button'); 

// for rendering
let customerProfileContainer = document.querySelector('.customer-profiles'); 

// render from the start
renderCustomerProfiles(); 


// action function
function popInitialForm(){
  addCustomerButton.addEventListener('click', ()=>{
    customerForm.style.visibility = 'visible'; 
  }); 
}
popInitialForm(); 
function closeCustomerForm(){
  closeFormButton.addEventListener('click', ()=>{
    customerForm.style.visibility = 'hidden'; 
    saveCustomerButton.textContent = 'Save'
    resetForm(); // reset form
    editingIndex = null; 
  }); 
}
closeCustomerForm(); 
function clearCards(){
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


function addCustomer(){
  customerForm.addEventListener('submit', (event)=>{
    event.preventDefault();  

    const customerData = {
      name: customerName.value, 
      age: customerAge.value,
      contact: customerContact.value, 
      address: customerAddress.value,
      role: customerRole.value, 
      company: customerCompany.value
    }
    if(editingIndex === null){
      customerDetails.push(customerData); 
      resetForm(); // reset form
    } else {
      customerDetails[editingIndex] = customerData; 
      editingIndex = null; 
    }

    localStorage.setItem('customerDetails', JSON.stringify(customerDetails)); 
    // clear and rerender list of profiles
    clearCards(); 
    renderCustomerProfiles(); 
  });
}
addCustomer(); 

function editCustomerDetails(){
  customerProfileContainer.addEventListener('click', (event)=>{
    if(event.target.classList.contains('edit-button')){
      const card = event.target.closest('.profile-card'); 
      const index = Number(card.dataset.index); 
      saveCustomerButton.textContent = 'Save Edit'

      customerName.value = customerDetails[index].name; 
      customerAge.value = customerDetails[index].age; 
      customerContact.value = customerDetails[index].contact; 
      customerAddress.value = customerDetails[index].address;
      customerRole.value = customerDetails[index].role; 
      customerCompany.value = customerDetails[index].company;       
      
      customerForm.style.visibility = 'visible'; 
      editingIndex = index; 
    }
  }); 
}
editCustomerDetails(); 

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
