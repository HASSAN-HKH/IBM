const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 60;
let gameInterval;


const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('gameContainer');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (let index = 0; index < cards.length; index++) {
        let card = document.createElement("div");
        card.dataset.color = cards[index];
        card.classList.add("card");
        card.textContent = "?";
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched') || card.textContent === card.dataset.color) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}


function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color ) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 60;
    startbtn.disabled = true;
    score = 0; 
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
        else if(score === 24){
            clearInterval(gameInterval);
            alert('Congrats, You solved the game');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);

// let container = document.getElementsByClassName("container")[0];
// let startMain = document.getElementsByClassName("startMain")[0];
// let gameContainer = document.getElementById("gameContainer");
// let score = document.getElementById("score");
// let timer = document.getElementById("timer");
// let startbtn = document.getElementById("startbtn");
 
// const colors = [
//   "red",
//   "blue",
//   "green",
//   "purple",
//   "orange",
//   "pink",
//   "red",
//   "blue",
//   "green",
//   "purple",
//   "orange",
//   "pink",
// ];

// let selectedCards = [];
// let userScore = 0;
// let timeLeft = 60;
// let cards = shuffle(colors.concat(colors));


// function shuffle(arr){
//     for (let index = arr.length - 1; index > 0; index--) {
//         let rand = Math.floor(Math.random() * (index + 1));
//         [arr[index] , arr[rand]] = [arr[rand] , arr[index]];
//     }
//     return arr;
// }

// function generateCards(cards){
//     for (let index = 0; index < cards.length; index++) {
//         let card = document.createElement("div");
//         card.dataset.color = cards[index];
//         card.classList.add("card");
//         card.textContent = "?";
//         gameContainer.appendChild(card);
//     }
// }

// function handleCard(event){
//     let card = event.target;
//     if(!card.classList.contains("card") || card.classList.contains("matched")){
//         return;
//     }
//     card.style.backgroundColor = card.dataset.color;
//     card.textContent = card.dataset.color;
//     selectedCards.push(card);
//     if(selectedCards.length === 2){
//         checkMatch();
//     }
// }

// function checkMatch(){
//     const [card1 , card2] = selectedCards;
//     setTimeout(function(){
//         if(card1.dataset.color === card2.dataset.color){
//             card1.classList.add("matched");
//             card2.classList.add("matched");
//             userScore += 1;
//             score.textContent = `Score: ${userScore}`;
//         }
//         else{
//             card1.textContent = "?";
//             card2.textContent = "?";
//             card1.style.backgroundColor = "#ddd";
//             card2.style.backgroundColor = "#ddd";
//         }
//     } , 500);
//     selectedCards = [];

// }

// // function startGame(){
    
// // }

// startbtn.onclick = function(){
//     startbtn.disabled = true;
//     generateCards(cards);
//     startGameTimer(timeLeft);
//     gameContainer.addEventListener("click" , handleCard);
// }

// function startGameTimer(timeLeft){
//     timer.textContent = `Time Left: ${timeLeft}`;
//     let gameInterval = setInterval(() => {
//         timeLeft--;
//         timer.textContent = `Time Left: ${timeLeft}`;
//         if (timeLeft === 0) {
//             clearInterval(gameInterval);
//             let timeLeft = 30;
//             alert('Game Over!');
//             startbtn.disabled = false;
//         }
//     }, 1000);
// }


// let cards = shuffle(colors.concat(colors));
// let selectedCards = [];
// let userScore = 0;
// let timeLeft = 60;
// let gameInterval;

// function generateCards(){
//     for (let i = 0; i < cards.length; i++) {
//         let card = document.createElement("div");
//         card.innerHTML = "?";
//         // console.log(card);
//         card.setAttribute("class" , "card");
//         card.onclick = function(){
//             if (selectedCards.includes(card) || selectedCards.length === 2 || card.style.backgroundColor === "green") return;
//             card.innerHTML = cards[i];
//             card.style.backgroundColor = cards[i];
//             // console.log("Ok");
//             selectedCards.push(card);

//             if(selectedCards.length === 2){
//                 setTimeout(function(){
//                     if(selectedCards[0].innerHTML === selectedCards[1].innerHTML){
//                         userScore++;
//                         score.innerHTML = `Score: ${userScore}`
//                         selectedCards[0].style.color = "white";
//                         selectedCards[0].style.backgroundColor = "green";
//                         selectedCards[1].style.color = "white";
//                         selectedCards[1].style.backgroundColor = "green";
//                         selectedCards.pop();
//                         selectedCards.pop();
//                     }
//                     else if(selectedCards[0].innerHTML !== selectedCards[1].innerHTML){
//                         selectedCards[0].innerHTML = "?";
//                         selectedCards[0].style.backgroundColor = "#ddd";
//                         selectedCards[1].innerHTML = "?";
//                         selectedCards[1].style.backgroundColor = "#ddd";
//                         selectedCards.pop();
//                         selectedCards.pop();
//                     }
//                 } , 500)
//             }   
//         }
//         gameContainer.appendChild(card);
//     }
// }

// function shuffle(arr){
//     for (let i = arr.length; i > 0; i--) {
//         let randIndex = Math.floor(Math.random() * i);
//         [arr[i-1] , arr[randIndex]] = [arr[randIndex] , arr[i-1]];
//     }
//     return arr;
// }

// // let start = false;
// startbtn.onclick = function(){
//     if(timeLeft === 60){
//         generateCards();
//         let time = setInterval(() => {
//             timer.innerHTML = `Time Left: ${timeLeft}`;
//             timeLeft--;
//             if(timeLeft === -1 || userScore === 12){
//                 clearInterval(time);
//                 if(userScore === 12){
//                     alert("You solved the game. Congrats");
//                 }
//                 else{
//                     alert("Game over, try again");
//                 }    
//             }
//         }, 1000);
//     }
//     else{
//         window.location.reload();
//     }
// }



