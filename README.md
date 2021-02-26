## General info
There is no ruler in the universe of Southeros and pandemonium reigns. Shan, the gorilla king of the Space kingdom
wants to rule all Six Kingdoms in the universe of Southeros. He needs the support of 3 more kingdoms to be the ruler.

Each kingdom has an animal emblem and Shan needs to send a message with the animal in the message to win them over.
SPACE emblem - Gorilla, LAND emblem - Panda, WATER emblem - Octopus,
ICE emblem - Mammoth, AIR emblem - Owl, FIRE emblem - Dragon. 

Once he wins 3 more kingdoms, he is the ruler! The secret message needs to contain the letters of the animal in their emblem.
For example, secret message to the Land kingdom (emblem: Panda) needs to have the letter 'p','n','d' at-least once and 'a' atleast twice. If he sends "ahdvvnxxxautup" to the Land kingdom, he will win them over.
King Shan wants to make sure his secret message is not found by his enemies easily. So he decides to use the oldest of the
ciphers 'Seasar cipher’. A cipher is a type of secret code, where you swap the letters around so that no-one can read your
message.

To make the secret message encrypted, King Shan uses a secret key, which is the number of characters in the emblem.
If King Shan wants to send a message to kingdom Air, he uses the number 3 as the cipher key, as emblem ‘owl’ has 3
characters. So, to encrypt the letter ‘a’, just move 3 letters clockwise on the message wheel, which will give the letter ‘d’.
	
## Technologies
Project is created with:
* Typescript
* Mocha.js
* Node.js
	
## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## Test
To test this project, using npm comment out last 2 lines of src/geektrust.ts and use the command:

```
$ npm run test
```
