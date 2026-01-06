const customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || []; 

// form data
const customerForm = document.querySelector('.add-customer-form');
const customerName = document.querySelector('.js-customer-name');
const customerAge = document.querySelector('.js-customer-age');
const customerContact = document.querySelector('.js-customer-contact'); 
const customerAddress = document.querySelector('.js-customer-address'); 
const customerRole = document.querySelector('.js-customer-role'); 
const customerCompany = document.querySelector('.js-customer-company'); 
const state = {
  editingIndex: null
};

const saveCustomerButton = document.querySelector('.save-button');

const customerProfileContainer = document.querySelector('.customer-profiles');

export { customerDetails, customerForm, customerName, customerAge, customerContact, customerAddress, customerRole, customerCompany, state, saveCustomerButton, customerProfileContainer }; 