//V컴퓨터랜덤번호 지정(function)
//V유저가 번호를 입력한다 그리고 go라는 버튼을 누름(input을 사용 .value, 버튼사용 add이벤트)
//V만약에 유저가 랜덤번호를 맞추면, 맞습니다(if문)
//V랜덤번호(컴퓨터번호)<유저번호 DOWN!(if문)
//V랜덤번호>유저번호 UP!!(if문)
//Vreset버튼을 누르면 게임이 리셋된다.
//V5번의 기회를 다쓰면 게임은 끝난다(버튼이 disable)
//V유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지않는다
//V유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
let imgChange = document.getElementById("img-change")

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset)

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

pickRandomNum()

function play() {
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100사이 숫자를 입력해주세요"
        imgChange.src="https://i.pinimg.com/564x/52/83/88/528388fd7e03dc9dcf11260ed3a85d0d.jpg";
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent="이미 입력한 번호입니다";
        imgChange.src="https://i.pinimg.com/564x/e8/9d/26/e89d26fe0e3a9b45ccea3b1d6655b483.jpg"
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}`
    console.log("chance", chances)

    if (userValue>computerNum){
        resultArea.textContent = "DOWN!";
        imgChange.src="https://i.pinimg.com/originals/39/9b/a9/399ba99f3861c9657549f647d400f4cf.gif";
    } else if (userValue<computerNum) {
        resultArea.textContent = "UP!!";
        imgChange.src="https://i.pinimg.com/originals/ce/f1/46/cef146c13ca079dd42432aa545b3d379.gif"
    } else {
        resultArea.textContent ="맞췄습니다!!!!!";
        imgChange.src="https://i.pinimg.com/originals/8d/ad/13/8dad13dc67879102487d616ffca12136.gif";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history)

    
    if (chances<1){
        gameOver = true;
    }
    
    if (gameOver == true) {
    playButton.disabled = true;
    }
}

function reset() { 
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent ="start";
    imgChange.src="https://i.pinimg.com/originals/a9/ca/f6/a9caf6edad30b4f38a0573b21dcdf32d.gif"
}


