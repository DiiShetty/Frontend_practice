//PRIMITIVE DATATYPE
//number,string,boolean,undefined,null,bigint,symbol

//number
let c=10;
let d=90;
console.log(c,d);

//string
let e="hello";
let f="good morning";
let g='anjali';       //string can be written in ''
console.log(e,f,g);

//boolean
let login=true;
let n=false;
console.log(login,n);

//undefined
let user;
console.log(user);

//bigint
let num=65461356462166354643;
let num1=846596467464664641n;
console.log(num);
console.log(num1);

//null
let hi=null;
console.log(hi);

//symbol
const id1=Symbol("id");
const id2=Symbol("id");
console.log(id1==id2);    //different


//NON-PRIMITIVE DATATYPES
//array, object, function

//array
let arr=[10,20,9.7,'a',"rohith"];
console.log(arr);

//object
let obj = {
    name:"rohith",
    usn:4315641,
    age:19,
    section: 'A'
}
console.log(obj);

//function
function greet(){
    console.log("hello");
}
greet();

//function can be stored in variables
let s=function greet(){
    console.log("hello");
}
console.log(s);
s();