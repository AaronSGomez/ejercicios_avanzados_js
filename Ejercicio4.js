const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
  ];

function findArrayIndex(array, text) {
  let position= Number.MAX_VALUE;
  for(let i=0; i<array.length; i++){
    if(array[i]==text){
      position=i;
    }
  }
  if(position==Number.MAX_VALUE){
    return null;
  }else{
  return position;  
  }
}

console.log(findArrayIndex(mainCharacters,"Leia"));
console.log(findArrayIndex(mainCharacters,"Chewaca"));
console.log(findArrayIndex(mainCharacters,"Obi.Wan"));
console.log(findArrayIndex(mainCharacters,"Obi-Wan"));

function removeItem(array, text){
  let position= findArrayIndex(array,text);
  if(position!=null){
  array.splice(position,1);
  return array;
  }else{
    return "nada que eliminar";
  }
}


console.log(mainCharacters);
console.log(removeItem(mainCharacters,"Leia"));
console.log(removeItem(mainCharacters,"eim"));
console.log(removeItem(mainCharacters,"Rey"));


