// console.log("This is JS");  //check in inspect


            //create element
const newElement = document.createElement("h2");
newElement.textContent = "How are you";
newElement.id="second";   //provide id

console.log(newElement);

            //select element
const element = document.getElementById("first");

            // change the order of elements
element.after(newElement);  // prints #second then #first
// element.before(newElement);
         


const newElement2 = document.createElement("h3");
newElement2.textContent="Happy new year";
newElement2.id = "third";
newElement2.className = "newYear";      // provide class name

        //ADD multiple class name
// newElement2.className = "newYear";
// newElement2.className += " Holi";  

        // more efficient way
newElement2.classList.add("Holi");
newElement2.classList.add("Diwali");

newElement2.classList.remove("Diwali");



                // CHANGE STYLING
newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize="20px";

element.before(newElement2);

console.log(newElement2);




                //get id,class & other attributes
console.log(newElement2.getAttribute("class"));
console.log(element.getAttribute("id"));
console.log(newElement.getAttribute("How"));




            //DELETE ELEMENT

const s1 = document.getElementById("first");
s1.remove();




// // innerHTML
// newElement.innerHTML = "<h2>HElp</h2>"      //  X X treats it as a html element
// newElement.textContent = "<h2>HElp</h2>";       //treats it as text  
