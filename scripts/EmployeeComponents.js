const Employees = (employee, computer, department) => {
    return `
        <section class="employee">
            <header>
                <h2>${employee.firstName}</h2>
            </header>
            <hr/>
            <div>
                Age ${employee.age}
            </div>
            <hr/>
            
            <div>
                Computer name ${computer.model}.
            </div>
            <hr/>
            <section class="employee__department">
                Works in the ${department.name} department.
            </section>
        </section>
    `
}

export default Employees