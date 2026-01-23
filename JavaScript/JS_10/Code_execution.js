// script.js
var score = 50;
const playerName = "Alex";

function calculateBonus(currentScore) {
    var bonus = currentScore / 10;
    return bonus;
}

var finalScore = score + calculateBonus(score);
console.log(finalScore);

// A Detailed Walkthrough: From Code to Console

// Step 0: Before running (Compilation)
//      =>JS engine reads the code
//      =>Converts it into bytecode
//      =>his is what actually runs (not your .js text)


// Step 1: Global Creation Phase (Setup)

// Before running anything, JS sets up memory.
//      =>Global Execution Context (GEC) is created
//      =>It is pushed onto the Call Stack

// What happens in memory:

//      =>var score → created as undefined
//      =>const playerName → created but not usable yet (TDZ)
//      =>function calculateBonus()
//      → function is fully created and stored
//      =>var finalScore → undefined

// 👉 No code runs yet, only memory is prepared.



// Step 2: Global Execution Phase (Run code)

// Now JS runs code top to bottom.
//      score = 50
//      playerName = "Alex"
//      Function declaration → skipped (already handled)
//      finalScore = score + calculateBonus(score)

// To finish this line, JS must call the function.



// Step 3: Function Call (calculateBonus(50))

// Global code pauses
// A Function Execution Context (FEC) is created
// FEC is pushed on top of the Call Stack

// Inside the function:
//      currentScore = 50
//      bonus created as undefined
//      bonus = 50 / 10 → 5
//      return 5



// Step 4: Return

// Function finishes
// Its value 5 is returned
// FEC is removed from the Call Stack
// Local variables are destroyed




// Step 5: Back to Global Code

// finalScore = 50 + 5 → 55
// console.log(55) runs
// Program ends
// Global context is removed



//          // HOISTING

// Hoisting is JavaScript's behavior of knowing about a variable or function's existence before executing the code. How it treats that knowledge depends on the keyword (function, var, let, or const).