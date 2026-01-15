
            // MERGING ARR
const arr=[4,3,6,2,7];
const arr2=["Mohit",11,true];    
// arr.push(arr2);
console.log(arr);
                    // [ 4, 3, 6, 2, 7, [ 'Mohit', 11, true ] ]

const arr3=arr.concat(arr2);
console.log(arr3);    
                    //[ 4, 3, 6, 2, 7, 'Mohit', 11, true ] 

const A=[arr,arr2,arr3]; 
console.log(A);                   
    


          // SPREAD OPERATOR
const arr4=[...arr,...arr2,...arr3];
console.log(arr4);        
                    
                 


             // ARR -> STRING
const names=["Sam","Bham","Sham"];
console.log(names.toString());    

// console.log(names.join("*"));
console.log(names.join("-"));




                // SEARCHING ELEMENT
const arr1=[45,78,25,90,56,25,67];                
console.log(arr1.indexOf(25));   // FIRST INDEX OF THE REQUIRED ELEMENT

console.log(arr1.lastIndexOf(25));




             // SORTING
                   // SORTS ACC TO ASCII TABLE

let name1 =["Charlie","Bham","Alice","Poppie","Farah"];
name1.sort();
console.log(name1);     //accoring ASCII TABLE

let nums=[2,8,1,6,4,7,3];
console.log(nums.sort());

let name2 =["Mohit","Rohith","Farah","alice"];
console.log(name2.sort());
                        // alice COMES LATER BCS ASCII VAL OF 'a' IS GREATER THAN CAPITAL LETTERS



                  // REVERSE
let nums1=[2,8,1,6,4,7,3];
// console.log(nums.reverse());




//             // DESCENDING ORDER
//             // sort()+reverse()
nums1.sort();
nums1.reverse();
console.log(nums1); 
                        //BUT ....
const a=[101,99,40,82,56];
a.sort();
console.log(a);     // WRONG X 

            // ASCII VAL 1=49
            //           9=57

        // THIS IS BCZ THEYRE TREATED AS 
            // a=["101","99","40","82","56"];    





        // CUSTOM SORTING (ASCENDING)
arrr=[101,99,40,82,56] ;

arrr.sort((a,b) => a-b);
console.log(arrr);      // CORRECT 

        // EXAMPLE: a=20 , b=30
        //    IF a-b = -ve ('a' must come first)
        //    IF a-b = +ve ('b' must come first)



        // CUSTOM SORTING (DESCENDING)
arrr.sort((a,b) => b-a);  //reverse  
console.log(arrr);    



        // NESTED ARR
        //2D ARR
const arr5 = [10,20,30,[50,20,30],40,10];
console.log(arr5);
console.log(arr5[3]);   // [ 50, 20, 30 ]
console.log(arr5[3][1]);

        //3D ARR
const arr6 = [10,20,30,[59,[67,47,37],29,39],40,10];  
console.log(arr6);
console.log(arr6[3][1][2]);      


                 // FLATTENING ARR
                 
const b=arr6.flat();    // FLATTENS ONE LEVEL
console.log(b);    
const b1=arr6.flat(2); 
console.log(b1);    // LEVEL-2

    // IF WE DONT KNOW THE LEVEL
const b2=arr6.flat(Infinity);
console.log(b2);            // [
                            //  10, 20, 30, 59, 67,
                            //  47, 37, 29, 39, 40,
                            //  10
                            // ]


const a1=[10,40,"Mohit",9.2,false];
a1.name="Mohan";
console.log(a1);    // name: 'Mohan'

        // ARR IS AN OBJECT IN JS
        // BCZ ITS NOT A SAME TYPE OF COLLECTION OF DATA
        // NEITHER DOES IT HAVE CONTIGOUS MEMEORY LOCATION

