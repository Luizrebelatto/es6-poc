
// for of
const dogs = ["fred", "bob", "bebel"];
let name = "";

for (let dog of dogs) {
  name += dog + " ";
}

// class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }