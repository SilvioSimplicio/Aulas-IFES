/*
1 Soma de dois números: Crie uma função de seta que receba dois números como parâmetros e retorne a soma deles.
2 Subtração de dois números: Crie uma função de seta que receba dois números como parâmetros e retorne a subtração do primeiro pelo segundo.
3 Multiplicação de dois números: Crie uma função de seta que receba dois números como parâmetros e retorne o resultado da multiplicação deles.
4 Divisão de dois números: Crie uma função de seta que receba dois números como parâmetros e retorne o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar o caso em que o segundo número é zero.
5 Verificar se um número é par ou ímpar: Crie uma função de seta que receba um número como parâmetro e retorne true se ele for par e false caso contrário.
6 Verificar se um número é positivo, negativo ou zero: Crie uma função de seta que receba um número como parâmetro e retorne "positivo", "negativo" ou "zero" dependendo do valor.
7 Calcular o quadrado de um número: Crie uma função de seta que receba um número como parâmetro e retorne o quadrado desse número.
8 Calcular o fatorial de um número: Crie uma função de seta que receba um número como parâmetro e retorne o fatorial desse número.
9 Calcular a média de uma lista de números: Crie uma função de seta que receba uma lista de números como parâmetro e retorne a média deles.
10 Verificar se um número é primo: Crie uma função de seta que receba um número como parâmetro e retorne true se ele for primo e false caso contrário.*/

const soma = (num1, num2) => num1 + num2;
//console.log(soma(10,10));

const subtracao = (num1, num2) => num1 - num2;
//console.log(subtracao(10,5));

const multiplicacao = (num1, num2) => num1 * num2;
//console.log(multiplicacao(10,5));

/*const divisao = (num1, num2) => {
    if(num1 === 0 && num2 === 0)
        return 'Número indefinido: 0/0';
    else
        return num1 / num2;
}*/

//A mesma divisão com operador ternário

const divisao = (num1, num2) => (num1 === 0 && num2 === 0) ? 'Indefinição matemática 0/0.' : num1 / num2;
//console.log(divisao(10,2));
//console.log(divisao(0,0));

//par ou ímpar (par true; ímpar false)

const parOuImpar = (num1) => (num1%2 === 0) ? true:false;
//console.log(parOuImpar(2));

 const positivoNegativoOuZero = (num1) => (num1>0) ? 'O número é positivo.' : (num1<0) ? 'O número é negativo.': 'O número é zero.';
 //console.log(positivoNegativoOuZero(0));

 const quadrado = (num1) => (num1*num1);
 //console.log(quadrado(3));

 //calcular fatorial
 const fatorial = (num) => (num < 0) ? 'Não existe fatoração de número negativo.':(num===0)?1: num*fatorial(num-1) 
 //console.log(fatorial(2));

 //media em lista de números
 const media = (lista) => {
    let soma = 0;
    for(let i=0; i<lista.length;i++){
        soma += lista[i];
    } 
    //return soma/lista.length;
 }

//verificar se um número é primo
//Math.sqrt dá a raiz quadrada
const primo = (primo) => {
    if(primo<1) return false;
    for(let i=2; i<(primo); i++) {
        if(primo%i ===0) return false;

    }

    return true;
}