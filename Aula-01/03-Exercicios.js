// Considerando os valores de x = 2, y = 5 e z = 15 informe o resultado das seguintes operações:

// x + y - z
-8

// x/y
0.4

// y*z
75

// x**y+z/y
35

// z//y
Anulada, o operador // não existe em JS 

// z%y
0

// z//x
Anulada, o operador // não existe em JS

// z%x
1

// (x+y)*(z-x)/8
11.375

// 3*x + 5*y + 0.5*4
33

// x=y+z
20

// 7*x
140

// Seja 2*pi*raio a fórmula que calcula a medida de uma circunferencia, calcule a  circunferência correspondente aos seguintes raios

// r1 = 58
let c1 = 2*Math.PI*r1
364.424747816416

// r2 = 18/5
let c2 = 2*Math.PI*r2
22.61946710584651

//Ou...você pode criar uma função
function circunferencia(raio){
    return 2*Math.PI*raio
}
// E chamar as funções com os respectivos valores

c1 = circunferencia(r1)
c2 = circunferencia(r2)

// Retorne o resultado das seguintes operações, considerando
// let a = 1, b = 2, c = 3

//(18 < 2 * 5) 
false

// a > b && a > c
false

// a < c
true

// a == c-b
true

// b /=8 //Esse operador é o mesmo que b = b /8
0.25 

// a === c-b
false

// a >= b
true

// b**a > b*c
false

// a++ (pós incremento, mesmo que a=a+1)
1 // Ele adiciona 1, mas mostra o valor atual de a (2).Se você der um console.log(a) vai ver!

// ++a (pré incremento, mesmo que a=a+1) 
3 //mostra o valor já incrementado

// a+=2 //mesmo que a = a+2
5

// a++ > b++ || a-- > 0
true 
// -> a++ > b++ -> true 
// ->  a-- > 0  -> true
// -> true || (ou) true -> true

// b + a + "nana" + c + b
'8.25nana32.25'

// "Ana" > "ana"
false

// "ANA" > "Ana"
false

// "zeca" > "ana"
true

// "ANA" != "Ana"
true

// 3*'Ana'
NaN

// '5' === 5 //Igualdade restrita - compara os valores e os tipos - valores iguais, mas tipos diferentes (string e number)
false

// '5'== 5 //Igualdade - compara somente os valores
true

// 5 === 25/5
true

// 4 != 3
true

// "4" !== 3
true

// true == 0
false

// false == 0
true

// !!5
true

// !0
true

// !""
true

// "Come"+ " " + "Abacate!"
'Come Abacate!'
