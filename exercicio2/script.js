let idade = prompt("Qual é a sua idade?");
let terminouEnsinoMedio = confirm("Você já terminou  ensino médio?");
let cursandoFaculdade = confirm("Voê já está cursando uma faculdade");

if(idade >=18){
    console.log("Você atigigiu a maior idade.");
}else{
	console.log("Você é menor de idade.");
}

if(terminouEnsinoMedio){
    console.log("Você já terminou o ensino médio.");
}else{
    console.log("Você não terminou o ensino médio.");
}

if (cursandoFaculdade) {    
    console.log("Você já está cursando a Faculdade");    
}else{
    console.log("Você não está cursando a Faculdade");
}
