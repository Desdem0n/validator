"use strict";

let database = [
    {
        username: "Michael",
        password: "Sylwia"
    },
    {
        username: "Jeff",
        password: "hustle"
    },
    {
        username: "Jenny",
        password: "lobster"
    },
    {
        username: "Bruno",
        password: "bark"
    },
];

let newsfeed = [
    {
        username: "Sylwia",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Bobby",
        timeline: "Javascript is soooo cool!"
    },
    {
        username: "Wojtek",
        timeline: "Carving works as a charm!"
    }
];

function isUserValid(username, password) {
    for (let i=0; i < database.length; i++) {
        if (database[i].username === username && database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
        if (isUserValid(username, password)) {
            console.log(newsfeed);
            
        } else {
            alert("Sorry, wrong username and password!");
        }
    }
    let userNamePrompt = prompt("What's your username?");
    let passwordPrompt = prompt("What's your password?");

    signIn(userNamePrompt, passwordPrompt);
