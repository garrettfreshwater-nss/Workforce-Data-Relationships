const Employees = (employee, computer, department, location, customers) => {
    return `
        <section class="employee">
            <header class="employee__firstName">
                <h2>${employee.firstName} ${employee.lastName}</h2>
            </header>
            <div class="employee__age">
                Age ${employee.age}
            </div>
        
            <div class="employee__computer">
                Uses a ${computer.year} ${computer.model}.
            </div>
          
            <section class="employee__department">
                Works in the ${department.name} department.
            </section>
            <div class="employee__location">
                ${employee.firstName} works at the ${location.city} location.
            </div>

            <div class="found__customers">
                    <h3>Currently working for </h3>
                    <ol>
                    ${
                        customers.map(c => {
                            return `<li>${c.businessName}</li>`
                        }).join("")
                    }
                    </ol>
        
            </div>
    
        </section>
    `
}

export default Employees