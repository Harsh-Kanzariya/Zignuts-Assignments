// Task 4:
// Write a JavaScript program that creates a class called University with properties for university
// names and departments.Include methods to add a department, remove a department, and display all
// departments.Create an instance of the University class and add and remove departments

class University {
    constructor(name) {
        this.name = name
        this.depts = []
    }

    addDept(newDept) {
        if (!this.depts.includes(newDept)) {
            this.depts.push(newDept)
            console.log(`${newDept} Department is Added successfully...`);
        } else {
            console.log(`${newDept} already exists`);
        }
    }

    removeDept(deptName) {
        const index = this.depts.indexOf(deptName)
        if (index) {
            this.depts.splice(index,1)
            console.log(`${deptName} Department is Removed successfully...`);
        } else {
            console.log(`${deptName} is not found`);
        }
    }

    displayDepts() {
        console.log(`All Depts in ${this.name} University:`);
        this.depts.forEach( (dept) => console.log(dept))
     }
}

const u1 =new University("GTU")
u1.addDept("CE")
u1.addDept("IT")
u1.addDept("EC")
u1.displayDepts()
u1.removeDept("EC")
u1.displayDepts()