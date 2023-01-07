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
let max: number[] = numbersList.sort((one, two) => (one > two ? -1 : 1));
/*for(let i = 0; i < numbersList.length; i++){
  for(let j = 0; j < max.length; j++){
    if(numbersList[i] > max[j]){
      if(j=0 && max[j] > max[j+1]){
        if(max[j+1] > max[j+2]) max[j+2] = max[j+1];
        max[j+1] = max[j];
      }

      max[j] = numbersList[i];

      break;
    }
  }
}
*/

console.log(max[0]+max[1]+max[2]);
