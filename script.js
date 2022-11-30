const aboutMe = `
    <h1>About Me</h1>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
`;

const myHobbies = `
    <h1>My Hobbies</h1>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
    <p>Testing way longer text</p>
`

const myProjects = `
    <h1>My Projects</h1>
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
        if (buttonClicked.getAttribute("id") == "test"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutMe;
            document.querySelector("div div").append(newDiv);
        }
        else if (buttonClicked.getAttribute("id") == "test1"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = myHobbies;
            document.querySelector("div div").append(newDiv);
        }
        else {
            newDiv = document.createElement("article");
            newDiv.innerHTML = myProjects;
            document.querySelector("div div").append(newDiv);
        }
    }
    else{
        if (buttonClicked.getAttribute("id") == "test"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutMe;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
        }
        else if (buttonClicked.getAttribute("id") == "test1"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = myHobbies;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
        }
        else {
            newDiv = document.createElement("article");
            newDiv.innerHTML = myProjects;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
        }
    }

    document.querySelector("div div").style.justifyContent = "flex-start";
    document.querySelector("div div").style.alignItems = "flex-start";
    document.querySelector("div div").style.flexDirection = "row";
}