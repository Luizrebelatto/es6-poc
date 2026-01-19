function epsilon() {
    return Number.EPSILON;
}
epsilon()

function minSafeInteger(numbers) {
    let highestNumber = Number.MIN_SAFE_INTEGER;

    for (const num of numbers) {
        if (num > highestNumber) {
            highestNumber = num;
        }
    }
    return 
}
minSafeInteger([-10, -50, 120, 0, 80])

function maxSafeInteger(numbers) {
  let lowest = Number.MAX_SAFE_INTEGER;

  for (const num of numbers) {
    if (num < lowest) {
      lowest = num;
    }
  }

  return lowest;
}
maxSafeInteger([-10, -50, 120, 0, 80])

function isInteger(num) {
    return Number.isInteger(num)
}
isInteger(10) // true
isInteger(11.3) // false

// 64 bits
// its not decimal
function isSafeInteger(num) {
    return Number.isSafeInteger(num)
}
isSafeInteger(10);        // true
isSafeInteger(3.14);      // false