
import { getEmployees } from "./employee/EmployeeDataProvider.js";
import { getComputers } from "./computer/ComputerDataProvider.js";
import EmployeeList from "./employee/EmployeeList.js";
import { getDepartments } from "./department/DepartmentProvider.js";
import { getLocations } from "./location/LocationDataProvider.js";
import { getCustomers } from "./computer/CustomerDataProvider.js";
import { getEmployeeCustomers } from "./employee/EmployeeCustomerProvider.js";



getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)