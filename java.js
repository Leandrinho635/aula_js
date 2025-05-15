/*Criando uma função para o cálculo do IMC*/

/* Tipos de dados:

int = números inteiros
float = números flutuantes, exemplo: 6.78; 5.20, etc.
string = texto
boolean = verdadeiro ou falso (true or false) */

function calcImc(){

    let altura = (document.getElementById("al").value)/100; // Divisão por 100 para converter em outros.
    let peso = document.getElementById("ps").value
    
    imc = peso / (altura * altura); // Calcular o IMC
    window.alert('Seu IMC é ' + imc); // Mostrando o IMC em janela
}

function alternarTema_claro() {
    const corpo = document.body;
    corpo.classList.toggle("claro");    
}

function alternarTema_escuro() {
    const corpo = document.body;
    corpo.classList.toggle("escuro");
}