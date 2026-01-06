import { customerDetails, customerForm, customerName, customerAge, customerContact, customerAddress, customerRole, customerCompany, state, saveCustomerButton, customerProfileContainer } from './customerData.js'; 

import {renderCustomerProfiles, clearList, resetForm} from './renderUI.js';


function addCustomer(){
  customerForm.addEventListener('submit', (event)=>{
    event.preventDefault();  
    
    const data = {
      name: customerName.value, 
      age: customerAge.value,
      contact: customerContact.value, 
      address: customerAddress.value,
      role: customerRole.value, 
      company: customerCompany.value
    }
    if(state.editingIndex === null){
      customerDetails.push(data); 
      resetForm();
    } else {
      customerDetails[state.editingIndex] = data; 
      state.editingIndex = null; 
    }

    localStorage.setItem('customerDetails', JSON.stringify(customerDetails)); 
    // clear and rerender list of profiles
    clearList(); 
    renderCustomerProfiles(); 
  });
}


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
      state.editingIndex = index; 
      
    }
  }); 
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

export {addCustomer,editCustomerDetails,deleteCustomer};