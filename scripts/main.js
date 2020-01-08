
import { getEmployees } from "./EmployeeDataProvider.js";
import { getComputers } from "./ComputerDataProvider.js";
import EmployeeList from "./EmployeeList.js";


getEmployees()
    .then(getComputers)
    .then(EmployeeList)