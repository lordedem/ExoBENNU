
// const prompt = require('prompt-sync')();
 
// const smthg = prompt('str');
// console.log(`Hey there ${smthg}`); comment ajouter un input en JS



let listM = ['Lome','Tsevie','Vogan','Aneho','Tabligbo']
let listP = ['Atakpame','Notse','Kpalime','Badou','Amlame']
let listC = ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga']
let listK = ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale']
let listS = ['Dapaong','Mango','Galangachi','Biankouri','Vavou']
let cities = listM.concat(listP,listK,listS,listC);
let playoffCity1;
let playoffCity2;
let playoffCity;

for (let i = 0; i <= cities.length; i++){
    // playoffCity1 = cities[Math.floor(Math.random() * cities.length)]
    // playoffCity2 = cities[Math.floor(Math.random() * cities.length)]
    

    if (playoffCity1 === playoffCity2){
        playoffCity1 = cities[Math.floor(Math.random() * cities.length)]
        playoffCity2 = cities[Math.floor(Math.random() * cities.length)]
    }
    else if (playoffCity1 == []){
        playoffCity1 = cities[Math.floor(Math.random()* cities.length)]
    }
    else if (playoffCity2 == []){
        playoffCity2 = cities[Math.floor(Math.random()* cities.length)]
    }
    else {
      playoffCity1 = cities[Math.floor(Math.random()* cities.length)]
      console.log("Generating Playoff City 1:", playoffCity1)  
      cities = cities.filter(function(item){
        return item !== playoffCity1
      })

      playoffCity2 = cities[Math.floor(Math.random()* cities.length)]
      console.log("Generating Playoff City 2:", playoffCity2)
      cities = cities.filter(function(item){
        return item !== playoffCity2
      })
      
    }
    // console.log("Generating Playoff City 1:", playoffCity1)
    // console.log("Generating Playoff City 2:", playoffCity2)
}
// console.log("All cities have been selected")
