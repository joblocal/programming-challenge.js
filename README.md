# TicTacToe

## Objective

Implement a [TicTacToe](https://en.wikipedia.org/wiki/Tic-tac-toe) game according to the wikipedia page.

Requirements:
* Use the provided base project as a starting point (babel, webpack already configured)
* Use a modern JavaScript framework, such as Vue.js, React or similar
* For styling, no specific CSS pre- or post-processor is required - plain CSS will suffice
* Everything can be done in the browser and does not need to be persisted across page reloads
* Target browser is Chrome (no need to optimize for other browsers)

Key Features:
* The game is a 3x3 board
* The game is played in the same browser window
* Before starting a game, the player names are provided
* One player starts with the first move
* After selecting a field on the board, the game automatically switches to the other player
* When the game is over, show the result of which player has won or if it was a draw

You have the following application architecture:
* `package.json` does not make any assumptions on your framework of choice, add packages as required.
* `webpack.config.babel.js` is already provided. Extend it as you see fit.
* `src/main.js` is the application entrypoint.
* `src/store` to implement your game logic and player handling (some more info provided in there)
* `src/components` to implement your view logic (use any framework you like, e.g. Vuejs, React, etc.)

Nice to haves:
* +1 if you add tests to the project
* +1 if you add code linting to the project

## Installation / Getting started

Clone this project locally - do not fork it. Ensure you have the following software (globally) installed on your system:

* [node.js](http://nodejs.org/) ^8.0.0
* [yarn](https://yarnpkg.com/en/docs/install) ^0.27.0

```sh
# install dependencies
$ yarn install

# start the dev server
$ yarn dev
```

## Building / transpiling the project

```sh
$ yarn build
```

## Project submission

Feel free to place this test on your Github, Gitlab, Bitbucket, etc account as a public repository. Send the link back to Joblocal. We are looking forward to hearing from you. Good luck! :)
