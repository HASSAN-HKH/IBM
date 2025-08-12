



function performOperation(){

    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");

    if(!isNaN(num1.value) && !isNaN(num2.value)){
        let result = multiply(num1.value , num2.value);
        displayResult(result);
    }
    else{
        displayResult(`Please enter valid numbers`);
    }

    function multiply(n1 , n2){
        debugger;
        return n1 * n2;
    }

    function displayResult(r){
        let result = document.getElementById("result");
        result.textContent = `The result is: ${r}`;
    }


}
