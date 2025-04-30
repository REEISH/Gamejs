console.log("HI");

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let Choice = prompt("Choose Rock Paper or Scissor:", "Rock");
    let val;
    if (Choice.toLowerCase() == "rock") val = 0;
    else if (Choice.toLowerCase() == "paper") val = 1;
    else if (Choice.toLowerCase() == "scissor") val = 2;
    else val = 0;
    return val;
}

let humanscore = 0;
let computerscore = 0;

function playRound(humanscore, computerscore) {
    let result;
    if (humanscore == 2 && computerscore == 1) result = 1;
    else if (humanscore == 1 && computerscore == 0) result = 1;
    else if (humanscore == 0 && computerscore == 2) result = 1;
    else if (humanscore == computerscore) result = 0;
    else result = -1;
    return result;
}

function playGame() {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        humanscore = getHumanChoice();
        computerscore = getComputerChoice();
        console.log(humanscore);
        console.log(computerscore);
        result += playRound(humanscore, computerscore);
    }
    if (result > 0) console.log("WIN");
    else if (result < 0) console.log("LOSE");
    else console.log("TIE");
    return result;
}

const div = document.createElement("div");
div.setAttribute("class", "container");
div.setAttribute("style", "justify-content:center;align-items:center;display:flex;flex-direction:column;height:950px;width:1835px;");
document.body.appendChild(div);

const btn = document.createElement('button');
btn.innerText = "CHOOSE SIZE";
div.appendChild(btn);

const child = document.createElement("div");
child.setAttribute("class", "child");
child.setAttribute("style", "display:flex;flex-direction:column;height:800px;width:800px;background-color:#A0A0FF;");
div.appendChild(child);

function createGrid(N = 16) {

    let A = new Array(N);
    for (let i = 1; i <= N; i++) {
        A[i] = document.createElement("div");
        A[i].setAttribute("class", "flex-" + i.toString());
        let h = 6.25;
        h = 100 / N;
        h = h.toString();
        A[i].setAttribute("style", "display:flex;justify-content:center;width:100%;height:" + h + "%;");
        child.appendChild(A[i]);
    }
    let B = []
    for (let i = 1; i <= N; i++) {
        B[i] = new Array(N);
        for (let j = 1; j <= N; j++) {
            B[i][j] = document.createElement("div");
            B[i][j].setAttribute("class", "flex-" + i.toString() + "-" + j.toString());
            let w = 6.25;
            w = 100 / N;
            w = w.toString();
            B[i][j].setAttribute("style", "display:flex;align-items:center;justify-content:center;width:" + w + "%;height:100%;background-color:#00AA00");
            A[i].appendChild(B[i][j]);
            B[i][j].addEventListener("mouseover", () => {
                B[i][j].style.background = "#AA0000";
            })
        }
    }
}

btn.addEventListener("click", () => {
    let n = prompt("Enter the size of grid:")
    n = parseInt(n);
    if (Number.isInteger(n) && n >= 2 && n <= 100) {
        console.log(n);
        while (child.hasChildNodes())
            child.removeChild(child.children[0]);
        createGrid(n);
    }
})