#!/usr/bin/env python3

def happy_new_year():
    countdown = 10
    
    while countdown >= 1:
        print(countdown)
        countdown -= 1
    
    print("Happy New Year!")


def square_integers(input_list):
    squared_list = []
    
    for num in input_list:
        squared_list.append(num ** 2)
    
    return squared_list

def fizzbuzz():
    
    pass
