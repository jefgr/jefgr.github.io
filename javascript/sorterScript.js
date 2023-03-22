window.addEventListener("load", init);

let players = [];

let availablePlayers = [];

let team1 = [];
let team2 = [];

let teamA = [];
let teamB = [];

let score1 = 0;
let score2 = 0;
let scoreA = 0;
let scoreB = 0;


function init(){
    for (let i = 0; i < playerData.length; i++) {
        players[i] = new player(playerData[i][0], playerData[i][1], playerData[i][2]);
    }
    players.sort();
    players.forEach(generateButton);
}

class player {
    constructor(name, position, rating) {
        this.name = name;
        this.position = position;
        this.rating = rating;
    }
    toString(){
        return this.name + " " + this.position + " " + this.rating + "\n";
    }
}

function generateButton(player){
    let label = document.createElement("p");
    let textName = document.createTextNode(player.name + " " + player.position + " " + player.rating);
    let tickbox = document.createElement("INPUT");
    tickbox.setAttribute("type", "checkbox");
    tickbox.setAttribute("value", player.name);
    label.appendChild(textName);
    document.getElementById("Form").appendChild(label);
    document.getElementById("Form").appendChild(tickbox);
}

function printCheckedValues() {
    availablePlayers = [];
    team1 = [];
    team2 = [];
    teamA = [];
    teamB = [];
    // Get all the checkboxes on the page
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Create an array to hold the values of the checked checkboxes
    const checkedValues = [];
    // Loop through each checkbox
    checkboxes.forEach((checkbox) => {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            // If it is, add its value to the array
            checkedValues.push(checkbox.value);
        }
    });
    // Print the values of the checked checkboxes
    //console.log(checkedValues);
    // Find and assemble
    for (let i = 0; i < checkedValues.length; i++) {
        availablePlayers[i] = players.find(player => player.name === checkedValues[i]);
    }
    runSorter();

}

function logTeam(team){
    for (let i = 0; i<team.length; i++) {
        console.log(team[i].name);
    }
}

function runSorter() {
    console.log("runSorter");
    availablePlayers.sort(() => Math.random() - 0.5)
    if (availablePlayers.length < 8) {
        availablePlayers.sort((p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
    } else {
        availablePlayers.sort(function (p1, p2) {
            const pos1 = p1.position.toUpperCase(); // ignore upper and lowercase
            const pos2 = p2.position.toUpperCase(); // ignore upper and lowercase
            if (pos1 < pos2) {
                return -1;
            }
            if (pos1 > pos2) {
                return 1;
            }
            // positions must be equal, so sorted on rating
            return (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0
        })
    }
    logTeam(availablePlayers);
    divideTeams();
}
//OK

function divideTeams() {
    //Divide Teams
    console.log("divideTeams")

    for (let i = 0; i < availablePlayers.length; i++) {
        if (i % 2 === 0) {
            teamA.push(availablePlayers[i]);
            scoreA += availablePlayers[i].rating;
        } else {
            teamB.push(availablePlayers[i]);
            scoreB += availablePlayers[i].rating;

        }

    }
    let j = 0;
    for (let i = 0; i < availablePlayers.length; i++) {
        if (j % 2 === 0) {
            team1.push(availablePlayers[i]);
            score1 += availablePlayers[i].rating;
            if (team1.length % 2 !== 0) {
                j++;
            }
        } else {
            team2.push(availablePlayers[i]);
            score2 += availablePlayers[i].rating;
            if (team2.length % 2 === 0) {
                j++;
            }
        }
    }
    publishTeams();
}


function publishTeams(){
    document.getElementById("teamOne").innerHTML = "";
    document.getElementById("teamTwo").innerHTML = "";

    //Publish Team One
    console.log("publishTeamOne")
    for (let i = 0; i < team1.length; i++) {
        document.getElementById("teamOne").innerHTML += team1[i].toString() + "<br>";
    }
    //Publish Team Two
    console.log("publishTeamTwo")
    for (let i = 0; i < team2.length; i++) {
       document.getElementById("teamTwo").innerHTML += team2[i].toString() + "<br>";
    }
    console.log("reached end");
}



