
let dataAtual =  new Date("2023-05-09");
let dataDoEvento =  new Date("2023-05-12");
let idadeParticipante = 20;
let numDeParticipantes = 150;


if (dataDoEvento > dataAtual){
   console.log('Evento permitido');
}else{
   console.log('Envento Inválido');
}

console.log(dataAtual);
console.log(dataDoEvento);

if (idadeParticipante > 18){
    console.log('Permitido a participação no evento');
 }else{
    console.log('Não permitido a participação no evento');
 }

 console.log(idadeParticipante);

 if (numDeParticipantes <= 100 ){
    console.log('Número de particiantes permitidos');
 }else{
    console.log('Número de participantes excedido');
 }
 
 console.log(numDeParticipantes);



