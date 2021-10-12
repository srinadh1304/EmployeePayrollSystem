class EmployeePayrollData {
    id;
    name;
    salary;
    gender;
    startDate;


constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
}