function verificarPalindromo(str) {
    // Remover espaços e transformar a string para minúsculas
    str = str.replace(/\s+/g, '').toLowerCase();

    // Verificar se a string é igual à sua reversa
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
}

// Testando a função
console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("civica")); 
console.log(verificarPalindromo("hello")); 


// console.log(5 === 5);  true: os dois são números e iguais
// console.log(5 === '5');  false: um é número e o outro é string, tipos diferentes
// console.log(0 === false); false: um é número e o outro é booleano, tipos diferentes
// onsole.log('5' === '5');  true: ambos são strings e iguais