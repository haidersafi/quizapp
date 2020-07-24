
var questionCount=0;
var isscore=0;
var finish=document.getElementById("finish-btn");

var question=document.getElementById("question-container");
var ques=document.getElementById("question");
var answer1=document.getElementById("answer1");
var answer2=document.getElementById("answer2");
var answer3=document.getElementById("answer3");
var answer4=document.getElementById("answer4");
var score=document.getElementById("score");
var shuffledQuestions,currentQuestionIndex;
var answer;
var start=document.getElementById("start-btn");
var next=document.getElementById("next-btn");
var reset=document.getElementById("reset-btn");
reset.classList.add("hide");
finish.addEventListener("click",function(){
    finish.classList.add("hide");
    score.classList.remove("hide");
    reset.classList.remove("hide");
    var yourscore=((isscore/10)*100);
    score.innerHTML=`You Scored ${yourscore} %`;})
next.onclick=nextQuestion;
start.onclick=startGame;
function startGame(){
console.log('startted');
start.classList.add("hide");
question.classList.remove("hide");
next.classList.remove("hide");
reset.classList.add("hide");
shuffledQuestions=questions.sort(()=>Math.random()-.5)
currentQuestionIndex=0;
selectNext();
}
reset.addEventListener("click",function(){
    isscore=0;
    questionCount=0;
    start.classList.remove("hide");
    question.classList.add("hide");
    next.classList.add("hide");
    finish.classList.add("hide");
    score.classList.add("hide");
    reset.classList.add("hide");

    
})

function selectNext(){
    questionCount++;
    if (questionCount>10)
    {question.classList.add("hide");
        start.classList.add("hide");
        next.classList.add("hide");
finish.classList.remove("hide");

    }
    else{
      
showQuestion(shuffledQuestions[currentQuestionIndex])
}
}

function showQuestion(quest){
    console.log(isscore);
ques.innerHTML=quest.question;
answer1.innerHTML=quest.a;
answer2.innerHTML=quest.b;
answer3.innerHTML=quest.c;
answer4.innerHTML=quest.d;
answer1.addEventListener("click",selectAnswer);
answer2.addEventListener("click",selectAnswer);
answer3.addEventListener("click",selectAnswer);
answer4.addEventListener("click",selectAnswer);
}


function selectAnswer(){
if (event.target.innerHTML==shuffledQuestions[currentQuestionIndex].correct){
    isscore++;
    event.target.classList.add("correct")
    for (var i=1;i<5;i++){
         answer="answer"+i;
    if (!(event.target.id==answer)){
    document.getElementById(answer).classList.add("wrong");
    }
}
}
else{
   
        
        for (var i=1;i<5;i++){
            answer="answer"+i;
            if (document.getElementById(answer).innerHTML==shuffledQuestions[currentQuestionIndex].correct){
            document.getElementById(answer).classList.add("correct");}
            else{
                document.getElementById(answer).classList.add("wrong");
            }
        }
}

}

function nextQuestion(){
    answer1.classList.remove("correct")
    answer2.classList.remove("correct")
    answer3.classList.remove("correct")
    answer4.classList.remove("correct")
    answer1.classList.remove("wrong")
    answer2.classList.remove("wrong")
    answer3.classList.remove("wrong")
    answer4.classList.remove("wrong")
  
   answer1.innerHTML="";
   answer2.innerHTML="";
   answer3.innerHTML="";
   answer4.innerHTML="";
   shuffledQuestions=questions.sort(()=>Math.random()-.5)
currentQuestionIndex=0;


  selectNext();
}
var questions=[{
    question:"2+2?",
    a:4,
    b:2,
    c:1,
    d:6,
    correct:4
},
{
    question:"2+4?",
    a:4,
    b:2,
    c:1,
    d:6,
    correct:6
}
,
{
    question:"3+1?",
    a:4,
    b:2,
    c:1,
    d:6,
    correct:4
}
,
{
    question:"3+4?",
    a:7,
    b:2,
    c:1,
    d:6,
    correct:7
}
,
{
    question:"3+5?",
    a:4,
    b:2,
    c:1,
    d:8,
    correct:8
}
,
{
    question:"3+8?",
    a:4,
    b:2,
    c:11,
    d:6,
    correct:11
}
,
{
    question:"3+9?",
    a:4,
    b:2,
    c:1,
    d:12,
    correct:12
}
,
{
    question:"3+7?",
    a:4,
    b:2,
    c:1,
    d:10,
    correct:10
}
,
{
    question:"3+20?",
    a:4,
    b:23,
    c:1,
    d:10,
    correct:23
}
,
{
    question:"3+15?",
    a:4,
    b:2,
    c:18,
    d:10,
    correct:18
}
,
{
    question:"1+32?",
    a:33,
    b:2,
    c:1,
    d:10,
    correct:33
}
,
{
    question:"8+23?",
    a:31,
    b:2,
    c:1,
    d:10,
    correct:31
}
,
{
    question:"3+19?",
    a:4,
    b:22,
    c:1,
    d:10,
    correct:22
}
,
{
    question:"3+16?",
    a:4,
    b:2,
    c:19,
    d:10,
    correct:19
}
,
{
    question:"3+12?",
    a:4,
    b:2,
    c:1,
    d:15,
    correct:15
}
,
{
    question:"3+3?",
    a:6,
    b:2,
    c:1,
    d:10,
    correct:6
}
,
{
    question:"3+100?",
    a:4,
    b:2,
    c:1,
    d:103,
    correct:103
}
]