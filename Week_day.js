//Q2 - Read a number and display week Day
const prompts = require("prompt-sync")();
let dayNum  = parseInt(prompts('Enter a day of week in number : '));
let weekDaytArray = ['Monday','Tuesday','Wednessday','Thursday','Friday','Saturaday','Sunday'];
if(dayNum >0 && dayNum <8 ){
    console.log('The day of the week is : ' + weekDaytArray[dayNum - 1] + '\n');
}else{console.log('Invalid Input. \n')}