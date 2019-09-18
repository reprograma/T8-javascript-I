/* Você foi contratada para criar a lógica de um aplicativo que controla pedidos em um bar. Para funcionar sua aplicação precisa ter uma lógica capaz de executar as seguintes operações: 
1) Guardar o nome e o número da mesa do cliente
2) Ter uma função para somar os valores do pedido ao total
3) Ter uma função que permita subtrair do total um valor pago (aquela miga que sempre vai embora antes e deixa uma parte paga)
4) Ter uma função para dividir o valor da conta entre as pessoas da mesa
5) Mostrar na tela o nome, número da mesa, total de pessoas, total da conta e valor que cada um deve pagar
*/
let nomeCliente = 'Jô'
let numMesa = 6
let totalConta = 0
console.log(nomeCliente,numMesa,totalConta)

function fazerPedido(valor){
    totalConta = totalConta + valor // totalConta += valor 
}

function abaterPedido(valor){
    totalConta = totalConta - valor 
	console.log('Valor abatido: ', valor)
	console.log('Total:',totalConta)
}

function fecharConta(numeroPessoas){
    let valorIndividual = totalConta/numeroPessoas
    return `
    Fechamento da conta 
    ----------------------------------------
    Cliente: ${nomeCliente} Mesa: ${numMesa}
    ----------------------------------------
    Total: R$ ${totalConta}
    Total pessoas: ${numeroPessoas}
    Valor Individual: R$ ${valorIndividual}  `
}




//Escreva a função que retorne o resultado apresentado
// ola() -> "Hello, world!"
// ola(0) -> "Hello, world!"
// ola('Javascript') -> "Hello, world!"

function ola(parametro){
	return "Hello,world!"
}

//ou
function ola(){
	return "Hello,world!"
}

//-> Aqui basta criar uma função que retorne 
//a string "Hello,world!" independente do parâmetro passado na função

// calcule(5) -> 25
// calcule(2) -> 4

function calcule(x){
	return x**2
}


//Calcule o resultado da função a seguir: 
function confusion(a, b) {
	a = 2 * a + b
	return a
}
let x = 2
let y = 5

y = confusion(y, x) // Nesta linha calculamos o valor de y considerando a
//função dada, assim executamos confusion(5,2) pois o a=y e b=x, assim
// a função retorna o valor de a = 2*5+2 (aqui temos precedencia, então calculamos 
//primeiro o 2*5 = 10 e depois somamos 2). O resultado de a é 12, logo o valor
// de y passa a ser 12 (pois estamos atribuindo o resultado à y)

x = confusion(y, x) //Quando chegamos nessa linha, o valor de x = 2 (não foi alterado),
// mas o valor de y passou a ser 12, logo chamamos a função confusion(12,2).
// Assim, calculamos a = 2*12+2 = 26, que é o resultado final.


// Escreva uma função
// em Javascript que recebe
// um número devolve se ele é maior que um número gerado aleatoriamente

//Dica: Para gerar um número aleatório usamos o método random do objeto Math, 
// esse método retorna um valor aleatório entr 0 e 1 (não incluindo o 1)
// Se quisermos estender essa faixa, basta multiplicar a função por um número e aplicar uma 
//função de arredondamento para baixo (Math.floor) ,se quisermos manter o maior número fora da faixa, 
//ou para cima (Math.floor), se quisermos incluir esse valor na faixa e retirar o zero.
// ex.: Se quisermos um número de 0 a 9 basta fazer Math.floor(Math.random()*10),mas se quisermos
//um número de 1 a 10 basta fazer Math.ceil(Math.random()*10). Para saber mais veja o 
//link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function numeroMaiorqueAleatorio(num){  // Vamos partir da premissa que o usuário informa um número de 1 até 10
    let numAleatorio = Math.ceil(Math.random()*10) // Gera o número aleatório de 1 a 10
    console.log(num + " é maior " + numAleatorio+ "?") //Só para mostrar o que estamos comparando
    return num > numAleatorio // Retorna true se o nosso numero for maior e false se for menor ou igual
}


// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.
//-> Para mostrar a string correspondente à representação binária de um número usamos o método toString
// que é aplicado para conversão de números para o formato string. Se não usarmos nada no método, ele aplica a conversão 
// usando a base decimal e o número fica o mesma, só que passa a ser uma string. Se passamos o parâmetro 2, ou seja, fazemos 
// toString(2) a conversão do número para string é feita usando a base binária (base 2, representando os números com 0 e 1).
// Para entender mais sobre representação binária de números veja o link: https://www.youtube.com/watch?v=J5q7s7l2EuI&t=131s

function mostrarBinario(numero){
	return numero.toString(2)
}

//-> Curiosidade: Se quiser fazer o processo inverso, ou seja, converter do formato binário(string) para o formato decimal,
//você pode fazer parseInt(binario, 2); onde binário é a string correspondente ao número binário Ex.: parseInt("101",2) = 5

// Escreva uma função em Javascript
// que recebe dois números e retorna o resto da divisão entre eles

function restoDivisao(a,b){
	return a%b  //Usamos o operador % (resto da divisão). Lembrando que esse valor é o resto, e não o resultado da divisão
}


// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// possuem a mesma quantidade de letras
// -> Dica: aqui precisamos lançar mão de uma propriedade de toda a string, essa propriedade se chama length(tamanho em inglês)
// toda string possui essa propriedade, logo, para saber o tamanho de uma string basta fazer  'minhastring'.length ou 
// nomeDaVariavel.length. Assim, para verificar se duas ou mais strings possuem o mesmo tamanho (a mesma quantidade de caracteres)
// basta comparar as suas propriedades length

function compararTamanhoString(texto1,texto2){
	return texto1.length == texto2.length
}

//-> Se eu aplicar a função para comparar a quantidade de letras das palavras "banana" e "abacate" terei um resultado false,
//porque essas palavras possuem tamanhos diferentes


// Escreva uma função que recebe um número e retorna true se o número é par e false se for ímpar
//Dica: Usamos o resto da divisão por 2 para saber se um número é par ou ímpar
function ehPar(numero){
	return numero%2 == 0 //Se o número for par, quando ele for dividido por 2 retornará resto igual a 0, logo a expressão retorna true
}

// ou
function ehPar(numero){
	return !(numero%2)  //Se o número for par o resto será 0, então usamos o operador de negação (!) antes para forçar a conversão
	// do valor para booleano. Se o resto for 0 (se for par),o valor booleano de zero é falso. Então !0 (Não zero) = !false (Não false), 
	// O operador não inverte o valor booleano, logo Não false é true (verdadeiro).
}


// Escreva uma função que receba uma string e retorne o número correspondente à primeira letra considerando a tabela ascii
// Dica: Já existe uma função que faz isso pra gente, ela se chama charCodeAt .Para saber mais sobre ela 
// veja: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function mostrarAsc(texto){
	return texto.charCodeAt(0) //Zero corresponde ao primeiro caracter de uma string
}

// Pesquise uma função (método) que é aplicável à objetos do tipo string e uma aplicável ao tipo número 
