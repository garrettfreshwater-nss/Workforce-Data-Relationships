
import { getEmployees } from "./providers/EmployeeDataProvider.js";
import { getComputers } from "./providers/ComputerDataProvider.js";
import { getDepartments } from "./providers/DepartmentDataProvider.js";
import { getLocations } from "./providers/LocationDataProvider.js";
import { getCustomers } from "./providers/CustomerDataProvider.js";
import { getEmployeeCustomers } from "./providers/EmployeeCustomerProvider.js";
import CustomerList from "./customer/CustomerList.js";
import EmployeeList from "./employee/EmployeeList.js";



getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)