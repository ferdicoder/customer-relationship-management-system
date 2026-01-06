import { renderCustomerProfiles, popAddForm, closeCustomerForm} from './renderUI.js';
import { addCustomer, editCustomerDetails, deleteCustomer} from './handleData.js'

renderCustomerProfiles();
popAddForm(); 
closeCustomerForm();

addCustomer(); 
editCustomerDetails(); 
deleteCustomer(); 