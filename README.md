# ryan-hubble-pw-generator

# Description

For this project I had to build a password generator that has the user provide some information about the criteria for creating the password. To do achieve this, I used a series of prompts that obrtain this information from the user and then used their answers to build the password.

# User Guide

1. Click 'Generate Password'
2. When prompted for character length, enter a number between 8 and 128
3. When prompted for the type of characters to be included in the password, click 'Ok' for yes and 'Cancel' for no
4. Your password will be displayed in the alert
5. Click 'Ok' to dismiss the alert
6. To generate another password, click 'Generate Password' again

# Process

I first started by commenting out the steps for how this application should function within the javascript file. This really helped with being able to break out various aspects of the code. After this, I then started with the function that would actually create the passcode. After I was able to successfully generate a password in the console.log based on the criteria, I then attempted to get the generated password to display in the box on the page, but this surprisingly challenging.

![Image of pseudocode](/Assets/pseudocode.png)

---

# User Input Validation

In order to limit invalid inputs from users, I had to first build out some logic that would alert the user if they entered something invalid. For example, for the character length prompt, I made sure that they can only enter a number between 8 and 128 per the requirements. In addition, I added validation ensuring that they would select 'Ok' for at least one of the character criteria.

![Image of character length prompt](/Assets/character-length.png)

![Image of character prompt validation](/Assets/character-value-validation.png)

![Image of character type confirmation](/Assets/character-type-prompt.png)

![Image of character type validation](/Assets/character-type-validation.png)

---

# Password Logic

To build the password, I created many different functions based of of the user's responses to the prompt. I started by generated a number that contained a number of charactes equal to what they entered for the character length. From there, I used additional functions to add or remove characters as necessary.

---

# Challenges

The biggest challenge for me was trying to get the generated password to print in the box on the webpage. I had no trouble getting it to print in the console, but wasn't able to successfully get it to print in that box. I eventually just opted for an alert that displays the generated password.