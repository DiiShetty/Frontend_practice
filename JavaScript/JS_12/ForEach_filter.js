
//          // FOR-EACH
const arr=[10,7,3,7,4,6,2];

arr.forEach((num)=>{
    console.log(num);
})

arr.forEach((num,index,arr)=>{
    console.log(num,index,arr);
})

// USE - CASE
let sum=0;
arr.forEach((num)=>{
    sum+=num;
})
console.log(sum);





//          // FILTER
const arr2=[7,2,7,8,4,2,5,0];
const newArr=arr2.filter((num)=>num>7);
console.log(newArr)



//          // CUSTOM FILTER IMPLEMENTATION
// this=[7,2,7,8,4,2,5,0]; = arr2
arr2.filtering = function(compare){
    const ans=[];

    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}
const newArr2=arr2.filtering((num)=>num<4);
console.log(newArr2)

            // WORKS ONLY FOR arr2


//         //GENERALIZED FORM
Array.prototype.filtering = function(compare){
    const ans=[];

    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}
const a=[90,32,45,7,23,57];
const newA=a.filtering((num)=>num>50);
console.log(newA);
