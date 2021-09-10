const quiz =document.querySelector('.form');
const submit = document.querySelector('#submit-btn');
const message = document.querySelector('.msg-right');
  

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];
  

  function calculateScore() {
    const formResults = new FormData(quiz);
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    
    message.innerText = "Your score is " + score;
  }
  
  submit.addEventListener("click", calculateScore);