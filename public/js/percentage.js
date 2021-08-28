

function cardCounter (currList) {
  return currList.cards.length;
  
}


function findDone (currList) {
  return currList.name === "Done";
}


export function percentageCalc(board) {
  
  
  const numCardsList = board.map(cardCounter);
  
  const listLength = numCardsList.length;
  
  const totalCards = 0;
  
  for (let i = 0; i < listLength; i++) {
    totalCards = totalCards + numCardsList[i];
  }
  
  const doneList = board.filter(findDone);
  const doneCards = doneList[0].cards.length;
  
  
  return doneCards / totalCards;
}


