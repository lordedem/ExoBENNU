# -*- coding: utf-8 -*-
"""Exercise2.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1jttm1zrXZXP0yUzDQALFW2XkrG8qm_jh
"""

from random import *
listCity1 = ['Lome','Tsevie','Vogan']
listCity2 = ['Atakpame','Notse','Kpalime']
listCity3 = ['Sokode','Tchamba','Sotouboua']
listCity4 = ['Bafilo','Bassar','Kara']
listCity5 = ['Dapaong','Mango','Cinkasse']
print ('Enter Game type:' ) 
gameType = input()
print ('Enter Region 1:' )
Region1 = input()
print ('Enter Region 2:' )
Region2 = input()
# Region1 = Region1
# listRegion = ['Maritime','Plateaux','Centrale','Kara','Savanes']
if Region1 == 'Maritime':
  playoffCity = choice(listCity1)
  print ('Generating Playoff City 1:', playoffCity)
elif Region1 == 'Plateaux':
    playoffCity = choice(listCity2)
    print ('Generating Playoff City 1:', playoffCity)
elif Region1 == 'Centrale':
          playoffCity = choice(listCity3)
          print ('Generating Playoff City 1:', playoffCity)
elif Region1 == 'Kara':
          playoffCity = choice(listCity4)
          print ('Generating Playoff City 1:', playoffCity)
elif Region1 == 'Savanes':
          playoffCity = choice(listCity5)
          print ('Generating Playoff City 1:', playoffCity)
else :
            print ('Please enter a valid region')

if Region2 == 'Maritime':
  playoffCity = choice(listCity1)
  print ('Generating Playoff City 2:', playoffCity)
elif Region2 == 'Plateaux':
    playoffCity = choice(listCity2)
    print ('Generating Playoff City 2:', playoffCity)
elif Region2 == 'Centrale':
          playoffCity = choice(listCity3)
          print ('Generating Playoff City 2:', playoffCity)
elif Region2 == 'Kara':
          playoffCity = choice(listCity4)
          print ('Generating Playoff City 2:', playoffCity)
elif Region2 == 'Savanes':
          playoffCity = choice(listCity5)
          print ('Generating Playoff City 2:', playoffCity)
else :
            print ('Please enter a valid region')