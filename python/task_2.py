from random import randrange


def check_input(input_value, min, max):

    # inform the user if something goes wrong.
    try:
        if min <= float(input_value) <= max:
            return True
        else:
            print('{} is out of range {} - {}, try again \n'.format(input_value, min, max))
            return False

    except ValueError:
        print('{} is not a number, try again \n'.format(input_value))
        return False


# The minimum should be in the range 0-150, and maximum in 75-200 (be sure that min < max).
while True:
    min_value = randrange(0, 150)
    max_value = randrange(75, 200)
    if min_value < max_value:
        break

while True:
    # Input prompt should be in format: Input number in range <min_value> - <max_value>:
    print('Input number in range {} - {}>:'.format(min_value, max_value))

    # Prompt user to input a number in a specified range and store it in input_value.
    input_value = input()

    # User should be forced to type in a number until it fulfills all the necessary conditions.
    if check_input(input_value, min_value, max_value):
        break
