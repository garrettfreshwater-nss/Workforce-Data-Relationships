const Customer = (customer, employees) => {
    return `
    <section class="customer__card">
        <h1 class="business__name">${customer.businessName}</h1>
        <div class="empCust"> Employees assigned to this client:    
        ${
            employees.map(
                e => {
                    return `
                    <div class="employee__name">
                    ${e.firstName} ${e.lastName}
                    </div>
                    `
                }
            )
        }
        </div>
    </section>
    
    
    `
}

export default Customer