// questions for the trivia
var questionsarr = [
     {
         question: "What city and state was McDonald's founded in?",
        Answers: { A: "San Bernardino, CA", 
                     B: "Dallas, TX",
                     C: "Tampa, FL",
                     D: "Long Beach, CA"
        },
        correct: "0"
    },
    {
          question: "what country dose wagyu orginated from?",
        Answers: { A: "America", 
                     B: "China",
                     C: "France",
                     D: "Japan"
        },
        correct: "3"
    },
    { 
        question: "What city and state was churchs chicken founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
        },
        correct: "2"
    },
    {
        question:"What city and state was white castle founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
       },
       correct: "2"
    },
    {
        question: "What city and state was KFC founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
       },
       correct: "1"
    },
    {
        question: "What city and state was burger king founded in?",
       Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
       },
       correct: "3"
    }
    ];

// const queLine = document.getElementById("Question").innerText = questionsarr[0].question1;

const AnsrLineUp = document.querySelectorAll(".answer")
const queLine = document.getElementById("Question")
// // this function is for shuffling the questions 
let shuffleQue =[], currentQuestion = 0  

function QueLineUp(){
    while (shuffleQue.length < 6){ 
        let random = questionsarr[Math.floor(Math.random() * questionsarr.length)]
        if (!shuffleQue.includes(random)) {
            shuffleQue.push(random)
        }
        }
    console.log(shuffleQue)
    return shuffleQue 
}        
const allAnswr = document.querySelectorAll(".answer")
QueLineUp()
console.log(currentQuestion)


// function nextquestion(question,cu){
//     for( i=0; i > shuffleQue; i++){
//         shuffleQue[currentQuestion] ++
//     }
//     QueLineUp(shuffleQue[currentQue]+i)
    
// }
// nextquestion()

console.log(shuffleQue)

// function resetState(){
// while (allAnswr.firstchild) {
//     allAnswr.removeChild
//      (allAnswr.firstchild)
//     }
// }



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
function ButtonAswr (butnIdex){     
    console.log(butnIdex)
    if (parseInt(shuffleQue[0].correct) == butnIdex){
        document.querySelector("#feedback").innerHTML = "<h3>Correct!</h3>";
        let presetScore = parseInt(score.innerHTML)
        presetScore += 10
        score.innerText = presetScore.toString()
    } else {
        document.querySelector("#feedback").innerHTML = "<h3>Wrong!</h3>"  
    }
};

answerButtons.forEach( (item,i) => {
       item.addEventListener("click",() => ButtonAswr(i));   
   }   
)
 
const NextBtn = document.querySelector(".next")
const restartBtn = document.querySelector(".restart")
NextBtn.innerHTML ="Next Question"
restartBtn.innerHTML ="Restart Game"


// function Newqust (){
//     shuffleQue.shift()
  
// }

NextBtn.addEventListener("click",nextquestion)
function nextquestion() {
    console.log("nextquestion")
    currentQuestion ++
    showquestion()
}
    


// function NextQueLine
// for (let i=0; i < answers.length; i++){
        //         answers[i] = AnsrLineUp;
        //         console.log(answers[i])
        //         AnsrLineUp.innerText = shuffleLineup[0].Answers[i]
        // }
// function ansrLine(){
//     for (let i=0; i < answers.length; i++){
//         answers[i] = AnsrLineUp;
//         console.log(answers[i])
//         AnsrLineUp.innerText = shuffleLineup[0].Answers[i]
// }
// }
// console.log(ansrLine)
// }
// console.log(TraiviaAnswer)
// console.log(questionsarr[0].Answers)
// if( questionsarr.Answers === correctAnsr[1]){
//     correctAnsr++;
//     questionsarr.Answers.style.WinHighlight
// }else{
//     questionsarr.Answers.style.LoseHighlight
// }
// console.log(queLine,"line 25")
// console.log(questionsarr[0].question)
// const butanswers= document.querySelectorAll("answers")
// answerButton.forEach(butanswers => butanswers.addEventLister("click",ButtonAswr))
// const answerButton = [
//          document.getElementById("A").innerText = shuffleLineup.Answers.A,
//          document.getElementById("B").innerText = questionsarr[0].Answers.B,
//          document.getElementById("C").innerText = questionsarr[0].Answers.C,
//          document.getElementById("D").innerText = questionsarr[0].Answers.D,
// ]
// console.log(answerButton[0])
// }
// console.log(ButtonAswr)

// var questionsarr = [
//     {
//         question: "What city and state was McDonald's founded in?",
//        Answers: { A: "San Bernardino, CA", 
//                     B: "Dallas, TX",
//                     C: "Tampa, FL",
//                     D: "Long Beach, CA"
//        },
//        correct: "0"
//    },
//    {
//          question: "what country dose wagyu orginated from?",
//        Answers: { A: "America", 
//                     B: "China",
//                     C: "France",
//                     D: "Japan"
//        },
//        correct: "3"
//    },
//    { 
//        question: "What city and state was churchs chicken founded in?",
//        Answers: { A: "San Bernardino, CA", 
//                    B: "Dallas, TX",
//                    C: "Tampa, FL",
//                    D: "Long Beach, CA"
//        },
//        correct: "2"
//    },
//    {
//        question:"What city and state was white castle founded in?",
//        Answers: { A: "San Bernardino, CA", 
//                    B: "Dallas, TX",
//                    C: "Tampa, FL",
//                    D: "Long Beach, CA"
//       },
//       correct: "2"
//    },
//    {
//        question: "What city and state was KFC founded in?",
//        Answers: { A: "San Bernardino, CA", 
//                    B: "Dallas, TX",
//                    C: "Tampa, FL",
//                    D: "Long Beach, CA"
//       },
//       correct: "1"
//    },
//    {
//        question: "What city and state was burger king founded in?",
//       Answers: { A: "San Bernardino, CA", 
//                    B: "Dallas, TX",
//                    C: "Tampa, FL",
//                    D: "Long Beach, CA"
//       },
//       correct: "3"
//    }
//    ];

// const QuestionsLine = document.getElementById("Question")
// const QL2 = document.getElementById("Question2")
// const QL3 = document.getElementById("Question3")
// const QL4 = document.getElementById("Question4")
// const QL5 = document.getElementById("Question5")
// const QL6 = document.getElementById("Question6")

// QuestionsLine.innerHTML = questionsarr[0].question
// QL2.innerHTML = questionsarr[1].question
// QL3.innerHTML = questionsarr[2].question
// QL4.innerHTML = questionsarr[3].question
// QL5.innerHTML = questionsarr[4].question
// QL6 .innerHTML = questionsarr[5].question


   
// const answerButtons = [
//         document.getElementById("A"),
//         document.getElementById("B"),
//         document.getElementById("C"),
//         document.getElementById("D"),
//         document.getElementById("A2"),
//         document.getElementById("B2"),
//         document.getElementById("C2"),
//         document.getElementById("D3"),
//         document.getElementById("A3"),
//         document.getElementById("B3"),
//         document.getElementById("C3"),
//         document.getElementById("D3"),
//         document.getElementById("A4"),
//         document.getElementById("B4"),
//         document.getElementById("C4"),
//         document.getElementById("D4"),
//         document.getElementById("A5"),
//         document.getElementById("B5"),
//         document.getElementById("C5"),
//         document.getElementById("D5"),
//         document.getElementById("A6"),
//         document.getElementById("B6"),
//         document.getElementById("C6"),
//         document.getElementById("D6")
//     ]
// document.getElementById("A").innerText = questionsarr[0].Answers.A
// document.getElementById("B").innerText = questionsarr[0].Answers.B
// document.getElementById("C").innerText = questionsarr[0].Answers.C
// document.getElementById("D").innerText = questionsarr[0].Answers.D
// document.getElementById("A2").innerText = questionsarr[1].Answers.A
// document.getElementById("B2").innerText = questionsarr[1].Answers.B
// document.getElementById("C2").innerText = questionsarr[1].Answers.C
// document.getElementById("D2").innerText = questionsarr[1].Answers.D
// document.getElementById("A3").innerText = questionsarr[2].Answers.A
// document.getElementById("B3").innerText = questionsarr[2].Answers.B
// document.getElementById("C3").innerText = questionsarr[2].Answers.C
// document.getElementById("D3").innerText = questionsarr[2].Answers.D
// document.getElementById("A4").innerText = questionsarr[3].Answers.A
// document.getElementById("B4").innerText = questionsarr[3].Answers.B
// document.getElementById("C4").innerText = questionsarr[3].Answers.C
// document.getElementById("D4").innerText = questionsarr[3].Answers.D
// document.getElementById("A5").innerText = questionsarr[4].Answers.A
// document.getElementById("B5").innerText = questionsarr[4].Answers.B
// document.getElementById("C5").innerText = questionsarr[4].Answers.C
// document.getElementById("D5").innerText = questionsarr[4].Answers.D
// document.getElementById("A6").innerText = questionsarr[5].Answers.A
// document.getElementById("B6").innerText = questionsarr[5].Answers.B
// document.getElementById("C6").innerText = questionsarr[5].Answers.C
// document.getElementById("D6").innerText = questionsarr[5].Answers.D

// const score = document.querySelector("#playerScore")
// function ButtonAswr (butnIdex){     
//     console.log(butnIdex)
//     if (parseInt(questionsarr[0].correct) == butnIdex){
//         document.querySelector("#feedback").innerHTML = "<h3>Correct!</h3>";
//         let presetScore = parseInt(score.innerHTML)
//         presetScore += 10
//         score.innerText = presetScore.toString()
//     } else {
//         document.querySelector("#feedback").innerHTML = "<h3>Wrong!</h3>"  
//     }
// };

// answerButtons.forEach( (item,i) => {
//        item.addEventListener("click",() => ButtonAswr(i));   
//    }   
// )

