
const prompt = require('prompt-sync')();
let cities = [
  ['Lome', 'Tsevie', 'Vogan', 'Aneho', 'Tabligbo'],
  ['Atakpame', 'Notse', 'Kpalime', 'Badou', 'Amlame'],
  ['Sokode', 'Tchamba', 'Sotouboua', 'Blitta', 'Djarkpanga'],
  ['Bafilo', 'Bassar', 'Kara', 'Kpagouda', 'Niamtougou', 'Defale'],
  ['Dapaong', 'Mango', 'Galangachi', 'Biankouri', 'Vavou']
              ]
let region1 = [];
let region2 = [];
let namesRegion = ["Maritime", "Kara", "Plateaux", "Centrale", "Savanes"];

function kpessekou() {
  function regionChoice() {
      for (var i =0; i< cities.length; i++){
      region1 = cities[Math.floor(Math.random() * cities.length)]
      cities = cities.filter(item => item !== region1);
      region2 = cities[Math.floor(Math.random() * cities.length)]
    }
  } 
  regionChoice();

  function cityChoice() {
      for (var i =0; i< region1.length; i++){
      city1 = region1[Math.floor(Math.random() * region1.length)]
      region1 = region1.filter(item => item !== city1);
    }
      for (var i =0; i< region2.length; i++){
      city2 = region2[Math.floor(Math.random() * region2.length)]
      region2 = region2.filter(item => item !== city2);
    }
    console.log("PlayoffCity 1 : " + city1);
    console.log("PlayoffCity 2 : " + city2)
  }
  cityChoice();
}

function semiFinal(region1, region2) {
  region1 = prompt('Please enter Region 1: ');
  switch (region1) {
    case 'Maritime':
      city1 = cities[0][Math.floor(Math.random() * cities[0].length)]
      break;
    case 'Plateaux':
      city1 = cities[1][Math.floor(Math.random() * cities[1].length)]
      break;
    case 'Centrale':
      city1 = cities[2][Math.floor(Math.random() * cities[2].length)]
      break;
    case 'Kara':
      city1 = cities[3][Math.floor(Math.random() * cities[3].length)]
      break;
    case 'Savanes':
      city1 = cities[4][Math.floor(Math.random() * cities[4].length)]
      break;

    default:
      do {
        region1 = prompt('Please enter Region 1: '); 
    }
    while(!namesRegion.includes(region1));
    break;
  }

  region2 = prompt('Please enter Region 2: ');
  switch (region2) {
    case 'Maritime':
      city2 = cities[0][Math.floor(Math.random() * cities[0].length)]
      break;
    case 'Plateaux':
      city2 = cities[1][Math.floor(Math.random() * cities[1].length)]
      break;
    case 'Centrale':
      city2 = cities[2][Math.floor(Math.random() * cities[2].length)]
      break;
    case 'Kara':
      city2 = cities[3][Math.floor(Math.random() * cities[3].length)]
      break;
    case 'Savanes':
      city2 = cities[4][Math.floor(Math.random() * cities[4].length)]
      break;

    default:
      do {
        region2 = prompt('Please enter Region 2: '); 
    }
    while(!namesRegion.includes(region2));
    break;
  }
  console.log(`semi-FinalCity 1: ${city1}`);
  console.log(`semi-FinalCity 2: ${city2}`);


}

function final(namesRegion) {
  region = prompt('Please enter FinalRegion: ');
  switch (region) {
    case 'Maritime':
      city = cities[0][Math.floor(Math.random() * cities[0].length)]
      console.log(`FinalCity: ${city}`);
      break;
    case 'Plateaux':
      city = cities[1][Math.floor(Math.random() * cities[1].length)]
      console.log(`FinalCity: ${city}`);
      break;
    case 'Centrale':
      city = cities[2][Math.floor(Math.random() * cities[2].length)]
      console.log(`FinalCity: ${city}`);
      break;
    case 'Kara':
      city = cities[3][Math.floor(Math.random() * cities[3].length)]
      console.log(`FinalCity: ${city}`);
      break;
    case 'Savanes':
      city = cities[4][Math.floor(Math.random() * cities[4].length)]
      console.log(`FinalCity: ${city}`);
      break;

    default:
      do{
          region = prompt('Please enter FinalRegion : ');
      }
      while (!namesRegion.includes(region));
      break;
    }
}

let menu = true;
while (menu) {
  console.log('\n !!!WELCOME TO THE TOURNAMENT!!! \n      1. Enter game type \n      2. Exit \n');
  menu = prompt("WELCOME! Please choose: ");
  if (menu == "1") {
    let gametype = prompt("Enter game type: ");
    while (gametype != "Kpessekou" && gametype != "Zobibi") {
      prompt("Invalid input \n ");
      gametype = prompt("Enter game type: ");
    }
    if (gametype == "Kpessekou") {
      kpessekou()
    }
    else if (gametype == "Zobibi") {
      console.log("1. Semi-Final \n2. Final \n");
      menu2 = prompt("Please choose: ");

      if (menu2 == "1") {
        semiFinal(region1, region2);
        if (region2 == region1) {
          region2 = prompt("Enter a Different Region: ")
        }
        else {

        }
      }
      if (menu2 == "2") {
        final(namesRegion)
      }
    }
  }
  else if (menu == "2") {
    console.log("Goodbye!!!");
    break;
  }

  else {
    console.log('\n !!!WELCOME TO THE TOURNAMENT!!! \n      1. Enter game type \n      2. Exit \n');
  }
}
