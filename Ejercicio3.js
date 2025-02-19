const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let arraysonidos=[];
let arraytipos=[];
let contadortipos=[];
let contador=1;
let sound;

for(user of users){ 
for(let sonido in user.favoritesSounds){
    arraysonidos.push(sonido);
    if(!arraytipos.includes(sonido)){
      arraytipos.push(sonido);
    }
}
}

/* console.log(arraysonidos);
console.log(arraytipos); */
//posiblemente esto sea muy enrevesado. funciona, pero estoy seguro de que hay una forma mas sencilla que no veo ahora
for(let i=0; i<arraytipos.length; i++){
  sound=arraytipos[i];
  for(let j=0; j<arraysonidos.length;j++){
    if(arraytipos[i]== arraysonidos[j]){
      contadortipos[i]={sound,contador};
      contador++;
    }
  }
  contador=1;
}

console.log(contadortipos);