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


// var listCity = [
//     ['Lome','Tsevie','Vogan','Aneho','Tabligbo'],
//     ['Atakpame','Notse','Kpalime','Badou','Amlame'],
//     ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga'],
//     ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale'],
//     ['Dapaong','Mango','Galangachi','Biankouri','Vavou']
//                 ]
//                 for (let i = 0; i < listCity.length; i++){
//                 console.log(listCity.length)
//                 let Region1 = listCity[Math.floor(Math.random()* listCity.length)]
//                     for (let i = 0; i < Region1.length; i++){
//                         let city1 = Region1[Math.floor(Math.random()* Region1.length)]
//                         console.log("PlayoffCity1: " +city1);
//                         listCity = listCity.filter(item => item !== Region1);
//                         Region1 = Region1.filter(item => item !== city1);
//                     }

//                 console.log(Region1);
//                 // console.log(listCity);
//                 // console.log(listCity.length);

//                 let Region2 = listCity[Math.floor(Math.random()* listCity.length)]
//                     for (let i = 0; i < Region2.length; i++){  
//                         let city2 = Region2[Math.floor(Math.random()* Region2.length)]
//                         console.log("PlayoffCity2: " +city2);
//                         listCity = listCity.filter(item => item !== Region2);
//                         Region2 = Region2.filter(item => item !== city2);
//                     }
//                 console.log(Region2);
//                 // console.log(listCity);
//             }
//                 console.log(listCity.length);









// console.log("All cities have been selected")

// const prompt = require('prompt-sync')();
 
// const smthg = prompt('str');
// console.log(`Hey there ${smthg}`); comment ajouter un input en JS


