let score = 0;
let time = 10;
let start_btn = document.getElementById('startgame');
let clear;
let input = document.getElementById('input');
let gameStarted = false;

let timer = document.getElementById('timer');

input.disabled = true;


function startgame() {
    // resetgame();
    score = 0;
    time = 10;
    updatescore();
    handleTimer();
    gameStarted = true;
    start_btn.hidden = true;
    input.disabled = false;
    display_random();
    updatescore();
}
function resetgame() {
    score = 0;
    time = 10;
    updatescore();
    document.getElementById('input').value = '';
    timer.innerText = 'Game Over';
    input.disabled = true;
    start_btn.disabled = false;
    gameStarted = false;

}


start_btn.addEventListener("click", startgame)

function handleTimer() {
    clear = setInterval(Timer, 1000)
}

function compareChar()/*so sanh 2 ky tu cho san va nhap vao dung score tang*/ {
    if (!gameStarted) {
        return;
    }
    const givenChar = document.getElementById('word').innerText;
    const input = document.getElementById('input').value;
    if (givenChar === input) {
        score++;
    } else {
        score--;
        if (score < 0) { //không cho điểm âm
            score = 0;
        }

    }
    // endgame();

    updatescore();
    display_random()

}

// input.addEventListener("keyup", ({ key }) => {
//     if (key === "Enter") {
//         compareChar();
//     }
// })

function display_random()/*cai nay dung de random ky tu*/ {
    const character = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const randomLocal = Math.floor(Math.random() * character.length);
    const randomchar = character[randomLocal];
    document.getElementById('word').innerText = randomchar;
    document.getElementById('input').value = '';
}

function updatescore() { //????? function 1 chuc nang
    document.getElementById('score').innerText = 'Score: ' + score;
}
function endgame() { //???
    alert(`Game Over! Your final score is ${score}.`);
    resetgame();

}

function Timer() {
    if (!gameStarted) {
        return;
    }
    if (time == 0) { //neu time = 0 thi dung game

        timer.innerText = 'Game Over';
        clearInterval(clear);
        start_btn.hidden = false;
        input.disabled = true;
        start_btn.innerText = "Play again"
        endgame();

    }
    else {
        timer.innerHTML = "Time: " + time
        time--;
    }
}





