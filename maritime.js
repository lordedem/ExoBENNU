var maritime = ['Lome','Tsevie','Vogan','Aneho','Tabligbo']
// console.log(maritime)
    for (let i = 0 , j=  maritime.length ;i<j; i++) {
        let city1 = maritime[Math.floor(Math.random()* maritime.length)]
        console.log(maritime)
        maritime = maritime.filter(item => item !== city1);
        console.log("PlayoffCity1: " +city1);
    }
