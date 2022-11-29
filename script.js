const aboutMe = `
    <h1>About Me</h1>
    <p>Testing</p>
`;

var buttonClicked = null;

let newDiv = null;

function choice(x){
    if (buttonClicked != null){
        buttonClicked.style.backgroundColor = "#55DD33";
        buttonClicked.style.borderColor = "darkgreen";
    }
    buttonClicked = x;
    buttonClicked.style.backgroundColor = "lightblue";
    buttonClicked.style.borderColor = "lightskyblue";

    if (newDiv != null){
        document.querySelector("div div article").remove();
        newDiv = null;
        if (buttonClicked.getAttribute("id") == "test"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutMe;
            document.querySelector("div div").append(newDiv);
        }
    }
    else{
        if (buttonClicked.getAttribute("id") == "test"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutMe;
            document.querySelector("div div").append(newDiv);
        }
    }
}