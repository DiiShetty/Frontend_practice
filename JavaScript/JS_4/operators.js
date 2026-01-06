// // OPERATORS

// // ARITHMETIC

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/4);
// console.log(3%2);
// console.log(2**3);   //2^3


// //ASSIGNMENT OPERATOR

// let m=10;
// let n=9;
// // x=x+y;
// m=+n;
// console.log(m);
// // x=x-y;
// // x=x/y;
// // x=x*y;


// //COMPARISON OPERATORS

let a=10;
// let b=9;
// console.log(a>b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a===b);

// let f="10";
// console.log(a==f);  //true
// console.log(a===f);  //false
//                      //(in ===)first type check is done
//                                  //then comparison    

                                 
// //CONVERSION
// let z="788";
// console.log(typeof(z));
// let g=Number(z);
// console.log(typeof(g));



// let q="67c";
// let l=Number(q);
// console.log(l);     //NaN (not a number)
// console.log(typeof(l)); //type of number
//                             //NaN = type is number
// console.log(0/0);   //NaN
// console.log(true);  //"true"--string



// //Number-->String
// let j=10;
// let p=String(j);
// console.log(typeof(p));



//
// console.log(Number(true));  //1
// console.log(Number(false));  //0
// console.log(Number(null));   //0
// console.log(Number(undefined));  //NaN




//BOOLEAN CONVERT
// console.log(Boolean(67));
//                           // Existing values -->true
// console.log(Boolean(0));    //false
// console.log(Boolean("hello"));  //true
// console.log(Boolean(""));   //false
// console.log(Boolean(null));  //false





//Floating Point Precision Issues
// let j=0.1;
// let c=.2;
// let k=j+c;
// console.log(k==0.3);
// console.log(k); //0.30000000000000004

//HOW TO SOLVE THIS
// let w="0.1";
// let i="0.2";
// let q=
// console.log(q==0.3);
// console.log(q);




// //SOME RULES
// console.log(null==undefined);
// console.log(null===undefined);
//                 //null is lossely equal to undefined only
// console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);                




//>,<,>=,<=  (null --> number)
//during comparison null is converted to number i.e 0
console.log(null>=0);   //true
console.log(null<=0);   //true
console.log(null<0);    //false
console.log(null<0);    //false

//undefined --> NaN while comparison
console.log(null>=undefined);   //false
console.log(undefined>=0);      //false

console.log(Number("hello"));

console.log("Rohit">"Mohit");
                    //coverts to ascii value and then compares
console.log("Rohit">"Rahit"); 

console.log("10"<10);   //FALSE
console.log(-9<true);   //true
console.log(null>="");  //true

//WHILE COMPARING BOTH SHOULD COME TO A COMMON GROUND AND HENCE THEY ARE CONVERTED TO NUMBERS OR ANY OTHER VALUES


console.log(NaN == NaN);    //false