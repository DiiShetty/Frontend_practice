//LOOP

//for loop
for(let i=0;i<10;i++){
    console.log(i);
}

// //while loop
let i1=0;
while(i1<10){
    console.log(i1);
    i1++;
}

//do while
let i=0;
do{
    console.log(i);
    i++;
}while(i<7);


//CONDITIONS

//if-else
let age=15;
if(age>18){
    console.log("Eligible");
}else{
    console.log("not eligible");
}

//else-if
let age1=-9;
if(age1>18){
    console.log("Eligible");
}else if(age1<18 && age1>0){
    console.log("not eligible");
}else{
    console.log("Invalid");
}



// LOGICAL OPERATORS

// '&&' -->any one is false = false

console.log(true&&false);
console.log(true&&true);
console.log(true&&false);
console.log(false&&false);



let a= "Rohit";
let b= "Mohit";
let c= a&&b;
console.log(c);
                // && --> if any one is false = false
                //hence it inly checks the first condition if its true it directly prints the next value
                //if the first condition is false directly false
    //0-->false

let a1=0;
let b1=10;
console.log(a1&&b1);

// &&: if first value is false --> return first value
// if first value is true --> return sec value




// // '||' -->any one true -= true

console.log(true||false);
console.log(true||true);
console.log(true||false);
console.log(false||false);

// ||
let a2=0;
let b2=10;
console.log(a2||b2);

// ||: if first value is true --> return first value
// if first value is false --> return sec value

console.log(2&5);
    // 2  = 0010 , 5  = 0101
//   0010
// & 0101
// ------
//   0000


