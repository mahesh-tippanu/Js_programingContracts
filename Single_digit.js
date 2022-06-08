//Q1 - Read Single digit number and write in Word
const prompts = require("prompt-sync")();
let num  = parseInt(prompts('Enter a single digit number : '));
let singleDisgitArray = ['Zero','One','Two','Three','Four','Five',"Six",'Seven','Eight','Nine'];
console.log('The entered number in word is :' + singleDisgitArray[num] + '\n');








