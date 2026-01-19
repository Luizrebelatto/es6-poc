// returns integer part
function trunc(num){
    return Math.trunc(num)
}
trunc(5.2) // 5
trunc(-10.2) // returns -10

// num < 0 return -1
// num == null return 0
// num >= return 1
function sign(num){
    return Math.sign(num)
}
sign(-20) // -1
sign(null) // 0
sign(29763) // 1

// returns the cube root of a number
function cbrt(num) {
    return Math.cbrt(num)
}
cbrt(27) // 3
cbrt(1000) // 10

function log2(num){
    return Math.log2(num)
}
log2(2); // returns 1

function log10(num){
    return Math.log10(num)
}
log10(10); // returns 1