//username//
let userName = '';
userName = 'Jane'
userName ? console.log (`Hello, ${userName}`) : console.log ('Hello');
userQuestion = 'What\'s 9 + 10';
console.log(userQuestion);

//random num generator & eightball randomizer//
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
eightBall = randomNumber;

switch (eightBall) {
  case 1 :
    console.log('It is certain');
    break;
  case 2 :
    console.log('It is decidedly so');
    break;
  case 3 :
    console.log('Signs point to yes');
    break;
  case 4 :
    console.log('Reply hazy try again');
    break;
  case 5 :
    console.log('Cannot predict now');
    break;
  case 6 :
    console.log('Do not count on it');
    break;
  case 7 :
    console.log('My sources say no');
    break;
  case 8 :
    console.log('Outlook not so good');
    break;
  default :
    console.log('L');
    break; 
}
