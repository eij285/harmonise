

function cardCounter (currList) {
  return currList.cards.length;
  
}


function findDone (currList) {
  return currList.name === "Done";
}


export function percentageCalc(board) {
  
  
  
  const numCardsList = board.map(cardCounter);
  
  const listLength = numCardsList.length;
  
  
  
  let totalCards = 0;
  
  
  for (let x = 0; x < listLength; x++) {
    totalCards = totalCards + numCardsList[x];
  }
  
  
  
  const doneList = board.filter(findDone);

  
  const doneCards = doneList[0].cards.length;
  
  
  return doneCards / totalCards;
}


