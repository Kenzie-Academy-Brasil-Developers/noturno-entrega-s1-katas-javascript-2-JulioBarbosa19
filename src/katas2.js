// comece a criar a sua função add na linha abaixo

 function add(numero1, numero2){
     return numero1 + numero2;
 }
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
 function multiply(numero1, numero2){
     return numero1 * numero2;
 }

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(numero1, numero2){
    return numero1 ** numero2;
}

// descomente a linha seguinte para testar sua função
  console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }
    let resultado = numero;
    let primeiromulti = numero - 1;
    for(let contador = primeiromulti; contador > 1; contador--){
         numero = numero * contador;
    }

    return numero;
     
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
