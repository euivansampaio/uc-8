let listaDeAlunos = ['Ivan','Maria','Vitor','João','Thaís','Clarisse']


for (let index = 0; index < listaDeAlunos.length; index++) {
    console.log(index);
    if(index == 0){
        console.log('Valor igual a Zero: ' + listaDeAlunos[index]);
    }else if (index % 2 == 0){
        console.log('Valor igual Par: ' + listaDeAlunos[index]);
    }else{
    console.log('Valor igual Impar: ' + listaDeAlunos[index]);
    }
}