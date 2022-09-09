let basicSalary =parseInt(prompt("enter your salary"));
const DearnessAllowance = 0.4 * basicSalary;
const Hra = 0.2 * basicSalary;
let gross = basicSalary + DearnessAllowance + Hra;
document.write("gross Salary is: "+gross);


