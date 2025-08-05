let length , width;

function calculateArea(len , wid){
    len = parseFloat(document.getElementById("len").value);
    wid = parseFloat(document.getElementById("wid").value);

    let area = len * wid;
    document.getElementById("result").innerText = `The area of the rectangle is ${area}`;
    
}

