const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const homePage = document.getElementById('home-page')
const timerEl = document.getElementById('countdown')

let shuffledQuestions, currentQuestionIndex


//first question generator
//TIMER
function countdown() {
    var timeLeft = 5;
//function that creates time
var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    }   else if (timeLeft ===1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
    }   else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
    }, 1000);
}

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', countdown)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    startButton.classList.add('hide')
    homePage.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}



function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {  // this might be the shit that causes the timer not to go down
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    }   else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('correct')
}
const questions = [
    {
        question: 'What does "var" stand for?',
        answers: [
       { text: 'Variable', correct: true},
       { text: 'Harold VARner Jr', correct: false},
       { text: 'VARney the dinosaur', correct: false},
       { text: 'var-briator', correct: false},
    ]
      
    },
    {
        question: 'this is true',
        answers: [
        {text: 'True', correct: true},
        {text: 'false', correct: false},
        {text: 'false', correct: false},
        {text: 'false', correct: false},
        ]
    },
    {
        question: 'the answer is b',
        answers: [
            {text: 'A', correct: false},
            {text: 'B', correct: true},
            {text: 'C', correct: false},
            {text: 'D', correct: false},
        ]
        },

        {
            question: 'the answer is C',
            answers: [
                {text: 'A', correct: false},
                {text: 'B', correct: false},
                {text: 'C', correct: true},
                {text: 'D', correct: false},
            ]
            },    
            
        {
            question: 'the answer is D',
                answers: [
                    {text: 'A', correct: false},
                    {text: 'B', correct: false},
                    {text: 'C', correct: false},
                    {text: 'D', correct: true},
                ]
                },   
                
            {
            question: 'the answer is a',
                    answers: [
                    {text: 'A', correct: true},
                    {text: 'B', correct: false},
                    {text: 'C', correct: false},
                    {text: 'C', correct: false},
            ]
        }, 
    ];