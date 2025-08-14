let container = document.getElementsByClassName("container")[0];
let startMain = document.getElementsByClassName("startMain")[0];
let gameContainer = document.getElementById("gameContainer");
let score = document.getElementById("score");
let timer = document.getElementById("timer");
let startbtn = document.getElementById("startbtn");

const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let userScore = 0;
let timeLeft = 60;
let gameInterval;

function generateCards(){
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement("div");
        card.innerHTML = "?";
        // console.log(card);
        card.setAttribute("class" , "card");
        card.onclick = function(){
            if (selectedCards.includes(card) || selectedCards.length === 2 || card.style.backgroundColor === "green") return;
            card.innerHTML = cards[i];
            card.style.backgroundColor = cards[i];
            // console.log("Ok");
            selectedCards.push(card);

            if(selectedCards.length === 2){
                setTimeout(function(){
                    if(selectedCards[0].innerHTML === selectedCards[1].innerHTML){
                        userScore++;
                        score.innerHTML = `Score: ${userScore}`
                        selectedCards[0].style.color = "white";
                        selectedCards[0].style.backgroundColor = "green";
                        selectedCards[1].style.color = "white";
                        selectedCards[1].style.backgroundColor = "green";
                        selectedCards.pop();
                        selectedCards.pop();
                    }
                    else if(selectedCards[0].innerHTML !== selectedCards[1].innerHTML){
                        selectedCards[0].innerHTML = "?";
                        selectedCards[0].style.backgroundColor = "#ddd";
                        selectedCards[1].innerHTML = "?";
                        selectedCards[1].style.backgroundColor = "#ddd";
                        selectedCards.pop();
                        selectedCards.pop();
                    }
                } , 500)
            }   
        }
        gameContainer.appendChild(card);
    }
}

function shuffle(arr){
    for (let i = arr.length; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * i);
        [arr[i-1] , arr[randIndex]] = [arr[randIndex] , arr[i-1]];
    }
    return arr;
}

// let start = false;
startbtn.onclick = function(){
    if(timeLeft === 60){
        generateCards();
        let time = setInterval(() => {
            timer.innerHTML = `Time Left: ${timeLeft}`;
            timeLeft--;
            if(timeLeft === -1 || userScore === 12){
                clearInterval(time);
                if(userScore === 12){
                    alert("You solved the game. Congrats");
                }
                else{
                    alert("Game over, try again");
                }    
            }
        }, 1000);
    }
    else{
        window.location.reload();
    }
}



