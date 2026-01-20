const user={
    1:"Rohith",
    2:"Mohith",
    3:"Lohith"
}
// console.log(user.1);     doesnt work
console.log(user[1]);



// KEYS CAN BE STRINGS OR SYMBOLS

const sym = Symbol("id");

const user2={
    name:"Sam",
    age:20,
    gender:"male",
    id:39680,
    [sym]:"jhblh"
}
console.log(user2[sym]);

