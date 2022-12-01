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
        the top 3 players in the tournament will get prizes such as...
    </p>
    <div>
        <img src="img/Yasuo-Sea-Dog-Skin.jpg" width="300" height="200">
        <img src="img/Valorant-Reaver-Vandal.jpg" width="300" height="200">
        <img src="img/Forsaken-Skin-Bundle.jpg" width="300" height="200">
    </div>
    <p>
        We would usually host these events after the common test period to allow our members to<br>
        relax and enjoy some fun and games together!
    </p>
`

const games1 = `
    <h1>Games We Play</h1>
    <img src="img/Valorant.jpg" width="500" height="300" id="1">
    <h2>Valorant</h2>
    <p style="text-align: center">
        Valorant is a team-based first-person tactical hero shooter set in the near future.<br>
        Players play as one of a set of Agents, characters based on several countries and cultures around the world.<br>
        In the main game mode, players are assigned to either the attacking or defending team<br>
        with each team having five players on it.
    </p>
`

const games2 = `
    <img src="img/CSGO.jpg" width="500" height="300" style="padding-top: 4%" id="2">
    <h2>Counter Strike:Global Offensive</h2>
    <p style="text-align: center">
        The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes.<br>
        The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them,<br>
        or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.
    </p>
`

const games3 = `
    <img src="img/PUBG-Mobile.png" width="300" height="300" style="padding-top: 4%" id="3">
    <h2>Player Unknown's BattleGrounds Mobile</h2>
    <p style="text-align: center">
        PUBG Mobile features gameplay similar to that of the original PlayerUnknown's Battlegrounds.<br>
        Players parachute down to a remote island and fight to remain as the last player standing,<br>
        competing alone or in teams of two or four, depending on the game mode selected before the match.<br>
        Each match lasts about 30 minutes.
    </p>
`

const games4 = `
    <img src="img/League-of-Legends.jpg" width="900" height="300" style="padding-top: 4%" id="4">
    <h2>League of Legends</h2>
    <p style="text-align: center">
        League of Legends is a team-based strategy game where two teams of five powerful champions face off<br>
        to destroy the other's base. Choose from over 140 champions to make epic plays, secure kills,<br>
        and take down towers as you battle your way to victory.
    </p>
`

const games5 = `
    <img src="img/Dota-2.jpg" width="500" height="300" style="padding-top: 4%" id="5">
    <h2>Dota 2</h2>
    <p style="text-align: center">
        Dota 2 is a multiplayer online battle arena (MOBA) video game in which<br>
        two teams of five players compete to destroy a large structure defended by the opposing team<br>
        known as the "Ancient" whilst defending their own.
    </p>
`

const games6 = `
    <img src="img/Mobile-Legends.jpg" width="500" height="300" style="padding-top: 4%" id="6">
    <h2>Mobile Legends: Bang Bang</h2>
    <p style="text-align: center">
        Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones.<br>
        The game is free-to-play and is only monetized through in-game purchases like characters and skins.<br>
        Each player can control a selectable character, called “Hero”, with unique abilities and traits.
    </p>
`

const members1 = `
    <h1>Our Members</h1>
    <img src="img/President.jpg" width="200" height="250" id="1">
    <h2>Guo Heng, President of the club</h2>
`

const members2 = `
    <img src="img/Vice-President.jpg" width="200" height="300" style="padding-top: 4%" id="2">
    <h2>Mary, Vice President of the club</h2>
`

const members3 = `
    <img src="img/Lecturer.jpg" width="400" height="300" style="padding-top: 4%" id="3">
    <h2>John, Lecturer/Mentor of the club</h2>
`

const members4 = `
    <img src="img/Secretary.jpg" width="300" height="300" style="padding-top: 4%" id="4">
    <h2>May, Secretary of the club</h2>
`

const members5 = `
    <img src="img/Marketing-Personnel.jpg" width="300" height="300" style="padding-top: 4%" id="5">
    <h2>Ben, Marketing Personnel of the club</h2>
`

const members6 = `
    <img src="img/Logistics-Personnel.jpg" width="400" height="300" style="padding-top: 4%" id="6">
    <h2>Steve, Logistics Personnel of the club</h2>
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
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
        }
        else if (buttonClicked.getAttribute("id") == "games"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = games1;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
        }
        else {
            newDiv = document.createElement("article");
            newDiv.innerHTML = members1;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
        }
    }
    else{
        if (buttonClicked.getAttribute("id") == "aboutUs"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = aboutUs1;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
        }
        else if (buttonClicked.getAttribute("id") == "games"){
            newDiv = document.createElement("article");
            newDiv.innerHTML = games1;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
        }
        else {
            newDiv = document.createElement("article");
            newDiv.innerHTML = members1;
            document.querySelector("div div").append(newDiv);
            newDiv = document.createElement("button");
            newDiv.textContent = "Next";
            newDiv.setAttribute("onclick", "traverse(this)");
            newDiv.setAttribute("id", "next");
            newDiv.style.alignSelf = "flex-end";
            document.querySelector("div div article").append(newDiv);
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
    else if (buttonClicked.getAttribute("id") == "games"){
        if (y.getAttribute("id") == "prev"){
            if (document.querySelector("div div article img").getAttribute("id") == "2"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games1;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.justifySelf = "flex-end";
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div div article").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "3"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games2;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "4"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games3;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "5"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games4;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "6"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games5;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
        }
        else{
            if (document.querySelector("div div article img").getAttribute("id") == "1"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games2;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "2"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games3;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "3"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games4;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "4"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games5;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "5"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = games6;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                newDiv.style.alignSelf = "flex-start";
                document.querySelector("div div article").append(newDiv);
            }
        }
    }
    else{
        if (y.getAttribute("id") == "prev"){
            if (document.querySelector("div div article img").getAttribute("id") == "2"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members1;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div div article").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "3"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members2;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "4"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members3;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "5"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members4;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "6"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members5;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
        }
        else{
            if (document.querySelector("div div article img").getAttribute("id") == "1"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members2;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "2"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members3;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "3"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members4;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "4"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members5;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div div article div").append(newDiv);
            }
            else if (document.querySelector("div div article img").getAttribute("id") == "5"){
                document.querySelector("div div article").remove();
                newDiv = document.createElement("article");
                newDiv.innerHTML = members6;
                document.querySelector("div div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                newDiv.style.alignSelf = "flex-start";
                document.querySelector("div div article").append(newDiv);
            }
        }
    }
}