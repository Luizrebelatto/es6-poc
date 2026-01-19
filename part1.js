function letFirstExample(){

    let name = "Luiz"
    console.log(name)
}
letFirstExample() // Luiz

function letSecondExample(){
    let showAge = true
    if(showAge){
        let age = 25
    }
    console.log(age)
}
// letSecondExample() // ReferenceError: age is not defined

function varFirstExample(){
    let showAge = true
    if(showAge){
        var age = 25
    }
    console.log(age)
}
varFirstExample() // 25

const completeName = (name, lastname) => {
    return `${name} ${lastname}`
}

completeName("Luiz", "Rebelatto")

const years = (age) => `${age} years old`;
years(25)

const soma = x => 2 + x;
soma(2)