# ES6
- ES6 (ECMASCRIPT 2015)
- JavaScript update that made the code more modern, readable, and easier to maintain

### Template literal
- before update
```javascript
let name = "Luiz"
var welcome = "hello " + name;
```

- after update
```javascript
let name = "Luiz"
const welcome = `hello ${name}`;
```

### Destructuring
- before update
```javascript
const user = { name: "Luiz", age: 25 };

const name = user.name;
const age = user.age;

console.log(`name: ${name} - age: ${age}`)
```

- after update
```javascript
const user = { name: "Luiz", age: 25 };
const { name, age } = user;
console.log(`name: ${name} - age: ${age}`)
```