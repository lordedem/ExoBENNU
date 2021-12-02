const listCity = [
    ['Lome','Tsevie','Vogan','Aneho','Tabligbo'],
    ['Atakpame','Notse','Kpalime','Badou','Amlame'],
    ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga'],
    ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale'],
    ['Dapaong','Mango','Galangachi','Biankouri','Vavou']
                ]

function choixVille(listCity){
  // for (let i = 0; i < listCity.length; i++)
  const Region1 = listCity[Math.floor(Math.random()* listCity.length)]
  // console.log(Region1)
  const Region2 = listCity[Math.floor(Math.random()* listCity.length)]
  // console.log(Region2)
    if (Region1 === Region2){
      Region1 = listCity[Math.floor(Math.random()* listCity.length)]
      Region2 = listCity[Math.floor(Math.random()* listCity.length)]
    }
    else if (Region1==[]){
      listCity.remove(Region1);
      Region1 = listCity[Math.floor(Math.random()* listCity.length)]
    }
    else if (Region2==[]){
      listCity.remove(Region2);
      Region2 = listCity[Math.floor(Math.random()* listCity.length)]
    }

    else {
    const playoffCity1 = listCity[Math.floor(Math.random()* Region1.length)]
    console.log("Generating Playoff City 1:", playoffCity1)
    Region1.remove(playoffCity1)
    const playoffCity2 = listCity[Math.floor(Math.random()* Region2.length)]
    console.log("Generating Playoff City 2:", playoffCity2)
    Region2.remove(playoffCity2)
    // console.log("All cities have been selected")
    }
}

function selection(Region){
    const listCity1 = ['Lome','Tsevie','Vogan','Aneho','Tabligbo']
    const listCity2 = ['Atakpame','Notse','Kpalime','Badou','Amlame']
    const listCity3 = ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga']
    const listCity4 = ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale']
    const listCity5 = ['Dapaong','Mango','Galangachi','Biankouri','Vavou']

    if (Region == 'Maritime'){
        let playoffCity = listCity1[Math.floor(Math.random()* listCity1.length)]
        console.log(playoffCity)
    }
    else if (Region == 'Plateaux'){
        let playoffCity = listCity2[Math.floor(Math.random()* listCity2.length)]
        console.log(playoffCity)
    }
    else if (Region == 'Centrale'){
        let playoffCity = listCity3[Math.floor(Math.random()* listCity3.length)]
        console.log(playoffCity)
    }
    else if (Region == 'Kara'){
        let playoffCity = listCity4[Math.floor(Math.random()* listCity4.length)]
        console.log(playoffCity)
    }
    else if (Region == 'Savanes'){
        let playoffCity = listCity5[Math.floor(Math.random()* listCity5.length)]
        console.log(playoffCity)
    }
    else {
        console.log("Please enter a valid region")
    }

}

function semi_final(Region1,Region2){
return (selection(Region1),selection(Region2));
}  
function final(Region){
return (selection(Region));
}


const menu=true;
while (menu){
    console.log('!!!WELCOME TO THE TOURNAMENT!!! \n  1. Enter game type \n  2. Exit \n')
    menu=input ("WELCOME! Please choose: ")
    if (menu== "1"){
            gameType = input("Enter Game type:")
            while (gameType !="Kpessekou" && gameType !="Zobibi"){
                console.log("Invalid input")
                gameType = input("Enter Game type:")
            }
            if (gameType=="Kpessekou"){
                choixVille(listCity)
            }
            else if (gameType== "Zobibi"){

                console.log("1.Semi-Final  \n  2.Final")
                const menu2=input("Please choose: ")
            
                if (menu2=="1"){
                  Region1 = input('Enter Region 1:' );
                  Region2 = input('Enter Region 2:' )
                    }
                  while (Region2 == Region1){
                     Region2 = input("Enter a Different Region: ")
                    }
                  if (Region2 != Region1){
                    semi_final(Region1,Region2)
                }
                if (menu2=="2"){
                  console.log("Enter Region : ");
                  Region = input();
                  final(Region)
                }  
            }
        }

    else if (menu=="2"){
            console.log("Goodbye");
            break  
        }    

    else{
            console.log("Not Valid Choice Try again")
        }
}