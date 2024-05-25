//list of questions
let questionsdata=[

  {
  
  question: "'1. which country did anime originate?'",
  
  choices: ['A) Japan','B)  China','C)  South Korea','D)  United States' ],
  
   correctAnswer: "A) Japan"
  
   },
  
   {
  
   question: "In 'Attack on Titan,'what are the giant humanoid creatures that threaten humanity called?",
  
   choices: ['A) Titans','B)  Giants','C)  Colossi','D) Behemoths'],
  
   correctAnswer:"A) Titans" ,
  
   },
  
   {
  
   question:"In 'One Piece,' what is the name of the protagonist's  signature straw hat?",
  
   choices:  ['A)The Legendary Hat','B) The Straw Crown',"C) The Pirate King's Hat",'D) The Straw Hat' ] ,
  
   correctAnswer: "D) The Straw Hat",
  
   },
  
   {
  
   question: "Which anime features a young alchemist named Edward Elric?",
  
   choices: ["A) Attack on Titan", "B) Fullmetal Alchemist", "C) Death Note", "B) One Piece"],
  
   correctAnswer: "B) Fullmetal Alchemist"
  
   },
  
   {
  
   question: "In 'My Hero Academia,' what is the name of the main character who inherits the power of One For All?",
  
   choices:["A) Izuku Midoriya",'B) The Straw Crown',"C) The Pirate King's Hat",'D) The Straw Hat' ] ,
  
   correctAnswer: "A) Izuku Midoriya",
  
   },
  
   {
  
   question: "Which anime series follows the adventures of a group of ninjas from the village of Konoha?",
  
   choices: ["A) One Piece", "B) Naruto", "C) My Hero Academia", "C) Dragon Ball Z"],
  
   correctAnswer: "B) Naruto"
  
   },
  
   {
  
   question: "Who is the creator of the anime series 'Naruto'?",
  
   choices: ["A) Eiichiro Oda", "B) Masashi Kishimoto", "C) Akira Toriyama", "Eiichirō Oda"],
  
   correctAnswer: "B) Masashi Kishimoto"
  
   },
  
   {
  
   question: "In the anime 'Dragon Ball Z,' who is Goku's greatest rival?",
  
   choices: ["A) Vegeta", "B) Piccolo", "C) Frieza", "D) Cell"],
  
   correctAnswer: "A) Vegeta"
  
   },
  
   {
  
   question: "What is the name of the main character in 'Hunter x Hunter' who is searching for his father, who is also a legendary hunter?",
  
   choices: ["A) Gon Freecss", "B) Killua Zoldyck", "C) Kurapika", "D) Leorio Paradinight"],
  
   correctAnswer: "A) Gon Freecss"
  
   },
  
   {
  
   question: "What is the name of the Death Note's owner in the anime 'Death Note'?",
  
   choices: ["A) Light Yagami", "B) Misa Amane", "D) Ryuk", "C) My Hero Academia"],
  
   correctAnswer: "A) Light Yagami"
  
   }
  ];
  
    let questioncontent=document.getElementById('question')
  
  let choicecontent = document.getElementById('choices')
  
  let resultcontent = document.getElementById('result')
 // Math.floor(Math.random() * ?)
    let currentquestion =Math.floor(Math.random() * 3) + 1;
    
    let score = 0
  //function of displaying the question and choices as buttons

    function  displayquestion() {
  
   let currentquizdata= questionsdata[currentquestion];
  
   questioncontent.textContent =currentquizdata.question;
  
   choicecontent.innerHTML = '';
       
  //choice fro active  buttons 

   currentquizdata.choices.forEach(choice => {
  
   let button = document.createElement('button');
  
   button.textContent = choice;
  
   button.classList.add('choice');
  
   button.addEventListener('click', checkAnswer);
  
   choicecontent.appendChild(button);
  
   choicecontent.appendChild(document.createElement('br'));
  
   });
  
  }
    //function for checking the answer and add score

  function checkAnswer(event){
  
   let selectedchoice = event.target.textContent;
  
   let currentquizdata = questionsdata[currentquestion];
  
   if (selectedchoice == currentquizdata.correctAnswer) {
  
   score++;
  
   showResult();
  
   }
  
   currentquestion++;
  
   if (currentquestion < questionsdata.length) {
  
   displayquestion();
  
   } else {
  
   showResult();
  
   }
  
  }
    //display the score

  function showResult() {
  
   questioncontent.textContent =` YOUR SCOER : ${score}`;
  
   choicecontent.textContent = `${score}`;
  
  if (score === questionsdata.length) {
  
   resultcontent.textContent = ` YOUR SCOER : ${score}`;
  
  } else {
  
   resultcontent.textContent = ` YOUR SCOER : ${score}`;
  
  }
  
  }
  
   displayquestion();