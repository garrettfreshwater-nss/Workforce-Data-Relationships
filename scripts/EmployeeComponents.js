const Employees = (employee, computer) => {
    return `
        <section class="employee">
            <header>
                <h2>${employee.firstName}</h2>
            </header>
            <div>
                Age ${employee.age}
            </div>
            <div>
                Computer name ${computer.model}.
            </div>
        </section>
    `
}

export default Employees