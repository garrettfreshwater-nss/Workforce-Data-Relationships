
import { getEmployees } from "./EmployeeDataProvider.js";
import { getComputers } from "./ComputerDataProvider.js";
import EmployeeList from "./EmployeeList.js";
import { getDepartments } from "./DepartmentProvider.js";


getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList)