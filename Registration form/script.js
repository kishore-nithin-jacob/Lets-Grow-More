function insertData(){
    // Values
    imageVal = document.getElementById("imgID").value;
    nameVal = document.getElementById("nameID").value;
    emailVal = document.getElementById("emailID").value;
    if((imageVal.length == 0) || (nameVal.length == 0) || (emailVal.length ==0)){
        alert("Please do fill all the fields!");
    }
    else{
        mainContainer = document.getElementById("display");
        innerContainer = document.createElement("div");
        innerContainer.className = "innerContainerStyle"
        mainContainer.appendChild(innerContainer);

        // Image display
        imageContainer = document.createElement("img");
        imageContainer.src = imageVal;
        imageContainer.alt = "image";
        innerContainer.appendChild(imageContainer);

        // Name display
        nameContainer = document.createElement("p");
        nameContainer.className = "nameStyle";
        nameContainer.innerHTML = nameVal;
        innerContainer.appendChild(nameContainer);

        // Email display
        emailContainer = document.createElement("p");
        emailContainer.className = "emailStyle";
        emailContainer.innerHTML = emailVal;
        innerContainer.appendChild(emailContainer);

    }
}