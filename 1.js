let cities = [
    ['Lome','Tsevie','Vogan','Aneho','Tabligbo'],
    ['Atakpame','Notse','Kpalime','Badou','Amlame'],
    ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga'],
    ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale'],
    ['Dapaong','Mango','Galangachi','Biankouri','Vavou']
                ]
// console.log(cities.length)

function regionChoice() {
    // for (var i = 0, j = cities.length; i<j; i++) {
        region1 = cities[Math.floor(Math.random() * cities.length)]
        cities = cities.filter(item => item !== region1);
        region2 = cities[Math.floor(Math.random() * cities.length)]
        console.log(region1);
        console.log(region2)
    }
// console.log(cities)
    // }
regionChoice();

function cityChoice() {
    for (var i = 0, j = region1.length; i<j; i++){
        city1 = region1[Math.floor(Math.random() * region1.length)]
        region1 = region1.filter(item => item !== city1);
        // console.log(city1);
    }
    for (var i = 0, j = region2.length; i<j; i++){
        city2 = region2[Math.floor(Math.random() * region2.length)]
        // console.log(city2)
    }
    console.log(city1);
    console.log(city2)
}
cityChoice();