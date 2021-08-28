

function cardCounter (currList) {
  return currList.cards.length;
  
}


function findDone (currList) {
  return currList.name === "Done";
}


export function percentageCalc(board) {
  
  
  console.log(Array.isArray(board[0].cards))
  
  const numCardsList = board.map(cardCounter);
  
  const listLength = numCardsList.length;
  
  
  console.log(listLength)
  
  const totalCards = 0;
  
  for (let i = 0; i < listLength; i++) {
    totalCards = totalCards + numCardsList[i];
  }
  
  console.log(totalCards)
  
  
  const doneList = board.filter(findDone);
  
  
  console.log(doneList)
  
  const doneCards = doneList[0].cards.length;
  
  console.log(doneCards)
  
  
  console.log(doneCards / totalCards)
  
  return doneCards / totalCards;
}


