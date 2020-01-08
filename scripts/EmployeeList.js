
import { useComputers } from "./ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js";
import Employees from "./EmployeeComponents.js";


const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {

    const employees = useEmployees()
    const computers = useComputers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => { //each employee is iterated over. 
            // Find this employees computer 
            const computer = computers.find(computer => computer.id === employee.computerId)

            // Get HTML representation of employees
            const html = Employees(employee, computer)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList