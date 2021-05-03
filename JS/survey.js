
// SURVEY PAGE
const StartSurvey = document.getElementById("StartSurvey");
const Survey = document.getElementById("Survey");
const question = document.getElementById("question");
const QuestionImage = document.getElementById("QuestionImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const SurveyProgress = document.getElementById("SurveyProgress");
const Outcome = document.getElementById("SurveyOutcome");


let questions = [
    {
        question : "Do you feel as if you are in control of your emotions?",
        imgSrc : "Images/Sad.png",
        choiceA : "Yes, I feel in control.",
        choiceB : "No, I'm not in control.",
        correct : "B",
    },{
        question : "Do you feel overwhelmed with your emotions? ",
        imgSrc : "Images/Anxious.png",
        choiceA : "Yes, I feel overwhelmed",
        choiceB : "No, I don't feel overwhelmed.",
        correct : "A",
    },{
        question : "Do you think you are thinking clearly and able to make the right decisions?",
        imgSrc : "Images/Stressed.png",
        choiceA : "Yes, I'm thinking clearly.",
        choiceB : "No, I'm not thinking clearly.",
        correct : "B",
    },
    {
        question : "Are you feelings effecting others around you?",
        imgSrc : "Images/Sad.png",
        choiceA : "Yes, my feelings are effecting those around me.",
        choiceB : "No, my feelings aren't effecting anyone but myself.",
        correct : "A",
    },{
        question : "Is your mood effecting how you behave with people around you?",
        imgSrc : "Images/Anxious.png",
        choiceA : "Yes, I'm behaving differently with people around me.",
        choiceB : "No, I'm behaving as I normally would.",
        correct : "A",
 
    },{
        question : "Are your emotions effecting you to the point that you can't sleep?",
        imgSrc : "Images/Stressed.png",
        choiceA : "Yes, I've been struggling to sleep.",
        choiceB : "No, my sleep hasn't been effected.",
        correct : "A",
 
    }
];


const lastQuestion = questions.length - 1;
let ongoingquestion = 0;
let score = 0;

// create each question
function SurveyQuestion(){
    let q = questions[ongoingquestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    QuestionImage.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

StartSurvey.addEventListener("click",startQuiz);

// start survey
function startQuiz(){
    StartSurvey.style.display = "none";
    SurveyQuestion();
    Survey.style.display = "block";
    showProgress();
}

// show progress
function showProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        SurveyProgress.innerHTML += "<div class='Progress' id="+ qIndex +"></div>";
    }
}


// checkAnwer

function checkAnswer(answer){
    if( answer == questions[ongoingquestion].correct){
        // answer is correct
        score++;

        answerGood();
    }else{

        answerBad();
    }
    if(ongoingquestion < lastQuestion){
        ongoingquestion++;
        SurveyQuestion();
    }else{
        // end the Survey, provide mental health guidance
        showOutcome();
    }
}

// answer is correct
function answerGood(){
    document.getElementById(ongoingquestion).style.backgroundColor = "#f2958c";
}

// answer is Wrong
function answerBad(){
    document.getElementById(ongoingquestion).style.backgroundColor = "#f2958c";
}

// show score based on how questions were answered
function showOutcome(){
    Outcome.style.display = "block";
    

    const OutcomePercent = Math.round(100 * score/questions.length);
    
    // choose the message based on the OutcomePercent
    let message = (OutcomePercent >= 66) ? "<p>We believe you are at a high risk and should seek support immediately.<br>There are services available to support you, such as the Samaritans, who are available 24/7.<br>If not, please contact a friend or family member who can support you.<br>https://www.samaritans.org/</p>" :
              (OutcomePercent >= 33) ? "<p>We believe you are at a medium risk and should seek support from someone that you know and trust as soon as possible.<br>Communication is always the best way to work through your problems, and having someone to support you can be a huge relief.</p>" :
              "<p>We believe you are a low risk, but that doesn't mean you shouldn't seek support.<br>Find someone that you trust to talk to, or do something that you know you enjoy to help your mood.</p>";
    
    Outcome.innerHTML =  message ;
}
