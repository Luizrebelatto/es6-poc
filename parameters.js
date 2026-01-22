// default parameters
function user(name, age = 10) {
    // age is 10 if not passed or undefined
    return `${name} - ${age}`;
}
user(5);

function gamePointsTotal(...points) {
    let sum = 0;
    for (let point of points) sum += point;
    return sum;
  }
  
  let result = gamePointsTotal(4, 9, 16, 25, 29, 100, 66, 77)