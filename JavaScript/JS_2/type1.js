let a=9;
let b='A';
let c="heheheh"
console.log(typeof a);
console.log(typeof b);  //same
console.log(typeof c);  //same

let d=true;
console.log(typeof d);

let f;
console.log(typeof f);

let e=null;
console.log(typeof e);  //object (bug)

let arr=[10,20,9.7,'a',"rohith"];
console.log(typeof arr);    //object

                //all non-prim datatype as shown as object


//PRIMITIVE = IMMUTABLE                
let m=67;
m=56;
console.log(m);
                //here its doesn't manipualte the existing data
                //it creates a new memory
//PROOF
let str1="Rohith"
str1[0]='M';        //doesn't change
console.log(str1);
                        //bcz it can't change the existing data


//NON-PRIMITIVE = MUTABLE
let arr1=[10,20,30,40];
arr1.push(90);   
arr1[0]=70;
console.log(arr1); 

let obj={
    name:"Mohan",
    age:29,
}
obj.name="Rohan";
console.log(obj);

//PRIM - PASS BY VALUE 
            //bcz it takes smaller size so it doesnt matter if it taked extra memory space 
//NON-PRIM - PASS BY REFERENCE
            //bcz it takes larger size and if more copies are made it can cause program crash
