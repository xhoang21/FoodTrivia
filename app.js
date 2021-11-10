// questions for the trivia
var questionsarr = [
     {
         question:"What city and state was McDonald's founded in?",
        Answers: { A:"San Bernardino, CA", 
                     B:"Dallas, TX",
                     C:"Tampa, FL",
                     D:"Long Beach, CA"
        },
        correct:"0"
    },
    {
          question:"what country dose wagyu orginated from?",
        Answers: { A:"America", 
                     B:"China",
                     C:"France",
                     D:"Japan"
        },
        correct:"3"
    },
    { 
        question:"Which famous takeout container was invented by Frederick Weeks Wilcox in 1894?",
        Answers: { A:"foam container", 
                    B:"Soup Container",
                    C:"Wax Paper box",
                    D:"Chinese Takeout Box"
        },
        correct:"3"
    },
    {
        question:"What city and state was white castle founded in?",
        Answers: { A:"San Bernardino, CA", 
                    B:"Dallas, TX",
                    C:"whichita, KS",
                    D:"Long Beach, CA"
       },
       correct:"2"
    },
    {
        question:"Ignacio Anaya invented which popular fast food meal during WWII?",
        Answers: { A:"Nachos", 
                    B:"Tacos",
                    C:"Quesadilla",
                    D:"Taquitos"
       },
       correct:"0"
    },
    {
        question:"July 13th is dedicated to which fast food in the U.S.A.?",
       Answers: { A:"Soft serve ice cream", 
                    B:"Onion Rings",
                    C:"French Fries",
                    D:"Burgers"
       },
       correct:"2"
    },
    {
        question:"What was the first fast-food chain in China?",
       Answers: { A:"KFC", 
                    B:"McDonalds",
                    C:"Burger King",
                    D:"Taco Bell"
       },
       correct:"0"
    },
    {
        question:"What country did Tempura orginated from?",
       Answers: { A:"Japan", 
                    B:"China",
                    C:"Portugal",
                    D:"Spain"
        },
        correct:"2"
    },
    {
        question: "who was the invortor of Instant Ramen?",
       Answers: { A: "Momofuku Ando", 
                    B: "Koki Ando",
                    C: "Soichi Honda",
                    D: "Hiroki Hasegawa"
       },
       correct:"0"
    },
    {
        question: "what country dose Pho orginated from?",
       Answers: { A:"ThaiLand", 
                    B:"China",
                    C:"France",
                    D:"Vietnam"
       },
       correct:"3"
    },
    ];

const AnsrLineUp = document.querySelectorAll(".answer")
const queLine = document.getElementById("Question")
// // this function is for shuffling the questions 
let shuffleQue =[], currentQuestion = 0  

function QueLineUp(){
    while (shuffleQue.length < 10){ 
        let random = questionsarr[Math.floor(Math.random() * questionsarr.length)]
        if (!shuffleQue.includes(random)) {
            shuffleQue.push(random)
        }
        }
    console.log(shuffleQue)
    return shuffleQue 
}        
const allAnswr = document.querySelectorAll("#answerSet")
QueLineUp()
console.log(currentQuestion)

console.log(shuffleQue)

function showquestion (){

queLine.innerHTML = shuffleQue[currentQuestion].question
console.log(shuffleQue[currentQuestion].question)  
document.getElementById("A").innerText = shuffleQue[currentQuestion].Answers.A
document.getElementById("B").innerText = shuffleQue[currentQuestion].Answers.B
document.getElementById("C").innerText = shuffleQue[currentQuestion].Answers.C
document.getElementById("D").innerText = shuffleQue[currentQuestion].Answers.D
}
showquestion()


// assinging the answers to a button
const answerButtons = [
    document.getElementById("A"),
    document.getElementById("B"),
    document.getElementById("C"),
    document.getElementById("D")
]
// this function is for giving a feedback for correct/wrong answers when clicked.
const score = document.querySelector("#playerScore")
const Feedback = document.querySelector("#feedback")
function ButtonAswr (butnIdex){     
    console.log(butnIdex)
    if (parseInt(shuffleQue[currentQuestion].correct) == butnIdex){
        Feedback.innerHTML = "<h3>Correct!</h3>";
        Feedback.style.backgroundColor= "green"
        let presetScore = parseInt(score.innerHTML)
        presetScore += 10
        score.innerText = presetScore.toString()
        
    } else {
        let presetScore = parseInt(score.innerHTML)
        presetScore -= 10
        score.innerText = presetScore.toString()
        Feedback.innerHTML = "<h3>Wrong!</h3>"
        Feedback.style.backgroundColor= "red"
    } 
};

answerButtons.forEach( (item,i) => {
       item.addEventListener("click",() => ButtonAswr(i));   
   }   
)
 
const NextBtn = document.querySelector(".next")
const restartBtn = document.querySelector(".restart")
NextBtn.innerHTML ="Next Question"

function resetquestion(){
    
    
}

NextBtn.addEventListener("click",nextquestion)
function nextquestion() {
    console.log("nextquestion")
    currentQuestion ++
    showquestion()
    
}
const Timer = document.querySelector(".Timer")
var Sec = 30
var interval = setInterval(function(){
    Timer.innerText = Sec;
    Sec--;
    if( Sec == 0){
        clearInterval(interval);
        Timer.innerText = "Game Over";
    }
}, 1000)