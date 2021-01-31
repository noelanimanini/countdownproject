const quizData = [
    {
        question: 'Shorty a lil baddie', 
        a: 'yeet', 
        b: 'yes',
        c: 'no',
        d: 'suUuUh dood',
        correct: 'c',
    }, {
        question: "it's Wednesday my doods", 
        a:  'Aww snapp',
        b: 'Aww snappo',
        c: 'Aww snappu',
        d: 'Aww snappa',
        correct: 'a',
    }, {
        question: "Stop! I almost dropped my __", 
        a:  'croissant',
        b: 'bagel',
        c: 'Nanners',
        d: 'yee haw bruther',
        correct: 'a',



    },
    
]
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit')


let currentQuiz = 0; 
let score = 0;

loadQuiz(); 

function loadQuiz() {
    deselectedAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer; 
}


function deselectedAnswers() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected(); 

    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++; 
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        }
    }
    
})

