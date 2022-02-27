function displayBar(btnValue){
    document.getElementById("result").value += btnValue;
}

function result(){
    let displayValue = document.getElementById("result").value;
    let result = eval(displayValue);
    document.getElementById("result").value = result;
}

function empty(){
    document.getElementById("result").value = "";
}