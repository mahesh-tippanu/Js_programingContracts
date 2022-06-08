//Q3 -  Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
const prompts = require("prompt-sync")();
let numUnitString = prompts('Enter a Number 1, 10, 100, 1000,... ');
let tenPowArray = ['unit','ten','hundred','thousand','ten thousand','hundred thousand','one million','ten million','hundred million','one billion'];
let unitsArray = [1,10,100,1000,10000,100000,1000000,10000000,1000000000];
if(unitsArray.includes(parseInt(numUnitString))){
    console.log('The unit of entered number is : ' + tenPowArray[ numUnitString.length - 1] + '\n');
}else{console.log('Invalid Input. \n')}