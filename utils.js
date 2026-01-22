isFinite(10/0); // infinity
isFinite(10/1);

isNaN("Luiz");       // returns true
isNaN(2); // false

// broke imports
import { name, age } from "./person.js";


// intercept operations on object
const proxy = new Proxy(user, {
    get(target, property) {
      console.log("Getting: " + property);
      return target[property];
    },
    set(target, property, value) {
      console.log("Setting: " + property);
      return target[property];
    }
  });
  