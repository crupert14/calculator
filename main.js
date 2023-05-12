let nums = document.getElementsByClassName("num");
let sep = document.getElementsByClassName("sign");
let disp = document.getElementById("main-display");
let hist = document.getElementById("his");
let sz = document.getElementById("switchZero");
let per = document.getElementById("divPer");
let statement = [];
let history = [];
let containsNumber = false;
let current = "";
let evalString = "";
let answer = "";
let lastAnswer = "";

//Listens for number click
for(let i=0;i<nums.length;i++) {
    nums[i].addEventListener("click", () => {
        current += nums[i].innerHTML;
        updateDisplay(current);
    });
}

//Listens for sign click, pushes both to statement[] 
for(let j=0;j<sep.length;j++) {
    sep[j].addEventListener("click", () => {
        statement.push(current);
        current = "";
        statement.push(sep[j].innerHTML)
    })
}

document.getElementById("botr").addEventListener("click", () => {
    statement.push(current);
    for(let i=0;i<statement.length;i++) {
        answer += statement[i];
    }
    lastAnswer = eval(answer);
    history.push(answer + " = " + lastAnswer);
    resetAndClearDisplay();
    statement[0] = String(lastAnswer);
    updateDisplay(lastAnswer);
});

function updateDisplay(val) {
    disp.value = val;
}

function resetAndClearDisplay() {
    disp.value = "";
    statement = [];
    current = "";
    answer = "";
    evalString = "";
}

document.getElementById("clear-btn").addEventListener("click", resetAndClearDisplay);

hist.addEventListener("click", () => {
    console.table(history);
});

sz.addEventListener("click", () => {
    current *= -1;
    updateDisplay(current);
});

per.addEventListener("click", () => {
    current /= 100;
    updateDisplay(current);
});