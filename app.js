var questionsarr = [
     {
         question:  "What city and state was McDonald's founded in?",
         Answers: { A: "San Bernardino, CA", 
                     B: "Dallas, TX",
                     C: "Tampa, FL",
                     D: "Long Beach, CA"
        },
     
         question: "what country dose wagyu orginated from?",
         Answers: { A: "America", 
                     B: "China",
                     C: "France",
                     D: "Japan"
        },
     
        question:  "What city and state was McDonald's founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
                },
        
       question:  "What city and state was McDonald's founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
       },
       question:  "What city and state was McDonald's founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
       },
       question:  "What city and state was McDonald's founded in?",
        Answers: { A: "San Bernardino, CA", 
                    B: "Dallas, TX",
                    C: "Tampa, FL",
                    D: "Long Beach, CA"
       },
    }];
var correctAnsr = ["a","D"]


let shuffleQue =[]


function QueLineUp(){
    while (shuffleQue.length <= 6){
        const random = question[Math.floor(Math.random()) * question.length]
        console.log(random)
        if (!shuffleQue.includes(random)) {
            shuffleQue.push(random) 
            document.getElementById("Question").innerText = shuffleQue.push(random)
        }
    }
}
// const queLine =  = 
const queLine = document.getElementById("Question").innerText = questionsarr[0].question;
// console.log(queLine,"line 25")
// console.log(questionsarr[0].question)
// const butanswers= document.querySelectorAll("answers")
// answerButton.forEach(butanswers => butanswers.addEventLister("click",ButtonAswr))
const answerButton = [
         document.getElementById("A").innerText = questionsarr[0].Answers.A,
         document.getElementById("B").innerText = questionsarr[0].Answers.B,
         document.getElementById("C").innerText = questionsarr[0].Answers.C,
         document.getElementById("D").innerText = questionsarr[0].Answers.D,
]
console.log(answerButton[0])


function ButtonAswr (){
    for (let i=0; i < answerButton.length; i++);
    for (let j=0; j < correctAnsr.length; j++);
       if (answerButton[i] = correctAnsr[j]){
            document.querySelector("#feedback").innerHTML = "<h3>Correct!</h3>";
        } else document.querySelector("#feedback").innerHTML = "<h3>Wrong!</h3>"

}
console.log(ButtonAswr)

        
       

    


