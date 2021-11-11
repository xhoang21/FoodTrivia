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
    {
        question:"what is the worlds most expensive spice, in terms of weight?",
        Answers:{A:"cumin",
                    B:"black pepper",
                    C:"saffron",
                    D:"caycane"
        },
        correct:"2"
    },
    {
        question:"Although considered as nuts, these are actually seeds. What is it?",
        Answers:{A:"Almonds",
                    B:"cashews",
                    C:"peanuts",
                    D:"peacans"
        },
        correct:"0"
    },
    {
        question:"What fast food restaurant is credited with introducing the first modern-day drive-thru window?",
        Answers:{A:"McDonalds",
                    B:"Burger King",
                    C:"Wendy's",
                    D:"Big Boy"
        },
        correct:"2"
    },
    {
        question:"What is the only fruit to have seeds on the outside?",
        Answers:{A:"strawberry",
                    B:"sugar apple",
                    C:"Dragon Fruit",
                    D:"lychee"
        },
        correct:"0"
    },
    {
        question:"What vitamin gives sweet potatoes and carrots their orange color?",
        Answers:{A:"Vitamin B",
                    B:"Vitamin D",
                    C:"Vitamin C",
                    D:"Vitamin A"
        },
        correct:"3"
    },
    {
        question:"Hickory trees produce which types of nuts?",
        Answers:{A:"Pecans",
                    B:"cashews",
                    C:"almonds",
                    D:"peanuts"
        },
        correct:"0"
    },
    {
        question:"In which country did the Cheesecake originate?",
        Answers:{A:"United States",
                    B:"Great Britian",
                    C:"France",
                    D:"Greece"
        },
        correct:"3"
    },
    {
        question:"Coca-cola first time sold in which American state?",
        Answers:{A:"South Carolina",
                    B:"Georgia",
                    C:"Tennessee",
                    D:"Kentucky"
        },
        correct:"1"
    },
    {
        question:"Halo Halo is a special and popular dessert of which country?",
        Answers:{A:"Philippine",
                    B:"Malaysia",
                    C:"Indonesia",
                    D:"Taiwan"
        },
        correct:"0"
    },
    {
        question:"Watermelon contains how much percentage of water?",
        Answers:{A:"90%",
                    B:"80%",
                    C:"75%",
                    D:"92%"
        },
        correct:"3"
    },
    ];

const AnsrLineUp = document.querySelectorAll(".answer")
const queLine = document.getElementById("Question")
// // this function is for shuffling the questions 
let shuffleQue =[], currentQuestion = 0  

function QueLineUp(){
    while (shuffleQue.length < 20){ 
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
        Feedback.style.display = "block"
        Feedback.style.backgroundColor= "green"
        let presetScore = parseInt(score.innerHTML)
        presetScore += 10
        score.innerText = presetScore.toString()
        
    } else {
        let presetScore = parseInt(score.innerHTML)
        presetScore -= 10
        score.innerText = presetScore.toString()
        Feedback.style.display = "block"
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
    Feedback.style.display = "none"
    
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