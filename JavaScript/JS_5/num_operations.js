let a=10;
let b=435.872695;

        // METHODS ON NUMBERS
// MOST USED        
// b.toFixed();
// b.toPrecision();
// b.toPrecision();

console.log(b.toFixed(2));  //return 2 ele after decimal
console.log(typeof(b.toFixed(2)));  //returns a string
console.log(b); //didnt change b

console.log(b.toPrecision(4));
console.log(b.toString());



               // CREATE NUMBER OBJECT
 let a1=new Number(20);
 let b1=20;
 console.log(typeof(a1));   //object
 console.log(typeof(b1));



                 // MEMORY CRISIS (BAD PRACTICE)
let a2=new Number(20);
let b2=new Number(20);
console.log(a2==b2);    //false --> diff memory location as they are objects
let b3=20;
console.log(b1==b3);    //true  

a2=b2;
console.log(a2==b2);    //true --> now it points to the same location

            //PRIM_TYPE --> DATA IS COPIED
            //NON-PRIM_TYPE --> REFERENCE IS COPIED



console.log(Boolean(new Number(0)));   //true -->wrong  
                                        //checks on the basis of reference (ADDRESS)   
console.log(Boolean(new Number('')));   //true -->wrong
console.log(Boolean(new Number(null)));  //true-->wrong      

console.log(Boolean(Number(0)));
console.log(Boolean(Number('')));
console.log(Boolean(Number(null)));     //contradicts all 3

//BOOLEAN
//NON-PRIM: REFERENCE BASIS COMPARSION
//PRIM: COPY BY VALUE
