
//+
//Rock = +1
//Paper = +2
//Scissors = +3

//Win = Z = +6
//Draw = Y = +3
//Lose = X = +0

//Shapes
//A = Rock
//B = Paper
//C = Scissors

const data = await Deno.readTextFile("./input.txt");

let list:string[] = data.split('\n'); 
let score:number = 0;
let actualRound:string[];

for(let i = 0; i < list.length; i++){
  actualRound = list[i].split(" ");
  if(actualRound[0] == "A" && actualRound[1] == "X") score += 3;
  else if(actualRound[0] == "A" && actualRound[1] == "Y") score += 1+3;
  else if(actualRound[0] == "A" && actualRound[1] == "Z") score += 2+6;
  else if(actualRound[0] == "B" && actualRound[1] == "X") score += 1;
  else if(actualRound[0] == "B" && actualRound[1] == "Y") score += 2+3;
  else if(actualRound[0] == "B" && actualRound[1] == "Z") score += 3+6;
  else if(actualRound[0] == "C" && actualRound[1] == "X") score += 2;
  else if(actualRound[0] == "C" && actualRound[1] == "Y") score += 3+3;
  else if(actualRound[0] == "C" && actualRound[1] == "Z") score += 1+6;
  actualRound = [];
}

console.log(score);
