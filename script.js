const aboutUs1 = `
    <h1>About Us</h1>
    <p>
        We are a group of students in Ngee Ann Polytechnic that like to play games.<br>
        The purpose of this club is to encourage people to interact with others through games,<br>
        and encourage people to relax once in a while so they will not feel suffocated from their stress.<br>
        Usually we would have sessions online on msteams where we talk about recent popular games,<br>
        afterwards we would break out into seperate rooms to allow members to play games together and bond.<br>
        Because this is just an interest group and the members all have CAs and Assignments they need to complete,<br>
        therefore we decided to have only 2 sessions per week, each session usually last about 2-3 hours.<br>
        The game genres we usually play are MMORPG, MOBA e.t.c. These games usually have multiplayer features,<br>
        which allows our members to team up and play together, allowing them to bond with each other.
    </p>
`;

const aboutUs2 = `
    <p>
        Sometimes we would host events such as tournaments lasting 2-3 days,<br>
        the top 3 players in the tournament will get prizes.<br>
        Insert image here<br>
        We would usually host these events after the common test period to allow our members to relax,<br>
        and enjoy some fun and games together.
    </p>
`

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
            newDiv.innerHTML = aboutUs1;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.justifySelf = "flex-end";
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
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
            newDiv.innerHTML = aboutUs1;
            newDiv.setAttribute("Class", "display");
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.justifySelf = "flex-end";
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
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

function traverse(y){
    if (buttonClicked.getAttribute("id") == "aboutUs"){
        if (y.getAttribute("id") == "prev"){
            document.querySelector("div div article").remove();
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutUs1;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.justifySelf = "flex-end";
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
        }
        else{
            document.querySelector("div div article").remove();
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutUs2;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Prev";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "prev");
            newDiv.style.justifySelf = "flex-end";
            newDiv.style.alignSelf = "flex-start";
            document.querySelector("div div article").append(newDiv);
        }
    }
}