//Q4 - Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
const prompts = require("prompt-sync")();
let a = parseInt(prompts('Enter 1st number: '));
let b = parseInt(prompts('Enter 2nd number: '));
let c = parseInt(prompts('Enter 3rd number: '));
let arithmeticOperationsArray = [a+b*c,a%b+c,c+a/b,a*b+c];
console.log(arithmeticOperationsArray);
arithmeticOperationsArray.sort(function(a,b){return a - b });
console.log('The Max and Min values are : ' + arithmeticOperationsArray[arithmeticOperationsArray.length-1] + ' and ' + arithmeticOperationsArray[0]);