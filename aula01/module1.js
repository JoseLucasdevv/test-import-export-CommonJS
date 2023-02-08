class Person {
  constructor(name, surname, age, cpf) {
    Object.prototype.zip = "4564894897";
    Object.defineProperties(this, {
      cpf: {
        enumerable: true,
        value: cpf,
        writable: false,
        configurable: false,
      },
      name: {
        enumerable: true,
        value: name,
        writable: false,
        configurable: false,
      },
      surname: {
        enumerable: true,
        value: surname,
        writable: false,
        configurable: false,
      },
      age: {
        enumerable: true,
        value: age,
        writable: false,
        configurable: false,
      },
      zip: {
        enumerable: true,
        value: this.zip,
        writable: false,
        configurable: false,
      },
    });
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

function exportModule(name, age, surname) {
  return {
    name,
    age,
    surname,
    Person,
  };
}

module.exports = exportModule("José", 21, "Lucas");
