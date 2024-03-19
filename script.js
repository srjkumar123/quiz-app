const questions = [
    {
        'que': 'Which of the folloeing is a markup language?',
        'a':'HTML',
        'b': 'CSS',
        'c':'JavsScript',
        'd': 'PHP',
        'correct' : 'a'
    },
    {
        'que': 'When did JavaScript first lauched?',
        'a':'1996',
        'b': '1995',
        'c':'1994',
        'd': 'None of the above',
        'correct' : 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a':'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c':'Javascript Object Notation',
        'd': 'Common Style Sheet',
        'correct' : 'b'
    }
];
let index = 0 ;
let total = questions.length;
let right = 0;
let wrong = 0; 
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = ()=>{
    if(index===total){
        return endQuiz();//jab question khatam ho jaye
    }
    reset();//otherwise next question pa jane k baad check box reset ho jaye
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer =  input.value;
        }
    })
    return answer;
}

const reset = ()=>{
    optionInputs.forEach((input)=>{
        input.checked = false;
            
    
    })
}
const endQuiz = ()=>{
    const end = document.getElementById('box');
    const score = document.getElementById('score');
    end.classList.add("none");
    score.classList.add("score")
    score.innerHTML = `<h2>${right} / ${total} questions are correct</h2>`
}
loadQuestion();