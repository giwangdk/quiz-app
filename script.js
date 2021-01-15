const quizData = [
    {
        question : 'How Old is Giwang?',
        a:'10',
        b:'15',
        c:'20',
        d:'60',
        correct: 'c'
    },
    {
    question: 'What is the most used programming language in 2020?',
    a: 'Java',
    b: 'Phyton',
    c: 'JavaScript',
    d: 'C',
    correct : 'b'
    },
    {
        question: 'Who is the president of Indonesia?',
        a: 'Jokowi',
        b: 'SBY',
        c: 'Prabowo',
        d: 'Sandiaga Uno',
    correct : 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object ',
        d: 'hiya Uno',
    correct : 'a'
    },
    {
        question: 'When was Javascript launched',
        a: '1994',
        b: '1997',
        c: '2019',
        d: 'none of the above',
    correct : 'd'
    }
];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answersEls =  document.querySelectorAll('.answer');

const submit = document.querySelector('button')

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    
    answersEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswer(){
    answersEls.forEach(answerEl=>{
        answerEl.checked= false;
        }
    )
}


submit.addEventListener('click', ()=>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }


    currentQuiz++;
        if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        //TODO show result
    quiz.innerHTML = `<h3>You answered correctly at ${score}/${quizData.length} questions</h3>
                    <button onclick = "location.reload()">Reload</button>`
    }

    }

})