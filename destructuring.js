const software = {
    language: "JS",
    priority: "urgent",
    hasUnityTests: true,
  };
  
  let { language, priority } = software;

const DSA = ["Binary search", "Trees", "Hash table", "Queues"];

let [DSA1, DSA2] = DSA;
console.log(`${DSA1} - ${DSA2}`) // Binary search - Trees


// pass arguments to a function
const fruits = ["apple", "grape", "banana"];
const vegetables = ["carrot", "cabbage"];
const farm = [...fruits, ...vegetables];