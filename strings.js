function hasWord(value){
    const sentence = "you need drink 6 glasses of water per day"
    return sentence.includes(value)
}
hasWord("water") // true
hasWord("banana") // false

function startWith(value){
    const sentence = "Just do it"
    return sentence.startsWith(value)
}
startWith("Just") // true
startWith("hello") // false

function endsWith(value){
    const sentence = "Write unit tests for your code and use claude code"
    return sentence.endsWith(value)
}
endsWith("code") // true
endsWith("chatgpt") // false

function regex(value){
    let pattern = /\p{Emoji}/u;

    return pattern.test(value);
}
regex("Hello 😄") // true
regex("chatgpt") // false


function regexPosition(value) {
    let pattern = /\w+/y;

    pattern.lastIndex = 4;

    return value.match(pattern);
}

regexPosition("abc def ghi") // true
regexPosition("abc") // false

