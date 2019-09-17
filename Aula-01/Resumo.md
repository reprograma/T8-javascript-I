# RESUMÃO - Aula 01

## Entendendo o papel do JS:
Desabilitando o JS da página: chrome://settings/content (no Chrome)

## Variáveis
- Declaramos uma única vez `let nomeDaVariavel` ou `const nomeDaVariavel`
- Se declaramos e não atribuímos nenhum valor a variável retorna undefined;
- Atribuir um valor `nomeDaVariavel = valor` (o sinal = equivale a palavra "recebe");
- Podemos mudar o valor atribuindo um novo valor (a variável joga fora o valor anterior);
- Para saber o que está guardado numa variável basta digitar o nome desta variável ou usar um console.log() 

### Regras para dar nomes para variáveis em JS:
- Não pode ter espaço;
- Não pode começar por número;
- Não pode ter caracteres especiais , somente _ (underline e $);
- Não pode usar palavras reservadas (for, return, var);
- Devemos usar nomes semânticos (que representem o que estamos guardando na variável);
- Adotaremos o padrão CamelCase.

## Tipos
- `string`: textos representados entre aspas simples ou duplas 'texto' ou "texto";
- `number`: valores numéricos inteiros (ex: 15) e decimais (ex:12.5); 
- `boolean`: valores lógicos true ou false;
- `undefined`: valor indefinido (variável sem valor atribuido, referência a um valor inexistente);
- `null`: valor nulo;
- `object`: tudo o que não se encaixa nas demais categorias é classificado como objeto

O método `typeof` retorna o tipo de um determinado valor ou variável


## Operadores aritméticos
- Soma `+` (Atenção!!! Se um dos membros envolvidos na operação for uma string será feita uma concatenação, fique esperta)
- Subtração `-`
- Multiplicação `*`
- Divisão `/`
- Potência `**` 
- Resto da divisão `%` (5 dividido por 2 dá 2 e tem como resto da divisão 1)

## Sites de exercícios para praticar 
- // https://exercism.io/
- // https://www.freecodecamp.org/
- // https://www.hackerrank.com/
- // https://www.codewars.com/
