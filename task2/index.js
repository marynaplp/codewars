let box =
  "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon";
function buyTofu(cost, box) {
  //your code here

  let boxArr = box.split(" ");

  let monCount = boxArr.filter((elem) => elem === "mon").length;
  let monmeCount = boxArr.filter((elem) => elem === "monme").length;

  let totalAmount = monCount + (monmeCount * 60);

 let NumberOfMonmeUsed = 0;
 let NumberOfMonUsed = 0;

let monCounter = monCount;
let monmeCounter = monmeCount;

while(cost >= 60 && monmeCounter > 0){
  NumberOfMonmeUsed =NumberOfMonmeUsed+ 1;
  cost =cost - 60;
  monmeCounter--;
}
while(cost >= 1 && monCounter > 0){
  NumberOfMonUsed =NumberOfMonUsed+ 1;
  cost =cost - 1;
  monCounter--;
}
let TotalCoinsUsed = NumberOfMonmeUsed + NumberOfMonUsed;


  if (cost>0) 
  {
  return "leaving the market";
  }
  return [monCount, monmeCount, totalAmount, TotalCoinsUsed];
}

console.log(buyTofu(124, box));
