function validarEmail(email) {
    // Verificando se existe exatamente um '@' e se existe um '.' após o '@'
    if (email.indexOf('@') !== -1 && email.indexOf('@') === email.lastIndexOf('@') && email.indexOf('.', email.indexOf('@')) !== -1) {
        return true;
    }
    return false;
}

// Testando a função
console.log(validarEmail("teste@exemplo.com")); // Saída: true
console.log(validarEmail("teste@exemplo")); // Saída: false
console.log(validarEmail("testeexemplo.com")); // Saída: false
