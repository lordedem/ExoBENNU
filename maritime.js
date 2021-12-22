var maritime = ['Lome','Tsevie','Vogan','Aneho','Tabligbo']
// console.log(maritime)
    for (let i = 0 , j=  maritime.length ;i<j; i++) {
        let city1 = maritime[Math.floor(Math.random()* maritime.length)]
        console.log(maritime)
        maritime = maritime.filter(item => item !== city1);
        console.log("PlayoffCity1: " +city1);
    }
// var maritime = ['Lome','Tsevie','Vogan','Aneho','Tabligbo']
// // console.log(maritime)
// for (let i = 0; i < maritime.length; i++){ <<le probleme est du au fait qu'a la 3e execution la taille de i devient superieure a celle de l'array>>
    
// // for (let i = 0 , j=  maritime.length ;i<j; i++) {
//     console.log([i, maritime.length]);
//     // console.log(maritime);
//         let city1 = maritime[Math.floor(Math.random() * maritime.length)]
        
//         maritime = maritime.filter(item => item !== city1);
//         console.log("PlayoffCity1: " +city1);
//         console.log(maritime);

//     }
    
var  maritime = ['Lome','Tsevie','Vogan','Aneho','Tabligbo'];

// for (let city of maritime) {
//     console.log(maritime);
//     city = maritime[Math.floor(Math.random() * maritime.length)]
//     maritime = maritime.filter(item => item !== city);
//     console.log(city);
    
// }

for (let city in maritime) {
    console.log(maritime);
    city = maritime[Math.floor(Math.random() * maritime.length)]
    maritime = maritime.filter(item => item !== city);
    console.log(city);
    
}
console.log(maritime);
