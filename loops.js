
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

const getUsers = new Promise((resolve, reject) => {
    const success = true;
  
    setTimeout(() => {
      if (success) {
        resolve({ id: 1, nome: "Luiz" });
      } else {
        reject("Error");
      }
    }, 2000);
  });


getUsers
  .then((user) => {
    console.log("user found:", usuario);
  })
  .catch((error) => {
    console.error("ERROR:", erro);
  })
  .finally(() => {
    console.log("finish");
  });

  