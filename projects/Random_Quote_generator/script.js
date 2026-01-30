const quotes = [
  "Success is built on consistency, not motivation.",
  "Discipline will take you where motivation can't.",
  "Small daily improvements lead to massive results.",
  "Focus on progress, not perfection.",
  "Your future is created by what you do today.",
  "Hard work beats talent when talent doesn't work hard.",
  "Stay patient and trust the process.",
  "The best way to predict the future is to create it.",
  "Comfort is the enemy of growth.",
  "Dream big, start small, act now.",
  "Every expert was once a beginner.",
  "Do something today that your future self will thank you for.",
  "Success is not luck, it is preparation meeting opportunity.",
  "Winners focus on winning. Losers focus on winners.",
  "Action cures fear.",
  "If it doesn’t challenge you, it won’t change you.",
  "Consistency creates confidence.",
  "Excuses don't build empires.",
  "Learn from failure, don’t live in it.",
  "One step at a time is still progress.",
  "Your habits shape your destiny.",
  "Difficult roads often lead to beautiful destinations."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);

    quote.textContent = quotes[index];
})

