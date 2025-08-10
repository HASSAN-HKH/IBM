
let testText = "The quick brown fox jumps over the lazy dog.";

let startTime , endTime;

function startTest(){
    startTime = new Date().getTime();
    document.getElementById("inputText").value = testText;
    

    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").focus();
    document.getElementById("output").innerHTML = "";

}

function endTest(){
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;

    let timeTaken = (endTime - startTime) / 1000;
    let userText =  document.getElementById("userInput").value;
    let words = userText.trim().split(/\s+/);
    let wpm = 0;

    if(timeTaken !== 0 && !isNaN(words.length)){
        wpm = Math.round((words.length / timeTaken) * 60);
    }

    document.getElementById("output").innerHTML = `<h2>Typing Test Results:</h2> <p>Words Typed: " ${words.length} "</p>
    <p>Time Elapsed: " ${timeTaken.toFixed(2)} " seconds</p>
    <p>Words Per Minute (WPM): " ${wpm} "</p>`

    // document.getElementById("userInput").readOnly = true;
}