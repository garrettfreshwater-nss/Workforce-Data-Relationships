
import { useComputers } from "../providers/ComputerDataProvider.js";
import { useEmployees } from "../providers/EmployeeDataProvider.js";
import { useDepartments } from "../providers/DepartmentDataProvider.js";
import Employees from "./EmployeeComponents.js";
import { useLocations } from "../providers/LocationDataProvider.js";
import { useCustomers } from "../providers/CustomerDataProvider.js";
import { useEmployeeCustomers } from "../providers/EmployeeCustomerProvider.js";


const contentTarget = document.querySelector(".employees") //this contentTarget variable is selecting the .employees class being rendered onto the page from our html

export const EmployeeList = () => {

    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => { //each employee is iterated over. 

            // Find this employees computer 
            const assignedComputer = computers.find(computer => computer.id === employee.computerId)

            // Find the department that the employee works in 
            const department = departments.find(department => department.id === employee.departmentId)

            // Find the location that the employee works at
            // FIND for ONE * MANY relationship
            const location = locations.find(location => location.id === employee.locationId)

            // Find all customer relationship for the current employee 
            // FILTER for MANY * MANY relationship
            const customerRelationships = empCust.filter(ec => ec.employeeId === employee.id)

            // For each relationship, find the corresponding company
            const foundCustomersArray = customerRelationships.map(rc => {
               const foundCustomer = customers.find(customer => customer.id === rc.customerId)
                return foundCustomer
            })


            // Get HTML representation of employees and corresponding info
            const html = Employees(employee, assignedComputer, department, location, foundCustomersArray)

            return html

        }).join("")
    }

    render()
}

export default EmployeeList