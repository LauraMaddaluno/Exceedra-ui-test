## Exeedra Front-end Developer Tech Test

My goal for this technical test was to provide clean code that met all the requirements. Despite my desire to start testing following a TDD approach, I had to make a decision due to the time I could devote to it, so I preferred to provide a working interface product.

To run this project:

### To Run

- Clone the Repo: `git clone https://github.com/LauraMaddaluno/Exceedra-ui-test`

#### Start App

```
npm install
```

```
Terminal 1: npm run server
```

```
Terminal 2: npm start
```

## Technology

#### Frontend:

I build the front end in React, using Javascript, and styled using CSS and Bootstrap.

#### Backend:

I mocked the backend, using JSON server and creating my own rest API. I chose this option to retrive the players, thinking that it could have been beneficial for the tests and also thinking about a possible expancion of the project, adding new player from the user input.

### Tech test requirements:

Brief  
You are the accountant of a tennis club. You are also a renowned Front End developer they know they cannot do anything without you. The first task in your list is to prepare a registration form for new users, which takes them to a welcome page with a list of all players in the club.
You also want to make the website pleasant to use, to make it attractive to potential new club members, so you know all the tricks to make the user experience as neat as possible, with good use of colours and fonts.

You may use  
HTML for markup (of course)
Either plain CSS or a preprocessor, such as Sass/LESS. Use of UI frameworks such as Bootstrap is acceptable
JavaScript or a JavaScript library/framework for interaction
Save your code in a repository using version control software

Things to consider  
The register page will be used on desktop and mobile devices
It should ask at least for name, surname, email address and – of course – a password  
It may be useful for the user to know when they have made an error when using the form, and where  
When the user clicks ‘Register’, display the submitted data in the console as a JSON object  
A successful registration should take the user to a welcome page with the list of players in descending order by points, but it would be nice if they could be sorted by other parameters  
You may want to collect a user’s nationality, favourite Pokémon or favourite Star Wars character. Consider connecting to an API and displaying data in a dropdown for the user to select  
Countries – https://restcountries.com/  
Pokémon – https://pokeapi.co/  
Star Wars - https://swapi.dev/  
Enjoy a challenge?  
Consider integrating the login form with the registration form, for returning users.
