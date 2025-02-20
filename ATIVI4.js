function gerarEmail(nomeCompleto){
    let nomes = nomeCompleto.toLowerCase().split(" ");     // Converte para minúsculas e divide o nome
    let primeiroNome = nomes[0];                           // Primeiro nome
    let ultimoNome = nomes[nomes.length - 1];              // Último nome
    let email = `${primeiroNome}.${ultimoNome}@facens.br`; // Formata o e-mail
    console.log(email);                                    // Exibe o e-mail gerado
}
gerarEmail("Alanis Prado Silva");                        // Saída: edson.feitosa@facens.br