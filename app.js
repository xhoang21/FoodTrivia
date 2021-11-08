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
// let correctAnsr = ["a","D"]
// const queLine = document.getElementById("Question").innerText = questionsarr[0].question1;




const AnsrLineUp = document.querySelectorAll(".answer")
const queLine = document.getElementById("Question")
let shuffleQue =[]
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

// queLine.innerHTML = shuffleLineup[0][0]
// console.log(QueLineUp)
QueLineUp()
queLine.innerHTML = shuffleQue[0].question
console.log(shuffleQue[0].question)

const answerButton = [
    document.getElementById("A").innerText = shuffleQue[0].Answers.A,
    document.getElementById("B").innerText = shuffleQue[0].Answers.B,
    document.getElementById("C").innerText = shuffleQue[0].Answers.C,
    document.getElementById("D").innerText = shuffleQue[0].Answers.D,
]
console.log(answerButton)

function ButtonAswr (){
       if (shuffleQue[0].correct = answerButton){
            document.querySelector("#feedback").innerHTML = "<h3>Correct!</h3>";
        } else document.querySelector("#feedback").innerHTML = "<h3>Wrong!</h3>"
        console.log(answerButton.value)
}    
answerButton.addEventListener("click",ButtonAswr)

const NextBtn = document.querySelector(".next")
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

