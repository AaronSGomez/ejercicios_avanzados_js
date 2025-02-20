const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array,origen,destino){
  listafinal=[];
  listafinal=array;
  let save;
  let cambio;
  //ordenamos las posiciones antes de intercambiarlas, para que no agrege undefined a la posicion
    if(origen>destino){
      cambio=origen;
      origen=destino;
      destino=cambio;
    }

  for(let i=0; i<array.length; i++){
        if(i==origen){
          save=array[origen];
          listafinal[origen]=array[destino];
        }else if(i==destino){
          listafinal[destino]=save;
        }
    }
  
  return listafinal;
}

console.log(fantasticFour);
console.log(swap(fantasticFour,1,3));
console.log(swap(fantasticFour,3,0));