const user={
    name:"Sam",
    age:20,
    gender:"male",
    id:39680
}


// DE-STRUCTURING A OBEJCT (ACCESSING PARTICULAR PART OF THE OBJECT)

//      //MANUAL WAY
// const name=user.name;
// const age=user.age;
// console.log(name,age);


//      //USEFUL WAY
const{name,age}=user;
console.log(name,age);

//  CAN CHANGE THE KEY NAME
const{name:u_name,age:u_age} = user;
console.log(u_name,u_age); 




// for-of loop
i=>keys  ,  j=>values

for(let i of Object.values(user)){
    console.log(i);
}                            // returns keys

for(let i of Object.entries(user)){
    console.log(i);
}                   //returns an array ([key,values])

for(let [i,j] of Object.entries(user)){
    console.log(i,j);
}
                        // return key-value pairs





                    // FUNCTION
const user2 = {
    name:"Bam",
    age:30,
    emailId:"Bam30@gmail.com",
    amount:2986,
    greeting : function(){
        console.log("Hello, How are you ?");
        return 30;
    }
}                   

// user2.greeting();    //=>Hello, How are you ?

// const va=user2.greeting();
// console.log(va);             //Hello, How are you ?
                                // 30

    
                                

                        // THIS KEYWORD
const user3 = {
    name:"Bam",
    age:30,
    emailId:"Bam30@gmail.com",
    amount:2986,
    greeting : function(){
        console.log(`Hello, How are you ${this.name}`);
        return 30;
    }
}      
user3.greeting();  

//          ${user3.name}
// CAN ALSO BE DONE BUT ITS BETTER TO USE THIS KEYWORD AS IT POINTS TO THE CURRENT OBJECT
// AND HENCE THERES NO CONFUSION




                     // NESTED OBJECT
const user4 = {
    name:"Bam",
    age:30,
    emailId:"Bam30@gmail.com", 
    Address:{
        city:"Bangalore",
        state:"Karnataka",
        country:"India"
    }              
}
console.log(user4);
console.log(user4.Address);


                // SHALLOW COPY
// const userN=user4;  // creates shallow copy where changes done in user4 
                    // will affect userN   
                    

const userN = {...user4};   // CREATES INDEPENDENT COPY
userN.name="Lohith";    //  CHANGES DONE IN userN 
console.log(user4);          // wont affect user4 
        //  BUT 
userN.Address.city="Chennai";   //  IN NESTED OBJECT
console.log(user4);        // IT WILL AFFECT THE OG COPY



                // DEEP COPY (BEST METH)

const userM=structuredClone(user4);
userM.Address.city="Mumbai";
console.log(userM,user4);       // DIFFERENT   







// LIMITATIONS OF STRUCTURED CLONE

// It **CANNOT** clone:

// - **Functions:** It will throw a `DataCloneError`. Functions have a "scope" and are not considered simple data.
// - **DOM Nodes:** It will throw an error. You can't clone a piece of a webpage this way.
// - **Class Instances (Prototypes):** It will discard the object's prototype chain. The clone will be a plain object with all the same data properties, but it will no longer be an "instance of" your custom class.
// - **Error objects.**