import * as fs from 'fs';

let rawText:string[] =  fs.readFileSync('./input.txt','utf8').split('\n\n');
let numbersList:number[] = [];
let auxiliarNumbersList:string[];
let auxiliarNumber:number = 0;

for(let i = 0; i < rawText.length;i++){
  auxiliarNumbersList = rawText[i].split('\n');
  for(let i = 0; i < auxiliarNumbersList.length; i++){
    auxiliarNumber += Number(auxiliarNumbersList[i]);
  }
  numbersList.push(auxiliarNumber);
  auxiliarNumbersList = [];
  auxiliarNumber = 0;

}
let max: number = 0;
for(let i = 0; i < numbersList.length; i++){
  if(numbersList[i] > max) max = numbersList[i];
}
console.log(max);
