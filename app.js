const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];
const currentYear = 2021;
for (let person of array) {
    console.log(person);// console log all object
    console.log(person.name); // log the names
    console.log(currentYear - person.age); // log the years of birth
    console.log(`${person.name} is ${person.profession}`); // log name and profession 
    if (person.age >= 50) {
        console.log(`${person.name} is over 50. His age is ${person.age} `); // log person over the 50 years
    }
}