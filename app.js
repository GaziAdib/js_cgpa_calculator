// inputs

const quiz1Input = document.getElementById('quize1-input');
const quiz2Input = document.getElementById('quize2-input');
const quiz3Input = document.getElementById('quize3-input');

const assignmentInput = document.getElementById('assignment-input');
const attendenceInput = document.getElementById('attendance-input');
const presentationInput = document.getElementById('presentation-input');
const midtermInput = document.getElementById('midterm-input');
const finalXmInput = document.getElementById('final-input');

// results

const finalMarksText = document.getElementById('dynamic__marks');
const message = document.getElementById('message_text');

// buttons

const successButton = document.getElementById('btn-success');
const resetButton = document.getElementById('btn-reset');

// calculate marks

function calculateTotalMarks() {

    let q1, q2, q3,  avgQuize, assign, attend, present, midtermxm, finalxm, totalMarks;

    q1 = Number(quiz1Input.value);
    q2 = Number(quiz2Input.value);
    q3 = Number(quiz3Input.value);

    assign = Number(assignmentInput.value);
    present = Number(presentationInput.value);
    attend = Number(attendenceInput.value);
    midtermxm = Number(midtermInput.value);
    finalxm = Number(finalXmInput.value);
    
    avgQuize = (q1 + q2 + q3) / 3;

    totalMarks = avgQuize + assign + present + attend + midtermxm + finalxm;

    finalMarksText.textContent = totalMarks.toFixed(2);

    let msg = showMessage(totalMarks);
    message.textContent = msg;


}

function showMessage(marks) {
    if (marks < 40) {
        return "You have failed. try again!";
    } else if(marks >= 40 && marks <= 50) {
        return "You have passed with average result. try more!";
    } else if(marks >= 60 && marks <= 69) {
        return "You got first class!";
    } else if(marks >= 70 && marks <=79) {
        return "You got star marks. it is very good result";
    } else if(marks >= 80) {
        return "You got A+. it is outstanding result";
    } else {
        return "you have put more than 100 marks";
    }

}

function reset() {
    quiz1Input.value = "";
    quiz2Input.value = "";
    quiz3Input.value = "";

    assignmentInput.value = "";
    attendenceInput.value = "";
    presentationInput.value = "" ;
    midtermInput.value = "";
    finalXmInput.value = "";
    finalMarksText.textContent = "___________________";
    message.textContent = "";

}


function eventHandle() {
    if(Number(quiz1Input.value) && Number(quiz2Input.value) && Number(quiz3Input.value) && Number(assignmentInput.value) && Number(presentationInput.value) && Number(attendenceInput.value) && Number(midtermInput.value) && Number(finalXmInput.value)) {
        calculateTotalMarks();
    } else {
        alert('Give proper values!');
        reset();
    }

}

successButton.addEventListener('click', eventHandle);
resetButton.addEventListener('click', reset);

