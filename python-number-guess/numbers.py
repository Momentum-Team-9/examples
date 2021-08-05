# Ensure random number value does not change

# import the random module
import random

# get a random number between 1-20
random_number = random.randrange(1, 20)
print('random number', random_number)
# random_number = 5
# print(random_number)


# get input from the user to start the game
user_input = input('Guess a number between 1 and 20. ')
# print(user_input)
# print(type(random_number))
guess_count = 1

while user_input != 'Quit':
    print('random number', random_number)
    user_input = int(user_input)
    print('guess count', guess_count)
    # print(type(user_input))

    # compare user input to random number
    # show user feedback about:
    # if the number matches
    # if the number is too high
    # if the number is too low
    if guess_count == 5:
        print('You have run out of guesses!')
        user_input = input('Would you like to play again? Yes or Quit. ')
        if user_input == 'Yes':
            random_number = random.randrange(1, 20)
            guess_count = 1
            user_input = input('Guess a number between 1 and 20. ')
    elif user_input == random_number:
        print('You got it right!')
        user_input = input('Would you like to play again? Yes or Quit. ')
        if user_input == 'Yes':
            random_number = random.randrange(1, 20)
            guess_count = 1
            user_input = input('Guess a number between 1 and 20. ')
    elif user_input < random_number:
        guess_count += 1
        print('Your number is too low. Guess again!')
        user_input = input()
    elif user_input > random_number:
        guess_count += 1
        print('Your number is too high. Guess again!')
        user_input = input()
    else:
        user_input = input('Guess a number between 1 and 20. ')
