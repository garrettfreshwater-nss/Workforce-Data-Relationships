
import { useComputers } from "../computer/ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js";
import { useDepartments } from "../department/DepartmentProvider.js";
import Employees from "./EmployeeComponents.js";
import { useLocations } from "../location/LocationDataProvider.js";
import { useCustomers } from "../computer/CustomerDataProvider.js";
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js";


const contentTarget = document.querySelector(".employees")

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