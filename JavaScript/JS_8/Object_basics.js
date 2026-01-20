
//              //OBJECT
//      //CREATE UPDATE READ DELETE - (CRUD)


    // CREATE
const user={
    name:"Sam",
    age:20,
    gender:"male",
    id:39680
}
console.log(user);
console.log(typeof(user))


//       // ACCESSING VALUES
//      //READ
console.log(user.gender);


//      //UPDATE
user.age=27;    //update age
console.log(user);

user.aadhar=8975;   //create new property
console.log(user);


//      // DELETE
delete user.id;
console.log(user);




//      // ONE MORE WAY TO ACCESS
console.log(user["name"]);

// console.log(user[gender]);   //doesnt work
console.log(user["gender"]);
console.log(user["age"]);
//          //USED IN CASES LIKE: 
const users={
    // home address = "jhchclwkn;oiep"  //DOESNT WORK
    "home address":"ugxlwehcbwjfn2liffj",
    "Phone number":"87508758076",
    "Fathers name":"jhqcmnw",
    "Fathers age":"54"
}
console.log(users["Fathers name"]);



const user2=user;
user2.age=3000;
//            //COPY BY REFERENCE
                //HENCE CHANGES DONE IN user2 WILL BE APPLIED TO user1 also
                // SINCE THEYRE POINTING TO THE SAME COPY
console.log(user);                




console.log(Object.keys(user));
        // RETURNS AN ARRAY OF KEYS

console.log(Object.values(user));
        // RETUENS AN ARRAY OF VALUES

console.log(Object.entries(user));
        // RETURNS AN ARRAY OF KEY-VALUE PAIRS

        
        // KEY
for(let i in user){
    console.log(i);
}      
        // KEY-VALUE
for(let i in user){
    console.log(i,user[i]);
}