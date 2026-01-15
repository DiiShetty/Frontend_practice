            // array

let marks=[100,20,60,20];            
console.log(marks);

            // length of array
console.log(marks.length);            

            //ALLOWS HETERGENEOUS DATA TYPE
let arr1 = [100,'a',"gyan",true,null];            
console.log(arr1);


            // ACCESSING ELEMENTS
console.log(arr1[2]);    

    // ARRAY TYPE -> OBJECT
console.log(typeof(arr1));    

    // ARRAY IS MUTABLE
arr1[3]=false;
console.log(arr1);   
                    // NOT POSSIBLE IN STRING

                    
    // ADDING ELEMENT TO ARR (PUSH OPERATN)
arr1.push("lalitha");
console.log(arr1);                        

     // DELETING ELEMENT (POP OPERATN)
arr1.pop();
console.log(arr1);   


     // ADD/DELETE ELEMENTS AT BEGINNING
arr1.unshift(10);   //add
console.log(arr1);   

arr1.shift();
console.log(arr1);  //delete

    // NOT THE BEST PRACTICE 
    // --> HAMPERS THE PERFORMANCE OF THE SYSTEM, BECAUSE IF V ADD ADD/REMOV AT THE BEGINNING ALL THE NEXT ELEMENTS MUST BE SHIFTED IF THE SIZE OF ARRAY IS TOO LARGE THEN THE PROCESS BECOMES HEFTY



            //ITERATION
let arr2 = [10,30,50,90,11];

for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}

for(let i of arr2){
    console.log(i);
}



let arr3=arr2;
arr3.push(100);
console.log(arr2);  //DOES CHANGE

   // NON-PRIM --> COPY BY REFERENCE (HENCE IT CHANGES)
   // PRIM --> COPY BY VALUE



const a=[10,20,40,20,70];
// a=[20,60,40];    --> doesnt alllow (const)
// console.log(a);
// a.push(20,60,40);   // -->allowed
// console.log(a);


        // SLICING
const a1=[10,50,30,90,20];
const a2 = a1.slice(2,4);
console.log(a2);
console.log(a1);    //doesnt change the original arr


        // SPLICING
const a3=a1.splice(2,4);
console.log(a3);
console.log(a1);   //splicing changes the original arr

const a4=a1.splice(1,3,"Mohit",19);
console.log(a4); // [ 50 ]   
console.log(a1);    // [ 10, 'Mohit', 19 ]

