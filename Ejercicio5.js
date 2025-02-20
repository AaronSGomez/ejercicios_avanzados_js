function rollDice(caras){
  return Math.floor(Math.random()*(caras+1));
}

//simulamos 20 tiradas de un dado de 6 
for(let i=0; i<20; i++){
console.log(rollDice(6));
}