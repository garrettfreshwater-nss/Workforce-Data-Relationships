  
import { useEmployees } from "../providers/EmployeeDataProvider.js";
import { useCustomers } from "../providers/CustomerDataProvider.js";
import { useEmployeeCustomers } from "../providers/EmployeeCustomerProvider.js";
import Customer from "./CustomerComponent.js";


const contentTarget = document.querySelector(".customer__container")

const CustomerList = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

    const render = () => {

        contentTarget.innerHTML = `

        <h1 class="client__title">Clients</h1>
        <article class="clients">

        ${customers.map(customer => {
            const customerRelationships = empCust.filter(cr => cr.customerId === customer.id)


            // For each relationship, find the corresponding company
            const foundEmployeeArray = customerRelationships.map(cr => {
                const foundEmployee = employees.find(employee => employee.id === cr.employeeId)
                return foundEmployee
            })


            // Get HTML representation of product
            const html = Customer(customer, foundEmployeeArray)
            return html
            }).join("")
        }

        </article>
        `
}
    render()
}
export default CustomerList
