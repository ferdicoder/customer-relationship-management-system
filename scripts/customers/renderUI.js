import { customerDetails, 
  customerForm, customerName, customerAge, customerContact, customerAddress, customerRole, customerCompany, saveCustomerButton, customerProfileContainer, state} from './customerData.js'; 


const addCustomerButton = document.querySelector('.add-button'); 
const closeFormButton = document.querySelector('.close-button'); 

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

// action function
function popAddForm(){
  addCustomerButton.addEventListener('click', ()=>{
    customerForm.style.visibility = 'visible'; 
  }); 
}

function closeCustomerForm(){
  closeFormButton.addEventListener('click', ()=>{
    customerForm.style.visibility = 'hidden'; 
    saveCustomerButton.textContent = 'Save'
    resetForm(); // reset form
    state.editingIndex = null; 
  }); 
}

export {renderCustomerProfiles, clearList, resetForm, popAddForm, closeCustomerForm}