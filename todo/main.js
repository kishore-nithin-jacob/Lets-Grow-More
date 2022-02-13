// Adding tasks in a list
function addTask(){
    var innerContainer = document.createElement("div");
    innerContainer.className = "flexContainer";
    document.getElementById("outerContainer").appendChild(innerContainer);
    var paraText = document.getElementById("to-do").value;
    var textContainer = document.createElement("p");
    textContainer.innerHTML = paraText;
    textContainer.className = "paraText";
    innerContainer.appendChild(textContainer);
    // Strike a task 
    var strikeContainer = document.createElement("button");
    strikeContainer.innerHTML = "&#8594"; // HTML code for right arrow
    strikeContainer.className = "strikeContainer";
    var strike = document.getElementsByClassName("strikeContainer");
    innerContainer.appendChild(strikeContainer);
    for(var j=0;j<strike.length;j++){
        strike[j].onclick = function(){
            var strikeParent = this.parentElement;
            var strikeScript = strikeParent.children[0];
            strikeScript.style.textDecoration = "line-through";
        }
    }
    // Deleting a task
    var addCloseButton = document.createElement("button");
    addCloseButton.innerHTML = "&#128465"; // HTML code for trashcan symbol
    addCloseButton.className = "delContainer";
    innerContainer.appendChild(addCloseButton);
    var close = document.getElementsByClassName("delContainer");
    for(var i=0;i<close.length;i++){
        close[i].onclick = function(){
            var delScript = this.parentElement;
            delScript.style.display = "none";
        }
    }
}