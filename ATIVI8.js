function contarVogais(str) {
    let count = 0;
    const vogais = 'aeiou'; // Definindo as vogais minúsculas

    // Percorrendo cada caractere da string
    for (let i = 0; i < str.length; i++) {
        // Verificando se o caractere é uma vogal
        if (vogais.includes(str[i])) {
            count++; // Incrementa o contador
        }
    }
    
    return count; // Retorna o número de vogais
}

// Testando a função
console.log(contarVogais("exemplo")); // Saída: 3