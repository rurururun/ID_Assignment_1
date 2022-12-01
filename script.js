const aboutUs = `
    <h1>About Us</h1>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
`;

const games = `
    <h1>Games We Play</h1>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
`

const members = `
    <h1>Our Members</h1>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
`

var buttonClicked = null;

let newDiv = null;

function choice(x){
    if (document.querySelector("div h1") != null){
        document.querySelector("div h1").remove();
    }
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
        if (buttonClicked.getAttribute("id") == "aboutUs"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutUs;
            document.querySelector("div div").append(newDiv);
        }
        else if (buttonClicked.getAttribute("id") == "games"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = games;
            document.querySelector("div div").append(newDiv);
        }
        else {
            newDiv = document.createElement("article");
            newDiv.innerHTML = members;
            document.querySelector("div div").append(newDiv);
        }
    }
    else{
        if (buttonClicked.getAttribute("id") == "aboutUs"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutUs;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
        }
        else if (buttonClicked.getAttribute("id") == "games"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = games;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
        }
        else {
            newDiv = document.createElement("article");
            newDiv.innerHTML = members;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
        }
    }

    document.querySelector("div div").style.justifyContent = "flex-start";
    document.querySelector("div div").style.alignItems = "flex-start";
    document.querySelector("div div").style.flexDirection = "row";
}