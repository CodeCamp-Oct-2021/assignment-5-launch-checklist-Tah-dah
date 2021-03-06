require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
   missiontarget = document.getElementById("missionTarget");
   missiontarget.innerHTML = `
    <h2>MissionDestination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>
   `
}


function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let launchStatus = document.getElementById("launchStatus");



    if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility= "visible";
        launchStatus.style.color = "rgb(255, 0, 0)"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";       
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     
    } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(255, 0, 0)"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";

    
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(255, 0, 0)"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        
    
    } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(0, 255, 0)"; 
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } 
}


async function myFetch() {
    // let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    // const planetIndex = await planetsReturned.json();
    // //console.log(planetIndex);
    // return planetIndex;
    let planetsReturned;

        planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            });
    
        return planetsReturned;
}


function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    let thisPlanet = planets[randomPlanet];
    return thisPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;