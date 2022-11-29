var buttonClicked = null;

function choice(x){
    if (buttonClicked != null){
        buttonClicked.style.backgroundColor = "#55DD33";
        buttonClicked.style.borderColor = "darkgreen";
    }
    buttonClicked = x;
    buttonClicked.style.backgroundColor = "lightblue";
    buttonClicked.style.borderColor = "lightskyblue";
}