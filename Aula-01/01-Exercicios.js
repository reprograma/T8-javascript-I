// Exercicios 01

// Declare uma variável constante com um nome válido
// -> Não é possível declarar uma constante sem atribuir um valor a ela
const nomeVariavel = 'valor'

// Mostre o conteúdo dessa variável
// -> Só conseguimos mostrar uma variável que existe, para isso passamos um valor para a variável criada
nomeVariavel  // Para ver o valor armazenado numa variável basta escrever o nome dela
console.log(nomeVariavel)
// ou
document.write(nomeVariavel)

// Atribua um valor arbitrário à essa variável
// -> Já fizemos isso quando atribuimos a string 'valor' à variável

// Mostre um alerta na tela utilizando o conteúdo dessa variável
alert(nomeVariavel)

// Declare uma variável(let) chamada 'mensagem' e atribua o valor "Olá" a essa variável
let mensagem = 'Olá'

// Declare uma variável(let) chamada 'nome' e atribua a ela o valor informado pelo(a) usuário(a)
let nome = prompt('Digite o seu nome')

// Mostre na tela do navegador a mensagem composta pela junção das variáveis 'mensagem' e 'nome'
alert(mensagem + " " + nome) // O comando alert não entende se você separar comandos por vírgula, você precisa mostrar uma 
//string concatenada / note que unimos os valores e adicionamos uma string correspondente ao espaço no meio
// outra forma usando template string
alert(`${mensagem} ${nome}`) // Nessa sintaxe nova você escreve a mensagem entre crases e as variáveis são passadas dentro do 
// do identificador ${aqui_vai_a_variavel}

// Sabe aquela variável que você criou? Tente atribuir um novo valor à ela
nomeVariavel = 'novo valor' // -> Essa tentativa retorna um erro porque a variável que criamos é do tipo const, e ela protege 
// seu código impedindo que você modifique o seu valor
// Caso você queira modificar valores de uma variável você deve declarar ela como let 

// Crie uma variável(let) chamada 'idade' e atribua a ela o valor null
let idade = null 

// Crie uma variável anoNascimento e atribua à ela o valor correspondente ao seu ano de nascimento
const anoNascimento = 1983 // Vou considerar um valor fixo

// Atribua o resultado 2019 - anoNascimento à variável idade
idade = 2019 - anoNascimento // Note que para atribuir um novo valor à variável basta chamar o nome dela (porque ela já foi declarada)
// Outro ponto interessante, você pode "atribuir" operações a uma variável, neste caso é calculado o resultado da consta à direita 
// primeiro e posteriormente esse resultado é guardado na variável

// Mostre no console o valor atual da variável idade
console.log('O valor da idade é', idade) //Note que se utilizarmos vírgula no console.log a linguagem já adiciona um espaço separando 
// o texto do valor retornado pela variável

// Crie uma variável chamada euAmoJS e atribua a ela o valor true (verdadeiro)
const euAmoJS = true // Note que é conste porque o amor nunca muda, nunca acaba!
