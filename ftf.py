from random import *

listCity = [['Lome','Tsevie','Vogan','Aneho','Tabligbo'],
            ['Atakpame','Notse','Kpalime','Badou','Amlame'],
            ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga'],
            ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale'],
            ['Dapaong','Mango','Galangachi','Biankouri','Vavou']]

def choixVille(listCity):
  #for i in range (0,12):
    Region1=choice(listCity)
    Region2=choice(listCity)
    while Region1 ==Region2:
      Region1=choice(listCity)
      Region2=choice(listCity)

    while Region1==[]:
      listCity.remove(Region1)
      Region1=choice(listCity)

    while Region2==[]:
      listCity.remove(Region2)
      Region2=choice(listCity)

    else:
      playoffCity1 = choice(Region1)
      print ("Generating Playoff City 1:", playoffCity1)
      Region1.remove(playoffCity1)
      playoffCity2 = choice(Region2)
      print ("Generating Playoff City 2:", playoffCity2)
      Region2.remove(playoffCity2)
  # return  print("All cities have been selected")

def selection(Region):
  listCity1 = ['Lome','Tsevie','Vogan','Aneho','Tabligbo']
  listCity2 = ['Atakpame','Notse','Kpalime','Badou','Amlame']
  listCity3 = ['Sokode','Tchamba','Sotouboua','Blitta','Djarkpanga']
  listCity4 = ['Bafilo','Bassar','Kara', 'Kpagouda','Niamtougou','Defale']
  listCity5 = ['Dapaong','Mango','Galangachi','Biankouri','Vavou']

  if Region == 'Maritime':
    playoffCity = choice(listCity1)
    print (playoffCity)
  elif Region == 'Plateaux':
    playoffCity = choice(listCity2)
    print (playoffCity)
  elif Region == 'Centrale':
    playoffCity = choice(listCity3)
    print (playoffCity)
  elif Region == 'Kara':
    playoffCity = choice(listCity4)
    print (playoffCity)
  elif Region == 'Savanes':
    playoffCity = choice(listCity5)
    print (playoffCity)
  else :
    print ("Please enter a valid region") 

def semi_final(Region1,Region2):
  return (selection(Region1),selection(Region2))
  
def final(Region):
  return selection(Region)


menu=True
while menu:
    print ("""
        !!!WELCOME TO THE TOURNAMENT!!!
              1. Enter game type
              2. Exit
          """)
    menu=input ("WELCOME! Please choose: ")
    if menu== "1":
            gameType = input("Enter Game type:")
            while (gameType !="Kpessekou" and gameType !="Zobibi") :
              print ("Invalid input")
              gameType = input("Enter Game type:")
            if gameType=="Kpessekou":
                choixVille(listCity)
            elif gameType== "Zobibi":
                print ("""1.Semi-Final    2.Final""")
                menu2=input("Please choose: ")
                if menu2=="1":
                  Region1 = input('Enter Region 1:' )
                  Region2 = input('Enter Region 2:' )
                  while Region2 == Region1:
                     Region2 = input("Enter a Different Region: ")
                  if Region2 != Region1:
                    semi_final(Region1,Region2)
                if menu2=="2":
                  print ("Enter Region : ")
                  Region = input()
                  final(Region)

    elif menu=="2":
            print("Goodbye")
            break   

    else:
            print("Not Valid Choice Try again")