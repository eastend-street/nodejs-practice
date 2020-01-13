const employees = [];

class Employee {
  constructor(name, id, email, department) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.department = department;
  }

  startDate(startDate) {
    this.startDate = startDate;
    employees.push(this);
  }

  static getAll() {
    employees.forEach(emp => console.log(emp));
  }
}

const jane = new Employee(
  "Jane Goodall",
  "782773",
  "janeg@ciccc.net",
  "accounting"
);
jane.startDate("12/03/2020");

const john = new Employee("John Knowsall", "7872174", "johnk@ciccc.net", "HR");
john.startDate("12/05/2020");

// console.log(jane);
// console.log(employees);

Employee.getAll();
