const { json } = require("./module2");
const modules = require("./module1");
const Person = modules.Person;

const p1 = new Person("José", "Lucas", 21, "168.490.010-78");
console.log(p1.fullName);
console.log(p1.cpf);
console.log(modules.age, modules.name, modules.surname);

json();
