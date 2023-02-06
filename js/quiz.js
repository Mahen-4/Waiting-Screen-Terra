const quiz_question = document.getElementById("quiz_question");
const quiz_response = document.getElementById("quiz_response");
const quiz_true = document.getElementById("quiz_true");
const quiz_false = document.getElementById("quiz_false");
const quiz_answer = document.getElementById("quiz_answer");
const quiz_true_false = document.getElementById("quiz_true_false");
const quiz_suivant = document.getElementById("quiz_suivant");
const quiz = document.getElementById("quiz");
const quiz_end = document.getElementById("quiz_end");
const quiz_icon = document.getElementById("quiz_icon");

const questions = [
    {
        "question": "La lumière du Soleil met 8 minutes et 20 secondes à nous atteindre",
        "response": "C'est vrai ! temps = distance / vitesse donc ici t = 150000000 / 300000 = 500s soit 8 min 20 s. 150000000 millions de km étant la distance de la terre jusqu'au soleil et 300000 la vitesse de la lumière en Km/s ",
        "answer": true,
        "imgSrc": "./images/L'univers.png",
    },
    {
        "question": "L'océan antarctique doit son nom à l'explorateur portugais Magellan",
        "response": "C'est faux ! Megellan nomma l'océan Pacifique en raison des eaux calmes de cet océan",
        "answer": false,
        "imgSrc": "./images/L'exploration et les Grandes Découvertes.png",
    },
    {
        "question": "Le drapeau du Népal est rectangulaire.",
        "response": "C'est faux ! Il se compose de deux triangles l'un au-dessus de l'autre",
        "answer": false,
        "imgSrc": "./images/géographie, la terre & la vie de la planète.png",
    },
    {
        "question": "Les Vikings ont créé l'un des premiers parlements du monde",
        "response": "C'est vrai ! tous les hommes libres allaient au Thing pour prendre des décisions politiques et régler les querelles. Le Thing est une assemblée locale qui s'occupe de la justice et des lois",
        "answer": true,
        "imgSrc": "./images/anthropologie & civilisation.webp",
    }
]
let points = 0;
let current_question = 0;
quiz_question.innerHTML = questions[current_question].question
quiz_icon.src = questions[current_question].imgSrc

quiz_true.addEventListener('click', ()=>{
    answerCheck(true)
})

quiz_false.addEventListener('click', ()=>{
    answerCheck(false)
})

function answerCheck(answer){

    if(questions[current_question].answer == answer){
        quiz_answer.style.backgroundColor = "#27ae60";
        quiz_response.innerHTML = questions[current_question].response;
        points++
    }
    else{
        quiz_answer.style.backgroundColor = "#c0392b";
        quiz_response.innerHTML = questions[current_question].response;
    }
    quiz_answer.classList.remove("quiz_hide")
}

quiz_suivant.addEventListener('click', ()=>{

    if(current_question + 1 == questions.length){
        quiz_true_false.classList.add("quiz_hide")
        quiz_question.classList.add("quiz_hide")
        quiz_end.style.height = "100%"
        quiz.style.height = "50px";
        quiz.style.width = "70%"
        quiz_end.innerHTML = `Terra espère vous avoir appris des choses avec ce quiz ! votre score est de ${points} / ${questions.length}`;
        quiz_answer.classList.add("quiz_hide");
    }
    else{
        quiz_answer.classList.add("quiz_hide");
        current_question++
        quiz_question.innerHTML = questions[current_question].question
        quiz_icon.src = questions[current_question].imgSrc
    }
    

})