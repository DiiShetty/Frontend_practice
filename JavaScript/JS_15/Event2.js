
            // 1]
// const el1 = document.getElementById("child1");
// el1.addEventListener('click',()=>{
//     el1.textContent="I am clicked";
// })


//         // 2]
const parentt = document.getElementById("parent");
// console.log(parent);

for(let ele of parentt.children){
    ele.addEventListener('click',()=>{
        ele.textContent="I am clicked";
    })
}               // APPLIES TO ALL AT ONCE


const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("Grandparent is clicked")
})

const parent = document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("Parent is clicked");
})

const child = document.getElementById("child");
child.addEventListener('click',()=>{
    console.log("Child is clicked");
})


            // CHECK THE OUTPUT IN INSPECT
// CLICK ON GRANDPARENT --> Grandparent is clicked

// CLICK ON PARENT -->  Parent is clicked
                     // Grandparent is clicked

// CLICK ON CHILD -->   child is clicked
                    //  Parent is clicked
                     // Grandparent is clicked                    


// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//     console.log("Grandparent is clicked")
// },true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// },false)

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     console.log("Child is clicked");
// },true)          


// OUTPUT
// CLICK ON GRANDPARENT --> Grandparent is clicked

// CLICK ON PARENT --> Grandparent is clicked
                    // Parent is clicked
                     

// CLICK ON CHILD -->   Grandparent is clicked
                    // Parent is clicked
                    // child is clicked
                     

// THIS IS BECAUSE
// THERE THREE PHASES  : The event is created and starts its journey from the top of the DOM tree down towards the target (child button). At each level, the browser checks for any capturing event listeners (useCapture: true).                  

//Phase 1: The Capturing Phase (The "Trickle Down")
//Phase 2: The Target Phase
//Phase 3: The Bubbling Phase (The "Bubble Up"

//  https://www.notion.so/Lecture-15-Event-Listener-and-Handler-28e3a78e0e2280b6a720c5387d057dae#28e3a78e0e228024b7b1cc3d4d4541c1


// CAPTURE PHASE IS ON/TRUE --> WHEN COMING FROM TOP TO DOWN - EVENT IS TRIGGERED
// CAPTURE PHASE IS OFF/FALSE --> IT IS TURENED TO TOP TO BOTTOM (I.E TRIGGERED IN BUBBLING PHASE)










// const element = document.getElementById("ha");
// element.addEventListener('click',(e)=>{
//     console.log("heheheheh");
//     console.log(e);  // shows all the info when this event is performed
//     e.stopPropagation;  // stops bubbling
// })         





// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//     console.log("Grandparent is clicked")
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log("Parent is clicked");
//     console.log(e.target);      // shows which element triggered action
// })

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     console.log("Child is clicked");
// })




                // e

const parenttt = document.getElementById("head");
// console.log(parent);

// parenttt.addEventListener('click',(e)=>{
//         console.log(e.target);
//         e.target.textContent = "I am clicked";
// })        


            //// if its applied to for loop
// for(let ele of parenttt.children){
//     ele.addEventListener('click',(e)=>{
//         // ele.textContent="I am clicked";
//         console.log("click");
//         console.log(e.target);
//         e.target.textContent = "I am clicked";
//     })
// }  



// REMOVE EVENT LISTENER
// parenttt.removeEventListener('click',(e)=>{
//         console.log(e.target);
//         e.target.textContent = "I am clicked";
// }) 
// doesnt work bcz memeory allocation of addEvnetListener is different compared to remove eventListener --> BOTH ARE DIFF OBJECTS




// function handleclick(e){
//     e.target.textContent = "I am clicked";
//     parenttt.removeEventListener('click',handleclick);

// }
// parenttt.addEventListener('click',handleclick);
                            // NOW BOTH POINTS TO THE SAME OBJECT
                            // NOW IT IS PERFORMED ONLY ONCE THEN ITS REMOVED
