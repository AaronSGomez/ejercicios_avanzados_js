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
    return "el texto no esta incluido en el array";
  }else{
  return position;  
  }
}

console.log(findArrayIndex(mainCharacters,"Leia"));
console.log(findArrayIndex(mainCharacters,"Chewaca"));
console.log(findArrayIndex(mainCharacters,"Obi.Wan"));
console.log(findArrayIndex(mainCharacters,"Obi-Wan"));



