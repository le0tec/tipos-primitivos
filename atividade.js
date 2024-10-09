//variáveis nome e idade
var nome = "leonardo";
var idade = "29";
console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");

//--------------------------------------------------------------------------
// variáveis nome e cidade
var nome = "Leonardo";
var cidade = "São Lourenço da Mata";
console.log("Olá, meu nome é " + nome + " e sou da cidade de " + cidade + ".");

//------------------------------------------------------------
// variáveis numéricas
var num1 = 20;
var num2 = 50;
var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);

//---------------------------------------------------------
// variáveis do triângulo
var base = 40;
var altura = 25;
var area = (base * altura) / 2;
console.log("A área do triângulo é " + area);

//-------------------------------------------------------------
// variáveis com notas
var nota1 = 7.5;
var nota2 = 8.0;
var nota3 = 9.2;
var media = (nota1 + nota2 + nota3) / 3;
console.log("A média do aluno é " + media);

//---------------------------------------------------------
// Preço do produto
var preco = 5500;
var desconto = 35;
var desconto = (preco * desconto) / 100;
var precoComDesconto = preco - desconto;
console.log("O valor do produto com desconto é: R$ " + precoComDesconto);

//-------------------------------------------------------------------------
// Salário bruto
var salarioBruto = 4500;
var imposto = 0;

if (salarioBruto <= 2000) {
    imposto = 0; // Isento
} else if (salarioBruto <= 3500) {
    imposto = (salarioBruto - 2000) * 0.15; // 15% sobre o que ultrapassa 2000
} else {
    // 15% sobre os R$ 1.500 (de 2000 a 3500) + 25% sobre o que ultrapassa 3500
    imposto = (1500 * 0.15) + (salarioBruto - 3500) * 0.25;
}
console.log("O imposto de renda a ser pago é: R$ " + imposto);

//------------------------------------------------------------------------------------
// Valores das moedas
var valorEmReais = 500;
var taxaCambioDolar = 0.19;
var taxaCambioEuro = 0.17;
var valorEmDolares = valorEmReais * taxaCambioDolar;
var valorEmEuros = valorEmReais * taxaCambioEuro;
console.log("R$ " + valorEmReais + " é equivalente a: ");
console.log(valorEmDolares + " Dólares");
console.log(valorEmEuros + " Euros");

//-----------------------------------------------------------------------------------
// Celsius
var celsius = 36;
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit.");

//------------------------------------------------------------------------------
// Variáveis de peso e altura
var peso = 88; // em kg
var altura = 1.84; // em metros
var imc = peso / (altura * altura);
console.log("O IMC é: " + imc.toFixed(2));




