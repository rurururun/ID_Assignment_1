// objects that store important html code
const aboutUs1 = `
    <h1>About Us</h1>
    <p>
        We are a group of students in Ngee Ann Polytechnic that like to play games.
        The purpose of this club is to encourage people to interact with others through games,
        and encourage people to relax once in a while so they will not feel suffocated from their stress.<br><br>
        Usually we would have sessions online on msteams where we talk about recent popular games,
        afterwards we would break out into seperate rooms to allow members to play games together and bond.<br><br>
        Because this is just an interest group and the members all have CAs and Assignments they need to complete,
        therefore we decided to have only 2 sessions per week, each session usually last about 2-3 hours.
        The game genres we usually play are MMORPG, MOBA e.t.c. These games usually have multiplayer features,
        which allows our members to team up and play together, allowing them to bond with each other.
    </p>
`;

const aboutUs2 = `
    <p>
        Sometimes we would host events such as tournaments lasting 2-3 days,<br>
        the top 3 players in the tournament will get prizes such as...
    </p>
    <img src="img/Yasuo-Sea-Dog-Skin.jpg" width="600" height="400" id="1" alt="">
    <h2 style="color: black">League of Legends: Yasuo Sea Dog Skin</h2>
`

const aboutUs3 = `
    <img src="img/Valorant-Reaver-Vandal.jpg" width="600" height="400" id="2" style="padding-top: 5%" alt="">
    <h2 style="color: black">Valorant: Reaver Vandal Skin</h2>
`

const aboutUs4 = `
    <img src="img/Forsaken-Skin-Bundle.jpg" width="600" height="400" id="3" style="padding-top: 5%" alt="">
    <h2 style="color: black">Valorant: Forsaken Skin Bundle</h2>
    <p>
        We would usually host these events after the common test period to allow our members to relax and enjoy some fun and games together!
    </p>
`

const games1 = `
    <h1>Games We Play</h1>
    <img src="img/Valorant.jpg" width="500" height="300" id="1" alt="">
    <h2 style="text-shadow: 0 0 4px black">Valorant</h2>
    <p style="text-align: center">
        Valorant is a team-based first-person tactical hero shooter set in the near future.
        Players play as one of a set of Agents, characters based on several countries and cultures around the world.
        In the main game mode, players are assigned to either the attacking or defending team
        with each team having five players on it.
    </p>
`

const games2 = `
    <img src="img/CSGO.jpg" width="500" height="300" style="padding-top: 4%" id="2" alt="">
    <h2 style="text-shadow: 0 0 4px black">Counter Strike:Global Offensive</h2>
    <p style="text-align: center">
        The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes.
        The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them,
        or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.
    </p>
`

const games3 = `
    <img src="img/PUBG-Mobile.png" width="300" height="300" style="padding-top: 4%" id="3" alt="">
    <h2 style="text-shadow: 0 0 4px black">Player Unknown's BattleGrounds Mobile</h2>
    <p style="text-align: center">
        PUBG Mobile features gameplay similar to that of the original PlayerUnknown's Battlegrounds.
        Players parachute down to a remote island and fight to remain as the last player standing,
        competing alone or in teams of two or four, depending on the game mode selected before the match.
        Each match lasts about 30 minutes.
    </p>
`

const games4 = `
    <img src="img/League-of-Legends.jpg" width="900" height="300" style="padding-top: 4%" id="4" alt="">
    <h2 style="text-shadow: 0 0 4px black">League of Legends</h2>
    <p style="text-align: center">
        League of Legends is a team-based strategy game where two teams of five powerful champions face off
        to destroy the other's base. Choose from over 140 champions to make epic plays, secure kills,
        and take down towers as you battle your way to victory.
    </p>
`

const games5 = `
    <img src="img/Dota-2.jpg" width="500" height="300" style="padding-top: 4%" id="5" alt="">
    <h2 style="text-shadow: 0 0 4px black">Dota 2</h2>
    <p style="text-align: center">
        Dota 2 is a multiplayer online battle arena (MOBA) video game in which
        two teams of five players compete to destroy a large structure defended by the opposing team
        known as the "Ancient" whilst defending their own.
    </p>
`

const games6 = `
    <img src="img/Mobile-Legends.jpg" width="500" height="300" style="padding-top: 4%" id="6" alt="">
    <h2 style="text-shadow: 0 0 4px black">Mobile Legends: Bang Bang</h2>
    <p style="text-align: center">
        Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones.
        The game is free-to-play and is only monetized through in-game purchases like characters and skins.
        Each player can control a selectable character, called “Hero”, with unique abilities and traits.
    </p>
`

const members1 = `
    <h1>Our Members</h1>
    <img src="img/President.jpg" width="200" height="250" id="1" alt="">
    <h2 style="margin-bottom: 5%; color: black">Guo Heng, President of the club</h2>
`

const members2 = `
    <img src="img/Vice-President.jpg" width="200" height="300" style="padding-top: 4%" id="2" alt="">
    <h2 style="margin-bottom: 5%; color: black">Mary, Vice President of the club</h2>
`

const members3 = `
    <img src="img/Lecturer.jpg" width="400" height="300" style="padding-top: 4%" id="3" alt="">
    <h2 style="margin-bottom: 5%; color: black">John, Lecturer/Mentor of the club</h2>
`

const members4 = `
    <img src="img/Secretary.jpg" width="300" height="300" style="padding-top: 4%" id="4" alt="">
    <h2 style="margin-bottom: 5%; color: black">May, Secretary of the club</h2>
`

const members5 = `
    <img src="img/Marketing-Personnel.jpg" width="300" height="300" style="padding-top: 4%" id="5" alt="">
    <h2 style="margin-bottom: 5%; color: black">Ben, Marketing Personnel of the club</h2>
`

const members6 = `
    <img src="img/Logistics-Personnel.jpg" width="400" height="300" style="padding-top: 4%" id="6" alt="">
    <h2 style="margin-bottom: 5%; color: black">Steve, Logistics Personnel of the club</h2>
`

const review = `
    <form style="text-align: center">
        <p>Name:</p>
        <input type="text" id="name" required><br>
        <p>Email address:</p>
        <input type="email" id="emailAddress" required><br>
        <p>What is your rating on the website:</p>
        <div>
            <div>
                <input type="radio" id="vbad" name="review" value="Very Bad">
                <label for="vbad">Very Bad</label>
            </div>
            <div>
                <input type="radio" id="bad" name="review" value="Bad">
                <label for="bad">Bad</label>
            </div>
            <div>
                <input type="radio" id="good" name="review" value="Good">
                <label for="good">Good</label>
            </div>
            <div>
                <input type="radio" id="vgood" name="review" value="Very Good">
                <label for="vgood">Very Good</label>
            </div>
        </div>
        <p>Write your comments here:</p>
        <input type="text" id="comments"><br>
        <input type="submit" id="submitButton" value="Submit">
    </form>
`

const footer = `
    <img src="img/Game-Club-Logo.png" width="150" alt="">
    <h2>Follow Us</h2>
    <a href="https://www.facebook.com" target="_blank"><img src="img/Facebook-Logo.png" width="100" alt=""></a>
    <a href="https://www.instagram.com" target="_blank"><img src="img/Instagram-Logo.png" width="100" alt=""></a>
    <a href="https://twitter.com" target="_blank"><img src="img/Twitter-Logo.png" width="100" alt=""></a>
    <div>
        <a href="https://www.facebook.com" target="_blank"><img src="img/Facebook-Logo.png" width="100" alt=""></a>
        <a href="https://www.instagram.com" target="_blank"><img src="img/Instagram-Logo.png" width="100" alt=""></a>
        <a href="https://twitter.com" target="_blank"><img src="img/Twitter-Logo.png" width="100" alt=""></a>
    </div>
    <h2>Website Made by Chua Guo Heng</h2>
`

var buttonClicked = null;

var collapseNavClicked = null;

var buttonColor = ["#55DD33", "darkgreen", "#55DD33", "darkgreen", "#55DD33", "darkgreen"];

let newDiv = null;

// Function for navigation between each section
function choice(x){
    // check if another button was clicked before this button was clicked
    if (buttonClicked != null && buttonClicked.getAttribute("id") != "icon"){
        // if another button was clicked beforehand, change that button's color to normal
        buttonClicked.style.backgroundColor = "#55DD33";
        buttonClicked.style.borderColor = "darkgreen";
    }
    // check if button clicked was collapse navbar icon
    if (x.getAttribute("id") == "icon"){
        // keeping track of collapse navbar icon getting clicked
        if (collapseNavClicked == null){
            collapseNavClicked = x;
            collapseNavClicked.style.backgroundColor = "lightblue";
            collapseNavClicked.style.borderColor = "lightskyblue";
        }
        else{
            collapseNavClicked.style.backgroundColor = "#55DD33";
            collapseNavClicked.style.borderColor = "darkgreen";
            collapseNavClicked = null;
        }
    }
    else{
        // keeping track of the button that was clicked
        buttonClicked = x;
        // change current button color
        buttonClicked.style.backgroundColor = "lightblue";
        buttonClicked.style.borderColor = "lightskyblue";
    }
    // checking if its mobile version
    if (document.querySelector("div div #collapse-nav .nav-button") != null && collapseNavClicked != null){
        // if it is mobile version then change the current button color
        buttonClicked.style.backgroundColor = "lightblue";
        buttonClicked.style.borderColor = "lightskyblue";
        // check if there are previous colors in the color array
        if (buttonColor.length != 0){
            // if there are then empty it
            buttonColor = [];
        }
        // checking for the button that is pressed
        if (buttonClicked.getAttribute("id") == "aboutUs"){
            // then pushing the respective colors into the color array
            buttonColor.push("lightblue");
            buttonColor.push("lightskyblue");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            // then setting the respective colors for the other buttons
            document.querySelector("div div #collapse-nav #games").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #games").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #members").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #members").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #review").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #review").style.borderColor = "darkgreen";
        }
        else if (buttonClicked.getAttribute("id") == "games"){
            // then pushing the respective colors into the color array
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("lightblue");
            buttonColor.push("lightskyblue");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            // then setting the respective colors for the other buttons
            document.querySelector("div div #collapse-nav #aboutUs").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #aboutUs").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #members").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #members").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #review").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #review").style.borderColor = "darkgreen";
        }
        else if (buttonClicked.getAttribute("id") == "members"){
            // then pushing the respective colors into the color array
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("lightblue");
            buttonColor.push("lightskyblue");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            // then setting the respective colors for the other buttons
            document.querySelector("div div #collapse-nav #games").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #games").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #aboutUs").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #aboutUs").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #review").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #review").style.borderColor = "darkgreen";
        }
        else{
            // then pushing the respective colors into the color array
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("#55DD33");
            buttonColor.push("darkgreen");
            buttonColor.push("lightblue");
            buttonColor.push("lightskyblue");
            // then setting the respective colors for the other buttons
            document.querySelector("div div #collapse-nav #games").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #games").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #aboutUs").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #aboutUs").style.borderColor = "darkgreen";
            document.querySelector("div div #collapse-nav #members").style.backgroundColor = "#55DD33";
            document.querySelector("div div #collapse-nav #members").style.borderColor = "darkgreen";
        }
    }

    // check if mobile version collapse navbar icon was pressed
    if (collapseNavClicked != null && document.querySelector("div div #collapse-nav .nav-button") == null){
        /* if was pressed then create different elements required
        for the navigation bar and appending them to appropriate locations*/
        newDiv = document.createElement("button");
        newDiv.textContent = "About Us";
        newDiv.setAttribute("id", "aboutUs");
        newDiv.setAttribute("class", "nav-button");
        newDiv.setAttribute("onclick", "choice(this)");
        newDiv.style.backgroundColor = buttonColor[0];
        newDiv.style.borderColor = buttonColor[1];
        document.querySelector("div div #collapse-nav").append(newDiv);
        newDiv = document.createElement("button");
        newDiv.textContent = "Games";
        newDiv.setAttribute("id", "games");
        newDiv.setAttribute("class", "nav-button");
        newDiv.setAttribute("onclick", "choice(this)");
        newDiv.style.backgroundColor = buttonColor[2];
        newDiv.style.borderColor = buttonColor[3];
        document.querySelector("div div #collapse-nav").append(newDiv);
        newDiv = document.createElement("button");
        newDiv.textContent = "Members";
        newDiv.setAttribute("id", "members");
        newDiv.setAttribute("class", "nav-button");
        newDiv.setAttribute("onclick", "choice(this)");
        newDiv.style.backgroundColor = buttonColor[4];
        newDiv.style.borderColor = buttonColor[5];
        document.querySelector("div div #collapse-nav").append(newDiv);
        newDiv = document.createElement("button");
        newDiv.textContent = "Review";
        newDiv.setAttribute("id", "review");
        newDiv.setAttribute("class", "nav-button");
        newDiv.setAttribute("onclick", "choice(this)");
        newDiv.style.backgroundColor = buttonColor[6];
        newDiv.style.borderColor = buttonColor[7];
        document.querySelector("div div #collapse-nav").append(newDiv);
    }
    else if (collapseNavClicked == null && document.querySelector("div div #collapse-nav .nav-button") != null){
        // check if the mobile version navigation bar is open
        if (document.querySelector("div div #collapse-nav .nav-button") != null){
            // if it is then close it
            var buttons = document.querySelectorAll("div div #collapse-nav .nav-button");
            for (let i = 0; i < buttons.length; i++){
                buttons.item(i).remove();
            }
            newDiv = null;
        }
    }

    // check if there is already content being shown in the website
    if (newDiv != null){
        // check if it is mobile version
        if (collapseNavClicked != null && document.querySelector("div div #collapse-nav").style.display != "none" && buttonClicked != null){
            // check for the button that is pressed
            if (buttonClicked.getAttribute("id") == "aboutUs"){
                // check if the welcome page is still there
                if (document.querySelector("div #content") != null && document.querySelector("div footer") != null){
                    // if it is still there then remove it
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                }
                else{
                    // otherwise remove the content that was being shown
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                }
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = aboutUs1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (buttonClicked.getAttribute("id") == "games"){
                // check if the welcome page is still there
                if (document.querySelector("div #content") != null && document.querySelector("div footer") != null){
                    // if it is still there then remove it
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                }
                else{
                    // otherwise remove the content that was being shown
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                }
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (buttonClicked.getAttribute("id") == "members"){
                // check if the welcome page is still there
                if (document.querySelector("div #content") != null && document.querySelector("div footer") != null){
                    // if it is still there then remove it
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                }
                else{
                    // otherwise remove the content that was being shown
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                }
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (buttonClicked.getAttribute("id") == "review"){
                // check if the welcome page is still there
                if (document.querySelector("div #content") != null && document.querySelector("div footer") != null){
                    // if it is still there then remove it
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                }
                else{
                    // otherwise remove the content that was being shown
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                }
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = review;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
            }
        }
        else{
            if (buttonClicked != null){
                // otherwise checking which button was pressed
                if (buttonClicked.getAttribute("id") == "aboutUs"){
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (buttonClicked.getAttribute("id") == "games"){
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = games1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (buttonClicked.getAttribute("id") == "members") {
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = members1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (buttonClicked.getAttribute("id") == "review"){
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = review;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                }
            }
            else{
                // checking if previous content exists
                if (document.querySelector("div article") != null){
                    // if previous content exists then check which button was pressed
                    if (buttonClicked.getAttribute("id") == "aboutUs"){
                        // remove the previous content
                        document.querySelector("div article").remove();
                        document.querySelector("div footer").remove();
                        /* creating different elements required for the content page
                        and appending them to appropriate locations*/
                        newDiv = document.createElement("article");
                        newDiv.innerHTML = aboutUs1;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("footer");
                        newDiv.innerHTML = footer;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("button");
                        newDiv.textContent = "Next";
                        newDiv.setAttribute("onclick", "traverse(this)");
                        newDiv.setAttribute("id", "next");
                        newDiv.style.alignSelf = "flex-end";
                        document.querySelector("div article").append(newDiv);
                    }
                    else if (buttonClicked.getAttribute("id") == "games"){
                        // remove the previous content
                        document.querySelector("div article").remove();
                        document.querySelector("div footer").remove();
                        /* creating different elements required for the content page
                        and appending them to appropriate locations*/
                        newDiv = document.createElement("article");
                        newDiv.innerHTML = games1;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("footer");
                        newDiv.innerHTML = footer;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("button");
                        newDiv.textContent = "Next";
                        newDiv.setAttribute("onclick", "traverse(this)");
                        newDiv.setAttribute("id", "next");
                        newDiv.style.alignSelf = "flex-end";
                        document.querySelector("div article").append(newDiv);
                    }
                    else if (buttonClicked.getAttribute("id") == "members") {
                        // remove the previous content
                        document.querySelector("div article").remove();
                        document.querySelector("div footer").remove();
                        /* creating different elements required for the content page
                        and appending them to appropriate locations*/
                        newDiv = document.createElement("article");
                        newDiv.innerHTML = members1;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("footer");
                        newDiv.innerHTML = footer;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("button");
                        newDiv.textContent = "Next";
                        newDiv.setAttribute("onclick", "traverse(this)");
                        newDiv.setAttribute("id", "next");
                        newDiv.style.alignSelf = "flex-end";
                        document.querySelector("div article").append(newDiv);
                    }
                    else if (buttonClicked.getAttribute("id") == "review"){
                        // remove the previous content
                        document.querySelector("div article").remove();
                        document.querySelector("div footer").remove();
                        /* creating different elements required for the content page
                        and appending them to appropriate locations*/
                        newDiv = document.createElement("article");
                        newDiv.innerHTML = review;
                        document.querySelector("div").append(newDiv);
                        newDiv = document.createElement("footer");
                        newDiv.innerHTML = footer;
                        document.querySelector("div").append(newDiv);
                    }
                }
            }
        }
    }
    else{
        // otherwise check if previous content exists
        if (document.querySelector("div article") != null){
            // check which button was pressed
            if (buttonClicked.getAttribute("id") == "aboutUs"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = aboutUs1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (buttonClicked.getAttribute("id") == "games"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (buttonClicked.getAttribute("id") == "members") {
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (buttonClicked.getAttribute("id") == "review"){
                // remove the previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = review;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
            }
        }
        else{
            // otherwise check which button was pressed
            if (buttonClicked != null){
                if (buttonClicked.getAttribute("id") == "aboutUs"){
                    // remove welcome page
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (buttonClicked.getAttribute("id") == "games"){
                    // remove welcome page
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = games1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (buttonClicked.getAttribute("id") == "members") {
                    // remove welcome page
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = members1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (buttonClicked.getAttribute("id") == "review"){
                    // remove welcome page
                    document.querySelector("div #content").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = review;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                }
            }
        }
    }
}

// Function for navigation between pages for each section
function traverse(y){
    // check which section the user is currently in
    if (buttonClicked.getAttribute("id") == "aboutUs"){
        // check which navigation button was pressed
        if (y.getAttribute("id") == "prev"){
            // check if it is not the first page
            if (document.querySelector("div article img") != null){
                // if it is not the first page then check which page the user is at
                if (document.querySelector("div article img").getAttribute("id") == "1"){
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs1;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    newDiv.style.alignSelf = "flex-end";
                    document.querySelector("div article").append(newDiv);
                }
                else if (document.querySelector("div article img").getAttribute("id") == "2"){
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs2;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("div");
                    document.querySelector("div article").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Prev";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "prev");
                    document.querySelector("div article div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    document.querySelector("div article div").append(newDiv);
                }
                else{
                    // remove the previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs3;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("div");
                    document.querySelector("div article").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Prev";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "prev");
                    document.querySelector("div article div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    document.querySelector("div article div").append(newDiv);
                }
            }
        }
        else{
            // otherwise check if it is not the first page
            if (document.querySelector("div article img") != null){
                // if it is not the first page then check which page the user is at
                if (document.querySelector("div article img").getAttribute("id") == "1"){
                    // remove previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs3;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("div");
                    document.querySelector("div article").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Prev";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "prev");
                    document.querySelector("div article div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Next";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "next");
                    document.querySelector("div article div").append(newDiv);
                }
                else if (document.querySelector("div article img").getAttribute("id") == "2"){
                    // remove previous content
                    document.querySelector("div article").remove();
                    document.querySelector("div footer").remove();
                    /* creating different elements required for the content page
                    and appending them to appropriate locations*/
                    newDiv = document.createElement("article");
                    newDiv.innerHTML = aboutUs4;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("footer");
                    newDiv.innerHTML = footer;
                    document.querySelector("div").append(newDiv);
                    newDiv = document.createElement("button");
                    newDiv.textContent = "Prev";
                    newDiv.setAttribute("onclick", "traverse(this)");
                    newDiv.setAttribute("id", "prev");
                    newDiv.style.alignSelf = "flex-start";
                    document.querySelector("div article").append(newDiv);
                }
            }
            else{
                // otherwise remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = aboutUs2;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
        }
    }
    else if (buttonClicked.getAttribute("id") == "games"){
        // check which navigation button was pressed
        if (y.getAttribute("id") == "prev"){
            // check which page the user is at
            if (document.querySelector("div article img").getAttribute("id") == "2"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.justifySelf = "flex-end";
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "3"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games2;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "4"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games3;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "5"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games4;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "6"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games5;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
        }
        else{
            // otherwise check which page the user is at
            if (document.querySelector("div article img").getAttribute("id") == "1"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games2;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "2"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games3;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "3"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games4;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "4"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games5;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "5"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = games6;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                newDiv.style.alignSelf = "flex-start";
                document.querySelector("div article").append(newDiv);
            }
        }
    }
    else{
        // otherwise check which navigation button was pressed
        if (y.getAttribute("id") == "prev"){
            // check which page the user is at
            if (document.querySelector("div article img").getAttribute("id") == "2"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members1;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                newDiv.style.alignSelf = "flex-end";
                document.querySelector("div article").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "3"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members2;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "4"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members3;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "5"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members4;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "6"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members5;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
        }
        else{
            // otherwise check which page the user is at
            if (document.querySelector("div article img").getAttribute("id") == "1"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members2;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "2"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members3;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "3"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members4;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "4"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members5;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("div");
                document.querySelector("div article").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                document.querySelector("div article div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Next";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "next");
                document.querySelector("div article div").append(newDiv);
            }
            else if (document.querySelector("div article img").getAttribute("id") == "5"){
                // remove previous content
                document.querySelector("div article").remove();
                document.querySelector("div footer").remove();
                /* creating different elements required for the content page
                and appending them to appropriate locations*/
                newDiv = document.createElement("article");
                newDiv.innerHTML = members6;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("footer");
                newDiv.innerHTML = footer;
                document.querySelector("div").append(newDiv);
                newDiv = document.createElement("button");
                newDiv.textContent = "Prev";
                newDiv.setAttribute("onclick", "traverse(this)");
                newDiv.setAttribute("id", "prev");
                newDiv.style.alignSelf = "flex-start";
                document.querySelector("div article").append(newDiv);
            }
        }
    }
}