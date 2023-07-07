//Primeiro Exercicio

function calcularMedia() {

//Peça para digitar a Nota   
let PrimeiroBimestre = parseFloat(document.getElementById('PrimeiroBimestre').value);
let SegundoBimestre = parseFloat(document.getElementById('SegundoBimestre').value);
let TerceiroBimestre = parseFloat(document.getElementById('TerceiroBimestre').value);
let QuartoBimestre = parseFloat(document.getElementById('QuartoBimestre').value);

//Soma
let ResultadoFinal = (PrimeiroBimestre + SegundoBimestre + TerceiroBimestre + QuartoBimestre) / 4;

// Exibir o resultado
document.getElementById('Resultado').innerHTML = "A média é: " + ResultadoFinal; 

}





//Segundo Exercicio

function areaCirculo(){

//Peça para digitar a area do circulo
let RaioDoCirculo = parseFloat(document.getElementById('RaioDoCirculo').value);

//Converte o raio para um numero
RaioDoCirculo = parseFloat(RaioDoCirculo)

//Calcula a area do circulo
let AreaDoCirculo = (Math.PI * RaioDoCirculo * RaioDoCirculo).toFixed(2);

// Exibir o resultado
document.getElementById('ResultadoCirculo').innerHTML = "A Area do Circulo é: " + AreaDoCirculo;
}






//Terceiro Exercicio

function converterFahrenheit(){
// Solicitar a temperatura em Fahrenheit
let temperaturaFahrenheit = parseFloat(document.getElementById('ResultadoFahrenheit').value);

// Converter Fahrenheit para Celsius
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

// Exibir o resultado
console.log("A temperatura em graus Celsius é: " + temperaturaCelsius);
document.getElementById('ResultadoFahrenheit').innerHTML = "O Resultado é: " + temperaturaCelsius;
}






//Quarto Exercicio

function ResultadoSala() {

// Solicita as medidas da sala ao usuário
let ComprimentoSala = parseFloat(document.getElementById('ComprimentoSala').value);
let LarguraSala = parseFloat(document.getElementById('LarguraSala').value);

// Calcula a área da sala
let AreaSala = ComprimentoSala * LarguraSala;

// Calcula o perímetro da sala
let perimetro = 2 * (ComprimentoSala + LarguraSala);

// Exibe os resultados
document.getElementById('AreaDaSala').innerHTML = "A área da sala é: " + AreaSala + ' metros quadrados';
document.getElementById('PerimetroDaSala').innerHTML = "O perímetro da sala é: " + perimetro + ' metros';
}



//Quinto Exercicio


function ResultadoCozinha(){

// Solicita as dimensões da cozinha ao usuário
let ComprimentoCozinha = parseFloat(document.getElementById('ComprimentoCozinha').value);
let LarguraCozinha = parseFloat(document.getElementById('LarguraCozinha').value);

// Calcula a área da cozinha
let AreaCozinha = ComprimentoCozinha * LarguraCozinha;

// Calcula a quantidade de caixas de azulejos necessárias
let QuantidaDeCaixas = (Math.ceil(AreaCozinha / 2.5));

// Exibir o resultado
document.getElementById('AzulejoCozinha').innerHTML = "A Quantidade de Caixas é : " + QuantidaDeCaixas;

}