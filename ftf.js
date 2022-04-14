const prompt = require('prompt-sync')();
var country = {
    "Maritime": ['Lome', 'Tsevie', 'Vogan', 'Aneho', 'Tabligbo'],
    "Plateaux": ['Atakpame', 'Notse', 'Kpalime', 'Badou', 'Amlame'],
    "Centrale": ['Sokode', 'Tchamba', 'Sotouboua', 'Blitta', 'Djarkpanga'],
    "Kara": ['Bafilo', 'Bassar', 'Kara', 'Kpagouda', 'Niamtougou'],
    "Savanes": ['Dapaong', 'Mango', 'Galangachi', 'Biankouri', 'Vavou']
}
var region, region1, region2, city, city1, city2, gametype;

function kpessekou() {
    region1 = Object.keys(country)[Math.floor(Math.random() * Object.keys(country).length)];
    region2 = Object.keys(country)[Math.floor(Math.random() * Object.keys(country).length)]

    city1 = Object.values(country[region1])[Math.floor(Math.random() * Object.values(country[region1]).length)];
    city2 = Object.values(country[region2])[Math.floor(Math.random() * Object.values(country[region2]).length)];
    console.log("PlayoffCity1: " +city1);
    console.log("PlayoffCity2: " +city2);
}

function zobibi(region) {
    switch (region) {
        case 'Maritime':
            city = Object.values(country["Maritime"])[Math.floor(Math.random() * Object.values(country["Maritime"]).length)];
            console.log(city);
            break;
        case 'Plateaux':
            city = Object.values(country["Plateaux"])[Math.floor(Math.random() * Object.values(country["Plateaux"]).length)];
            console.log(city);
            break;
        case 'Centrale':
            city = Object.values(country["Centrale"])[Math.floor(Math.random() * Object.values(country["Centrale"]).length)];
            console.log(city);
            break;
        case 'Kara':
            city = Object.values(country["Kara"])[Math.floor(Math.random() * Object.values(country["Kara"]).length)];
            console.log(city);
            break;
        case 'Savanes':
            city = Object.values(country["Savanes"])[Math.floor(Math.random() * Object.values(country["Savanes"]).length)];
            console.log(city);
            break;

        default:
            do {
                region = prompt('Please enter Region : ');
            }
            while (!Object.keys(country).includes(region));
            break;
    }
}

function semiFinal(region1, region2) {
    return (zobibi(region1), zobibi(region2))
}

function final(region) {
    return (zobibi(region))
}

let menu = true;
while (menu) {
    console.log('\n !!!WELCOME TO THE TOURNAMENT!!! \n      1. Enter game type \n      2. Exit \n');
    menu = prompt("WELCOME! Please choose: ");
    if (menu === "1") {
        gametype = prompt("Enter game type: ");
        while (gametype !== "Kpessekou" && gametype !== "Zobibi") {
            console.log("Invalid input ");
            gametype = prompt("Enter game type: ");
        }
        if (gametype === "Kpessekou") {
            kpessekou()
        }
        else if (gametype === "Zobibi") {
            console.log("1. Semi-Final \n2. Final \n");
            menu = prompt("Please choose: ");
            if (menu === "1") {
                region1 = prompt("Enter Region 1:" );
                while(!Object.keys(country).includes(region1)){
                    region1 = prompt("Enter Correct Region 1:" );
                }
                region2 = prompt("Enter Region 2:" );
                while(!Object.keys(country).includes(region2)){
                    region2 = prompt("Enter Correct Region 2:" );
                }
                if (region2 === region1) {
                    region2 = prompt("Enter a Different Region: ")
                }
                else {
                    semiFinal(region1, region2);
                }
            }
            if (menu === "2") {
                region = prompt("Enter Final Region :");
                while(!Object.keys(country).includes(region)){
                    region = prompt("Enter Final Region :");
                }
                final(region)
            }
        }
    }
    else if (menu === "2") {
        console.log("Goodbye!!!");
        break;
    }
    else {
    }
}
