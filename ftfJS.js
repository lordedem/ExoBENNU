let cities= {
  "Maritime":['Lome', 'Tsevie','Vogan','Aneho','Tabligbo'],
  "Plateaux":['Atakpame','Notse','Kpalime','Badou','Amlame'],
  "Centrale":['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga'],
  "Kara":['Bafilo','Bassar','Kara','Niamtougou','Defale'],
  "Savanes":['Dapaong','Mango','Galangachi','Biankouri','Vavou']
  }
let playoffCity1;
let playoffCity2;
let playoffCity;
let playoffRegion1;
let playoffRegion2;

for (let i = 0; i <= cities.length; i++){
    playoffRegion1 = cities[Math.floor(Math.random() * cities.length)]
    playoffCity = playoffRegion1[Math.floor(Math.random() * playoffRegion1.length)]
    playoffRegion2 = cities[Math.floor(Math.random() * cities.length)]
    playoffCity = playoffRegion2[Math.floor(Math.random() * playoffRegion2.length)]
    console.log("Generating Playoff City 1:", playoffCity1)
    console.log("Generating Playoff City 2:", playoffCity2)

    
      
    }
    
}











// console.log("All cities have been selected")

// const prompt = require('prompt-sync')();
 
// const smthg = prompt('str');
// console.log(`Hey there ${smthg}`); comment ajouter un input en JS


